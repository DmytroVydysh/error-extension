"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../");
(0, __1.extend)();
try {
    throw new SyntaxError('Test Error');
}
catch (e) {
    e instanceof Error && e
        .is(RangeError, (e) => { console.log('It is a RangeError'); })
        .is(TypeError, (e) => { console.log('It is a TypeError'); })
        .is(URIError, (e) => { console.log('It is a URIError'); })
        .is(/Syntax/i, (e) => { console.log('It is an error containing the word Syntax'); });
}
