/**
 * @file print method for element
 * @author nighca<nighca@live.cn>
 */

var util = require('./util');

var spec = require('./spec');

var booleanAttributes = spec.booleanAttributes;
var tagTypeMap = spec.tagTypeMap;

var array = Array.prototype;

var indent = function (opt) {
    return util.indent(opt.level, opt['indent-char'], opt['indent-size']);
};

var printAttribute = function (attribute, opt) {
    // boolean attribute
    if (util.isIn(attribute.name, booleanAttributes)) {
        if (
            opt['bool-attribute-value'] === 'remove'
            || !attribute.value
        ) {
            return attribute.name;
        }
    }

    return util.format('${name}="${value}"', attribute);
};

var printAttributes = function (attributes, opt) {
    if (!attributes) {
        return '';
    }

    return array.map.call(attributes, function (attribute) {
        return printAttribute(attribute, opt);
    }).join(' ');
};

var printVoidElementNode = function (info, node, condition, opt) {
    var tpl = opt['self-close'] === 'close'
        ? '<${tag}${attributes} />'
        : '<${tag}${attributes}>';
    return util.format(tpl, info);
};

var packageElement = function (info, content) {
    var parts = (
        content
        ? [
            info.start,
            content,
            info.end
        ]
        : [
            info.start,
            info.end
        ]
    );
    return parts.join(info.sep);
};

var removeBlankLineAround = function (content) {
    return content.replace(/(^(\s*\n)+)|((\n\s*)+$)/g, '');
};

var makePrintRawTextElementNode = function (async) {
    return function (info, node, condition, opt) {
        var formatter = opt.formatter[info.tag] || removeBlankLineAround;

        var contentOpt = util.extend({}, opt);
        contentOpt.level++;

        var indentContent = function (content, indentOpt) {
            indentOpt = indentOpt || contentOpt;
            return content.split('\n').map(function (line) {
                return line ? (indent(indentOpt) + line) : line;
            }).join('\n');
        };

        var content = node.childNodes.length
            ? formatter(node.childNodes[0].textContent, node, contentOpt, {
                indent: indentContent,
                trim: removeBlankLineAround
            })
            : '';

        if (!async) {
            return packageElement(info, content);
        }

        return Promise.resolve(content).then(
            function (content) {
                return packageElement(info, content);
            }
        );
    };
};

var printRawTextElementNode = makePrintRawTextElementNode(false);
var printRawTextElementNodeAsync = makePrintRawTextElementNode(true);

var printNormalElementNode = function (info, node, condition, opt) {
    var children = (
        condition.newLine
        ? info.children.map(function (child) {
            child = child.trim();
            return child ? (info.innerIndent + child) : child;
        }).filter(function (child) {
            return child;
        })
        : info.children
    );
    var content = children.join(info.sep);

    return packageElement(info, content);
};

var makePrintElementNode = function (async) {
    // format method for general element
    return function (node, opt) {

        // print method for node
        var printMethods = require('./print');

        var tag = node.tagName.toLowerCase();
        var attributesStr = printAttributes(node.attributes, opt);

        // conditions
        var condition = {
            isVoid: util.isIn(tag, tagTypeMap.void),
            isHtml: tag === 'html',
            noFormat: opt['no-format'] || util.isIn(tag, opt['no-format-tag']),
            inline: util.isIn(tag, opt['inline-tag']) || !node.childNodes.length,
            isRawText: util.isIn(tag, tagTypeMap['raw-text'])
        };
        condition.newLine = !(condition.noFormat || condition.inline);

        // node info
        var info = {
            indent: indent(opt),
            tag: tag,
            attributes: attributesStr ? (' ' + attributesStr) : ''
        };

        // void elements
        if (condition.isVoid) {
            return printVoidElementNode(info, node, condition, opt);
        }

        // new opt for next-level (child) nodes
        var newOpt = util.extend({}, opt);

        // no-format should be inheritted
        if (condition.noFormat) {
            newOpt['no-format'] = true;
        }

        // increase level
        // do not indent 'head' & 'body' (under 'html')
        if (!condition.isHtml) {
            newOpt.level++;
        }

        // tag start & end
        util.extend(info, {
            start: util.format('<${tag}${attributes}>', info),
            end: (condition.newLine ? info.indent : '') + util.format('</${tag}>', info),
            sep: condition.newLine ? '\n' : '',
            // indent for child nodes
            innerIndent: indent(newOpt)
        });

        // raw text ( 'script' / 'style' )
        if (condition.isRawText) {
            return (
                async
                ? printRawTextElementNodeAsync(info, node, condition, opt)
                : printRawTextElementNode(info, node, condition, opt)
            );
        }

        if (!async) {
            // children
            util.extend(info, {
                children: array.map.call(node.childNodes, function (childNode, i) {
                    return printMethods.print(childNode, newOpt);
                })
            });
            return printNormalElementNode(info, node, condition, opt);
        }

        return Promise.all(
            array.map.call(node.childNodes, function (childNode, i) {
                return printMethods.printAsync(childNode, newOpt);
            })
        ).then(function (children) {
            util.extend(info, {children: children});
            return printNormalElementNode(info, node, condition, opt);
        });
    };
};

var printElementNode = makePrintElementNode(false);
var printElementNodeAsync = makePrintElementNode(true);

module.exports = {
    printElementNode: printElementNode,
    printElementNodeAsync: printElementNodeAsync
};
