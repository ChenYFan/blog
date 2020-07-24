/**
 * ER (Enterprise RIA)
 * Copyright 2013 Baidu Inc. All rights reserved.
 *
 * @file Deferred类实现
 * @author otakustay
 */
var assert = require('assert');

/**
  * 尝试执行相关的回调函数
  *
  * 当`deferred`处于非**pending**状态时，根据其状态，
  * 立即异步地运行对应的回调函数
  *
  * @param {Deferred} deferred 需要处理的`Deferred`实例
  */
function tryFlush(deferred) {
    if (deferred.state === 'pending') {
        return;
    }

    var callbacks = deferred.state === 'resolved'
        ? deferred._doneCallbacks.slice()
        : deferred._failCallbacks.slice();

    function flush() {
        for (var i = 0; i < callbacks.length; i++) {
            var callback = callbacks[i];
            try {
                // 回调时的this应该是`Promise`，没有`resolve`等方法
                callback.apply(deferred.promise, deferred._args);
            }
            catch (ex) {
            }
        }
    }

    if (deferred.syncModeEnabled) {
        flush();
    }
    else {
        process.nextTick(flush);
    }

    deferred._doneCallbacks = [];
    deferred._failCallbacks = [];
}

/**
  * 将一个原有的`Deferred`与一个新的`Deferred`对象连接起来
  *
  * 该方法作为`then`方法的核心
  *
  * @param {Deferred} original 原`Deferred`对象
  * @param {Deferred} deferred 新`Deferred`对象
  * @param {callback} 当`original`运行完毕后，需要执行的函数
  * @param {string} actionType 关联的动作类型，`'resolve'`或`'reject'`
  * @return {function} 关联函数，可注册在`original`的相关回调函数上
  */
function pipe(original, deferred, callback, actionType) {
    return function () {
        // `.then(done)`及`.then(null, fail)`时使用
        //
        // 根据`callback`的行为，进行以下处理：
        //
        // - 如果`callback`返回值，则用该值改`deferred`为**resolved**
        // - 如果`callback`抛出异常，则用异常改`deferred`为**rejected**
        if (typeof callback === 'function') {
            var resolver = deferred.resolver;
            try {
                var returnValue =
                    callback.apply(original.promise, arguments);

                if (Deferred.isPromise(returnValue)) {
                    returnValue.then(resolver.resolve, resolver.reject);
                }
                else {
                    resolver.resolve(returnValue);
                }
            }
            catch (error) {
                resolver.reject(error);
            }
        }
        // `.then()`及`.then(done, null)`时使用
        //
        // 直接使用原`Deferred`保存的参数将`deferred`改为对应状态
        else {
            deferred[actionType].apply(deferred, original._args);
        }
    };
}

/**
  * Deferred类
  *
  * 类似于jQuery的Deferred对象，是对异步操作的一种封装
  *
  * @constructor
  */
function Deferred() {
    this.state = 'pending';
    this._args = null;
    this._doneCallbacks = [];
    this._failCallbacks = [];

    /**
      * 与当前对象关联的`Promise`对象
      *
      * 一个`Promise`对象是对`Deferred`对象的**只读**状态的表达，
      * `Promise`对象拥有所有添加回调函数的方法，包括：
      *
      * - `done`
      * - `fail`
      * - `ensure`
      * - `then`
      *
      * 但`Promise`对象并不包改变`Deferred`对象的方法，包括：
      *
      * - `resolve`
      * - `reject`
      *
      * @type {Promise}
      * @public
      */
    this.promise =  {
        done: this.done.bind(this),
        fail: this.fail.bind(this),
        ensure: this.ensure.bind(this),
        then: this.then.bind(this)
    };
    // 形成环引用，保证`.promise.promise`能运行
    this.promise.promise = this.promise;


    /**
      * 与当前对象关联的`Resolver`对象
      *
      * 一个`Resolver`对象是对`Deferred`对象的**只写**状态的表达，
      * `Resolver`对象拥有所有改变状态的方法，包括：
      *
      * - `resolve`
      * - `reject
      *
      * @type {Resolver}
      * @public
      */
    this.resolver = {
        resolve: this.resolve.bind(this),
        reject: this.reject.bind(this)
    };
}

