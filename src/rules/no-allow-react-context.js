// LICENSE : MIT
"use strict";
const minimatchAll = require('minimatch-all');
const isReactContextClassProperty = (node) => {
    return node.type === "ClassProperty" &&
        node.static === true &&
        typeof node.key === "object" &&
        node.key.type === "Identifier" &&
        node.key.name === "contextTypes";
};
module.exports = function(context) {
    const filePath = context.getFilename();
    const options = context.options && context.options[0];
    // no option and input,then return
    if (typeof options === "object" && filePath === "<input>") {
        return {}
    }
    // if match expect pattern, then ignore this file
    if (options && filePath && Array.isArray(options.expect)) {
        const isIgnoredFile = minimatchAll(filePath, options.expect);
        if (isIgnoredFile) {
            return {};
        }
    }
    return {
        ClassProperty(node){
            if (!isReactContextClassProperty(node)) {
                return;
            }
            const message = "Not allow to use `static contextTypes = {}`";
            context.report({node: node, message: message});
        }
    }
};
module.exports.schema = [
    {
        type: "object",
        properties: {
            expect: {
                type: "array"
            },
        },
        additionalProperties: false,
    }
];