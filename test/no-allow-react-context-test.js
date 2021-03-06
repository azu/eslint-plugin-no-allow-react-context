// LICENSE : MIT
"use strict";
const RuleTester = require("eslint").RuleTester;
const parser = 'babel-eslint';
const parserOptions = {
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
    }
};

const tester = new RuleTester({parser, parserOptions});
import rule from "../src/rules/no-allow-react-context";
tester.run("no-allow-react-context", rule, {
    valid: [
        {code: `class A{ static foo(){} }`},
        {code: `class A{ static foo = {} }`},
        {code: `class A{ contextTypes(){} }`},
        {code: `class A{ get contextTypes(){} }`},
        {
            code: `class A{ get contextTypes(){} }`,
            filename: __dirname + "/test.js",
            options: [
                {
                    except: ["**/**/test.js"]
                }
            ]
        },
        {
            code: `class A{ get contextTypes(){} }`,
            filename: __dirname + "/test.js",
            options: [
                {
                    except: ["**/**/test.js", "**/**/other.js"]
                }
            ]
        },
        // TODO: fix me
        {
            code: `class A{ get contextTypes(){} }`,
            filename: __dirname + "test/test.js",
            options: [
                {
                    except: ["**/**/test.js", "**/**/other.js", "!test/**"]
                }
            ]
        }
    ],
    invalid: [
        {
            code: `class A { static contextTypes = {} }`,
            errors: ["Not allow to use `static contextTypes = {}`"]
        },
        {
            code: `class A { static contextTypes = {} }`,
            errors: ["Not allow to use `static contextTypes = {}`"],
            filename: __dirname + "/wrong.js",
            options: [
                {
                    except: ["**/**/test.js"]
                }
            ]
        }
    ]
});