require('./Observable').enable(Deferred);

/**
  * 判断一个对象是否是一个`Promise`对象
  *
  * 该方法采用灵活的判断方式，并非要求`value`为`Deferred`的实例
  *
  * @param {*} value 需要判断的对象
  * @return {boolean} 如果`value`是`Promise`对象，则返回true
  */
Deferred.isPromise = function (value) {
    return value && typeof value.then === 'function';
};

/**
  * 是否启用同步模式。
  *
  * 在同步模式下，`Deferred`对象并不符合Promise/A规范，
  * 当对象进入或处于**resolved**或**rejected**状态时，
  * 添加的回调函数会**立即**、**同步**地被执行。
  *
  * @type {boolean}
  * @public
  */
Deferred.prototype.syncModeEnabled = false;

/**
  * 将当前对象状态设置为**resolved**，并执行所有成功回调函数
  *
  * @param {...*} args 执行回调时的参数
  * @public
  */
Deferred.prototype.resolve = function () {
    if (this.state !== 'pending') {
        return;
    }

    this.state = 'resolved';
    this._args = [].slice.call(arguments);

    Deferred.fire(
        'resolve',
        {
            deferred: this,
            args: this._args,
            reason: this._args[0]
        }
    );

    tryFlush(this);
};

/**
  * 将当前对象状态设置为**rejected**，并执行所有失败回调函数
  *
  * @param {...*} args 执行回调时的参数
  * @public
  */
Deferred.prototype.reject = function () {
    if (this.state !== 'pending') {
        return;
    }

    this.state = 'rejected';
    this._args = [].slice.call(arguments);

    Deferred.fire(
        'reject',
        {
            deferred: this,
            args: this._args,
            reason: this._args[0]
        }
    );

    tryFlush(this);
};

/**
  * 添加一个成功回调函数
  *
  * 本方法相当于`.then(callback, null)，具体参考`then`方法的说明al
  *
  * @param {function} callback 需要添加的回调函数
  * @return {Promise} 新的`Promise`对象
  * @public
  */
Deferred.prototype.done = function (callback) {
    return this.then(callback);
};

/**
  * 添加一个失败回调函数
  *
  * 本方法相当于`.then(null, callback)，具体参考`then`方法的说明
  *
  * @param {function} callback 需要添加的回调函数
  * @return {Promise} 新的`Promise`对象
  * @public
  */
Deferred.prototype.fail = function (callback) {
    return this.then(null, callback);
};


/**
  * 添加一个无论成功还是失败均执行的回调函数
  *
  * 本方法相当于`.then(callback, callback)，具体参考`then`方法的说明
  *
  * @param {function} callback 需要添加的回调函数
  * @return {Promise} 新的`Promise`对象
  * @public
  */
Deferred.prototype.ensure = function (callback) {
    return this.then(callback, callback);
};

/**
  * 添加成功回调函数及可选的失败回调函数
  *
  * 该函数会返回一个新的`Promise`对象，新`Promise`对象将有以下行为：
  *
  * - 当原有`Deferred`对象进入**resolved**状态时，执行`done`回调函数，
  *   并根据函数的返回值进行逻辑
  * - 当原有`Deferred`对象进入**rejected**状态时，执行`fail`回调函数，
  *   并根据函数的返回值进行逻辑
  *
  * 其中**根据函数的返回值进行逻辑**具体如下：
  *
  * - 当函数返回非`null`或`undefined`时，使用返回值进入**resolved**状态
  * - 当函数抛出异常时，使用异常对象进入**rejected**状态
  *
  * 另如果当前`Deferred`对象不处在**pending**状态，则：
  *
  * - 如果处在**resolved**状态，则成功回调函数会被立即异步执行
  * - 如果处在**rejected**状态，则失败回调函数会被立即异步执行
  *
  * @param {?function} done 成功时执行的回调函数
  * @param {function=} fail 失败时执行的回调函数，可选参数
  * @return {Promise} 新的`Promise`对象
  * @public
  */
