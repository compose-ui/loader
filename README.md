# Compose Loader

This is a simple system for displaying loading indicators with state. This exists to unify the system for
displaying a loading state, reusing the same elements with standardized classnames and message defaults.

## Usage

```js
var Loader = require( 'compose-loader' )

// Use default styles and messages

Loader.loading( [message] )          // Show loading state; message default: "Hang tight…"
Loader.success( [message] )          // Show success state; message default: "Got it!"
Loader.failure( [message] )          // Show failure state; message default: "Hold up!"


// Show loading message, overriding more options
Loader.loading({ 
  message: 'Saving profile…',   // change the message
  className: 'saving-loader',   // Use a special classname
  removeAfter: 1000             // Remove automatically after 1000ms
})

// Manually remove loader from DOM (required for `loading` style message 
// which doesn't auto remove by default
Loader.remove()
```

This will inject a div into the DOM at the end of `body` element unless you overwrite the `parent` selector for the loader.

```html
<div class='loader'></div>
```

Here are the default options.

```js
{
  parent      : 'body',               // Selector for inserting loader html
  className   : 'loader',             // Base classname
  loading     : 'Loading…',           // class name for loading state
  success     : 'Success!',           // class name for success state
  failure     : 'An error occurred',  // class name for failure state
  removeAfter : 800                   // Milliseconds to auto remove success and failure messages
}
```

You can change the defaults for loader like this:

```js
// Override defaults, changing base classname for all future instances of loader
Loader.defaults( {  className: 'loader-widget' } )     

// Override loading message for only this instance of the loader
var widget = Loader.new( { Loading: 'Hang tight…' } )
```
