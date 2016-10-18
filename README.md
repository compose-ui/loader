# Compose Loader

This is a simple system for displaying loading indicators with state. This exists to unify the system for
displaying a loading state, reusing the same elements with standardized classnames and message defaults.

## Usage

```js
var Loader = require( 'compose-loader' )

// Use default styles and messages

Loader.loading([message])          // Show loading state; message default: "Hang tight…"
Loader.success([message])          // Show success state; message default: "Got it!"
Loader.failure([message])          // Show failure state; message default: "Hold up!"

// Show loader with customizing message and classname.
Loader.show(message, classname)

// Remove loader from DOM
Loader.remove()
```
