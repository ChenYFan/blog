var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    replace = require('gulp-replace'),
    del = require('del'),
    mocha = require('gulp-mocha');

var info = require('./package.json'),
    head = '/*! universal-diff v' + info.version + ' | ' + info.author.name + '(' + info.author.email + ') | Apache License(2.0) */\n';

var paths = {
    dist: 'dist',
    scripts: ['lib/head.js', 'lib/define.js', 'lib/core.js', 'lib/script.js', 'lib/string.js', 'lib/tail.js'],
    tests: ['test/script.js', 'test/string.js']
};

// do test
gulp.task('test', function(){
    return gulp.src(paths.tests, {read: false})
        .pipe(mocha({ignoreLeaks: false}));
});

// clean dist folder
gulp.task('clean', function(cb) {
    del([paths.dist], cb);
});

// build uncompressed result
gulp.task('build-dev', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat('diff.js'))
        .pipe(replace(/\/\*[\s\S]*?\*\/\n/g, ''))
        .pipe(replace(/^/g, head))
        .pipe(gulp.dest(paths.dist));
});

// build compressed result
gulp.task('build', ['clean'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat('diff.min.js'))
        .pipe(uglify())
        .pipe(replace(/^/g, head))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('default', ['build-dev', 'build']);