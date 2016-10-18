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

This will inject a div into the DOM at the end of `document.body`.

```html
<div class='loader'></div>
```

The functions above will manipulate the classnames and text content of this element.

You can change the default classname and insertion point of this
element:

```js
Loader.options.className = 'loader spinner'
Loader.options.parent = document.querySelector('#loader-parent')
```