Deferred.prototype.then = function (done, fail) {
    var deferred = new Deferred();
    deferred.syncModeEnabled = this.syncModeEnabled;

    this._doneCallbacks.push(pipe(this, deferred, done, 'resolve'));
    this._failCallbacks.push(pipe(this, deferred, fail, 'reject'));

    tryFlush(this);

    return deferred.promise;
};

// 暂不支持`progress`，
// 社区对`progress`处理函数的返回值和异常的传递还在讨论中

/**
  * 生成一个新的`Promise`对象，当所有给定的`Promise`对象完成后触发
  *
  * 其触发逻辑如下：
  *
  * - 如果所有给定的`Promise`对象均进入**resolved**状态，则该`Promise`
  *   对象进入**resolved**状态
  * - 如果有至少一个`Promise`对象进入**rejected**状态，则该`Promise`
  *   对象进入**rejected**状态
  *
  * 当新的`Promise`对象触发时，将按照传入的`Promise`对象的顺序，
  * 依次提供参数，且根据原`Promise`对象的回调参数，有以下情况：
  *
  * - 如果给定参数只有一个，使用这一个参数
  * - 如果给定多个参数，则提供一个数组包含这些参数
  *
  * 本方法对参数的方法与`Array.prototyp.concat`相同，
  * 如果任意一个参数是数组则会展开
  *
  * @param {...Promise | ...Array.<Promise>} 需要组合的`Promise`对象
  * @return {Promise} 一个新的`Promise`对象
  */
Deferred.all = function () {
    // 典型的异步并发归并问题，使用计数器来解决
    var workingUnits = [].concat.apply([], arguments);
    var workingCount = workingUnits.length;

    // 如果没有任何任务，直接给处理完的
    if (!workingCount) {
        return Deferred.resolved();
    }

    var actionType = 'resolve';
    var result = [];

    var jointDeferred = new Deferred();

    function resolveOne(whichToFill) {
        workingCount--;

        assert.ok(
            workingCount >= 0, 'workingCount should be positive'
        );

        var unitResult = [].slice.call(arguments, 1);
        // 如果给定的结果只有一个，不要再组装成数组
        if (unitResult.length <= 1) {
            unitResult = unitResult[0];
        }
        result[whichToFill] = unitResult;

        if (workingCount === 0) {
            jointDeferred[actionType].apply(jointDeferred, result);
        }
    }

    function rejectOne() {
        actionType = 'reject';
        resolveOne.apply(this, arguments);
    }

    for (var i = 0; i < workingUnits.length; i++) {
        var unit = workingUnits[i];
        unit.then(
            resolveOne.bind(unit, i),
            rejectOne.bind(unit, i)
        );
    }

    return jointDeferred.promise;
};

/**
  * 返回一个已经处于**resolved**状态的`Promise`对象
  *
  * @param {...*} 用于调用`resolve`方法的参数
  * @return {Promise} 一个已经处于**resolved**状态的`Promise`对象
  */
Deferred.resolved = function () {
    var deferred = new Deferred();
    deferred.resolve.apply(deferred, arguments);
    return deferred.promise;
};

/**
  * 返回一个已经处于**rejected**状态的`Promise`对象
  *
  * @param {...*} 用于调用`reject`方法的参数
  * @return {Promise} 一个已经处于**rejected**状态的`Promise`对象
  */
Deferred.rejected = function () {
    var deferred = new Deferred();
    deferred.reject.apply(deferred, arguments);
    return deferred.promise;
};

/**
  * 返回一个`Promise`对象，当指定的模块被AMD加载器加载后，进入**resolved**状态
  *
  * @param {...string} 需要加载的模块列表
  * @return {Promise} 一个`Promise`对象
  */
Deferred.require = function () {
    var modules = [].slice.call(arguments);
    var deferred = new Deferred();

    require(modules, deferred.resolver.resolve);

    deferred.promise.abort = deferred.resolver.reject;

    return deferred.promise;
};

module.exports = exports = Deferred;
