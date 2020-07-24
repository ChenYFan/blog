/**
 * @file nest rules
 * @author nighca<nighca@live.cn>
 * @spec https://www.w3.org/TR/html5/single-page.html
 */

var rules = require('./lib/core');

[
    require('./lib/tags/html'),
    require('./lib/tags/head'),
    require('./lib/tags/title'),
    require('./lib/tags/base'),
    require('./lib/tags/link'),
    require('./lib/tags/meta'),
    require('./lib/tags/style'),
    require('./lib/tags/body'),
    require('./lib/tags/article'),
    require('./lib/tags/section'),
    require('./lib/tags/nav'),
    require('./lib/tags/aside'),
    require('./lib/tags/h1'),
    require('./lib/tags/h2'),
    require('./lib/tags/h3'),
    require('./lib/tags/h4'),
    require('./lib/tags/h5'),
    require('./lib/tags/h6'),
    require('./lib/tags/header'),
    require('./lib/tags/footer'),
    require('./lib/tags/address'),
    require('./lib/tags/p'),
    require('./lib/tags/hr'),
    require('./lib/tags/pre'),
    require('./lib/tags/blockquote'),
    require('./lib/tags/ol'),
    require('./lib/tags/ul'),
    require('./lib/tags/li'),
    require('./lib/tags/dl'),
    require('./lib/tags/dt'),
    require('./lib/tags/dd'),
    require('./lib/tags/figure'),
    require('./lib/tags/figcaption'),
    require('./lib/tags/div'),
    require('./lib/tags/main'),
    require('./lib/tags/a'),
    require('./lib/tags/em'),
    require('./lib/tags/strong'),
    require('./lib/tags/small'),
    require('./lib/tags/s'),
    require('./lib/tags/cite'),
    require('./lib/tags/q'),
    require('./lib/tags/dfn'),
    require('./lib/tags/abbr'),
    require('./lib/tags/data'),
    require('./lib/tags/time'),
    require('./lib/tags/code'),
    require('./lib/tags/var'),
    require('./lib/tags/samp'),
    require('./lib/tags/kbd'),
    require('./lib/tags/sub'),
    require('./lib/tags/sup'),
    require('./lib/tags/i'),
    require('./lib/tags/b'),
    require('./lib/tags/u'),
    require('./lib/tags/mark'),
    require('./lib/tags/ruby'),
    require('./lib/tags/rb'),
    require('./lib/tags/rt'),
    require('./lib/tags/rtc'),
    require('./lib/tags/rp'),
    require('./lib/tags/bdi'),
    require('./lib/tags/bdo'),
    require('./lib/tags/span'),
    require('./lib/tags/br'),
    require('./lib/tags/wbr'),
    require('./lib/tags/ins'),
    require('./lib/tags/del'),
    require('./lib/tags/img'),
    require('./lib/tags/iframe'),
    require('./lib/tags/embed'),
    require('./lib/tags/object'),
    require('./lib/tags/param'),
    require('./lib/tags/video'),
    require('./lib/tags/audio'),
    require('./lib/tags/source'),
    require('./lib/tags/track'),
    require('./lib/tags/map'),
    require('./lib/tags/area'),
    require('./lib/tags/table'),
    require('./lib/tags/caption'),
    require('./lib/tags/colgroup'),
    require('./lib/tags/col'),
    require('./lib/tags/tbody'),
    require('./lib/tags/thead'),
    require('./lib/tags/tfoot'),
    require('./lib/tags/tr'),
    require('./lib/tags/td'),
    require('./lib/tags/th'),
    require('./lib/tags/form'),
    require('./lib/tags/label'),
    require('./lib/tags/input'),
    require('./lib/tags/button'),
    require('./lib/tags/select'),
    require('./lib/tags/datalist'),
    require('./lib/tags/optgroup'),
    require('./lib/tags/option'),
    require('./lib/tags/textarea'),
    require('./lib/tags/keygen'),
    require('./lib/tags/output'),
    require('./lib/tags/progress'),
    require('./lib/tags/meter'),
    require('./lib/tags/fieldset'),
    require('./lib/tags/legend'),
    require('./lib/tags/script'),
    require('./lib/tags/noscript'),
    require('./lib/tags/template'),
    require('./lib/tags/canvas'),
    require('./lib/tags/math'),
    require('./lib/tags/svg')
].forEach(function (rule) {
    rules[rule.tagName] = rule;
});

module.exports = {
    rules: rules,

    /**
     * Get rule for given tagName / element.
     *
     * @param {string|Element} target - given tagName or element
     * @return {Object|undefined} corresponding rule
     */
    from: function (target) {
        var tag = target && target.tagName
            ? target.tagName
            : target;

        tag = (tag + '').toLowerCase();
        return rules[tag];
    }
};
