var classify = function(name) {
  return '.' + name.replace(/\s/g, '.')
}

// Public API function
var Loader = {

  options: {
    className    : 'loader',
    removeAfter  : 500
  },

  init: function() {
    if ( !Loader.element() ) {

      // Create and prepend loader element
      document.body.insertAdjacentHTML( 'afterbegin', '<div class="' + Loader.options.className + '"></div>' );

    }

    return Loader.element()
  },

  element: function() {
    return document.querySelector( classify( Loader.options.className ) );
  },
  
  // Show loader with default loading message and style
  loading: function ( options ) {
    options = Loader.setOptions( options, 'Hang tight…', 'loading' )
    Loader.show( options )
  },

  // Show loader with success loading message and style
  success: function ( options ) {
    options = Loader.setOptions( options, 'Got it!', 'success' )
    if ( typeof options.removeAfter == 'undefined' ) options.removeAfter = Loader.options.removeAfter

    Loader.show( options )
  },

  // Show loader with success failure message and style
  failure: function ( options ) {
    options = Loader.setOptions( options, 'Hold up!', 'failure' )
    if ( typeof options.removeAfter == 'undefined' ) options.removeAfter = Loader.options.removeAfter

    Loader.show( options )
  },

  // Base show loader function
  show: function( options ) {

    el = Loader.init()

    el.textContent = options.message
    el.className = Loader.options.className
    el.classList.add( options.className );

    if ( options.removeAfter ) {

      // Remove loader after timeout
      setTimeout( function(){
        requestAnimationFrame( Loader.remove( options.callback ) )
      }, options.removeAfter )

    }

  },

  // Hide loader icon function
  remove: function( callback ) {

    // Reset to base classname
    var el = Loader.element()

    requestAnimationFrame( function(){ 
      el.parentNode.removeChild(el)
      if ( typeof callback === 'function' ) callback()
    })

  },

  setOptions: function ( options, message, className ) {
    options = options || {}
    if ( typeof options == 'string' ) {
      options = { message: options }
    }

    options.message   = options.message   || message
    options.className = options.className || className

    return options
  }

};

// Public API
module.exports = Loader;
