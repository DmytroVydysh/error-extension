import { extend } from "../";
extend();
try {
    throw new SyntaxError('Test Error')
} catch (e) {
    e instanceof Error && e
        .is(RangeError, (e) => { console.log('It is a RangeError') })
        .is(TypeError, (e) => { console.log('It is a TypeError') })
        .is(URIError, (e) => { console.log('It is a URIError') })
        .is(/Syntax/i, (e) => { console.log('It is an error containing the word Syntax') })
}