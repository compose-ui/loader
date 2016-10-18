// Public API function
var Loader = {

  options: {
    selector       : document.body,
    loaderClass    : 'loader'
  },

  init: function() {
    if ( !document.querySelector( 'div.' + this.options.loaderClass ) ) {

      // Create and prepend loader element
      this.options.selector.insertAdjacentHTML( 'afterbegin', '<div class="' + this.options.loaderClass + '"></div>' );

    }

    return this.element()
  },

  element: function() {
    return document.querySelector( 'div.' + this.options.loaderClass );
  },
  
  // Show loader with default loading message and style
  loading: function ( message ) {
    this.show( message || 'Hang tight…', 'loading' )
  },

  // Show loader with success loading message and style
  success: function ( message ) {
    this.show( message || 'Got it!', 'success' )
  },

  // Show loader with success failure message and style
  failure: function ( message ) {
    this.show( message || 'Hold up!', 'failure' )
  },

  // Base show loader function
  show: function( message, classname ) {

    el = this.init()

    el.textContent = message
    el.className = this.options.loaderClass
    el.classList.add( classname );

  },

  // Hide loader icon function
  remove: function() {

    // Reset to base classname
    var el = this.element()
    el.parentNode.removeChild(el)

  }

};

// Public API
module.exports = Loader;
