var classify = function(name) {
  return '.' + name.replace(/\s/g, '.')
}

// Public API function
var Loader = {

  options: {
    className    : 'loader'
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
  loading: function ( message ) {
    Loader.show( message || 'Hang tight…', 'loading' )
  },

  // Show loader with success loading message and style
  success: function ( message ) {
    Loader.show( message || 'Got it!', 'success' )
  },

  // Show loader with success failure message and style
  failure: function ( message ) {
    Loader.show( message || 'Hold up!', 'failure' )
  },

  // Base show loader function
  show: function( message, className ) {

    el = Loader.init()

    el.textContent = message
    el.className = Loader.options.className
    el.classList.add( className );

  },

  // Hide loader icon function
  remove: function() {

    // Reset to base classname
    var el = Loader.element()
    el.parentNode.removeChild(el)

  }

};

// Public API
module.exports = Loader;
