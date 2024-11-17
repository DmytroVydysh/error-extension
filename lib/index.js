"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
function extend() {
    Error.prototype.handled = false;
    Error.prototype.is = function (type, handler) {
        if (this.handled)
            return this;
        if (typeof type === 'string' && this.name === type) {
            this.handled = true;
            handler(this);
            return this;
        }
        if (type instanceof Function && this instanceof type) {
            this.handled = true;
            handler(this);
            return this;
        }
        if (type instanceof RegExp && type.test(this.name)) {
            this.handled = true;
            handler(this);
            return this;
        }
        return this;
    };
    Error.prototype.any = function (handler) {
        if (!this.handled)
            handler(this);
        return this;
    };
}
exports.extend = extend;
