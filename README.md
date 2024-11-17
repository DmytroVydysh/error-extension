# Error Handling Extension for JavaScript Errors

## Overview

> This module extends the native JavaScript `Error` object to introduce additional methods for more flexible error handling. With these methods, you can specify different ways to handle an error depending on its type, name, or even with a general handler when no specific condition is matched.

> The main purpose of these extensions is to make error handling more expressive and to avoid repetitive error handling patterns.

## Features

- **`.is(type, handler)`**: Handle the error if it matches a specific type, name, or regular expression.
- **`.any(handler)`**: Provide a fallback handler for errors that haven't been handled yet.
- **`.handled`**: A boolean property to track if the error has already been processed.

## Installation

You can use this module by importing it into your project:

```bash
npm install error-extension
```

Then, import it in your JavaScript or TypeScript code:

```typescript
import { extend } from 'error-extension';

// Extend the Error prototype
extend();
```

## Usage

After extending the `Error` prototype, you can use the newly added methods directly on any error instance.

### Example

```typescript
import { extend } from 'error-extension';

// Extend the Error prototype with new methods
extend();

try {
  // Throw an error
  throw new TypeError('This is a type error');
} catch (e) {
  (e as Error)
    .is('TypeError', (err) => {
      console.error('Handled TypeError:', err.message);
    })
    .is(SyntaxError, (err) => {
      console.error('Handled SyntaxError:', err.message);
    })
    .any((err) => {
      console.error('Unhandled error:', err.message);
    });
}
```

## Methods

### `.is(type, handler)`

> This method checks if the error matches a given condition and then handles it.

- **`type`**: Accepts a `Function`, `string`, or `RegExp` to match the error type, name, or a regular expression for the name.
- **`handler`**: A function that takes the error as an argument and handles it.

If the error matches the provided `type`, the handler will be executed, and the `handled` property will be set to `true`.

### `.any(handler)`

> This method will execute the provided handler if the error has not yet been handled.

- **`handler`**: A function that takes the error as an argument and handles it.

This is useful as a fallback mechanism for handling any unhandled errors.

### `.handled`

> A boolean property indicating whether the error has been processed by a handler.

## Use Cases

- **Specific Error Handling**: Use `.is()` to handle specific errors based on their type, name, or a pattern.
- **Fallback Handling**: Use `.any()` to catch any errors that do not match the specific handlers provided by `.is()`.
- **Reduced Repetition**: Simplify your error handling by chaining `.is()` and `.any()` calls for different types of errors.

## Example Scenarios

### Handling Multiple Types of Errors

```typescript
try {
  throw new Error('A general error occurred');
} catch (e) {
  (e as Error)
    .is('TypeError', (err) => {
      console.error('Handled a TypeError:', err.message);
    })
    .is(/Error$/, (err) => {
      console.error('Handled a generic error:', err.message);
    })
    .any((err) => {
      console.error('Unhandled error:', err.message);
    });
}
```

## License

This project is licensed under the [CC0 1.0 Universal License](./LICENSE).


