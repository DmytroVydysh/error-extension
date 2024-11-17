declare global {
  interface Error {
    is: (instance: Function | RegExp | string, handler: (e: Error) => void) => Error;
    any: (handler: (e: Error) => void) => Error;
    handled: boolean;
  }
}
export function extend() {
  /**
   * @description This property is used to determine if the error has been handled
   */
  Error.prototype.handled = false;

  /**
   * @description This method is used to handle the error based on the instance or the name of the error or a regular expression
   */
  Error.prototype.is = function (type: Function | RegExp | string, handler: (e: Error) => void): Error {
    /**
     * @description If the error has been handled, return the error
     */
    if (this.handled) return this;
    /**
     * @description If the type is a string and the name of the error is equal to the instance, handle the error
     */
    if (typeof type === 'string' && this.name === type) {
      this.handled = true;
      handler(this);
      return this;
    }
    /**
     * @description If the type is a function and the error is an instance of the function, handle the error
     */
    if (type instanceof Function && this instanceof type) {
      this.handled = true;
      handler(this);
      return this;
    }
    /**
     * @description If the type is a regular expression and the name of the error matches the regular expression, handle the error
     */
    if (type instanceof RegExp && type.test(this.name)) {
      this.handled = true;
      handler(this);
      return this;
    }
    return this;
  }

  /**
   * @description This method is used to handle the error if it has not been handled yet 
   */
  Error.prototype.any = function (handler: (e: Error) => void): Error {
    if (!this.handled)
      handler(this);
    return this;
  }
}