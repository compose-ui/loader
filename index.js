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
  show: function ( message ) {
    this.showLoader( 'loading', message || 'Hang tight…' )
  },

  // Show loader with success loading message and style
  success: function ( message ) {
    this.showLoader( 'success', message || 'Got it!' )
  },

  // Show loader with success failure message and style
  failure: function ( message ) {
    this.showLoader( 'failure', message || 'Hold up!' )
  },

  // Base show loader function
  showLoader: function( classname, message ) {

    el = this.init()

    el.textContent = message
    el.className = this.options.loaderClass
    el.classList.add( classname );

  },

  // Hide loader icon function
  hide: function() {

    // Reset to base classname
    this.element().className = this.options.loaderClass

  }

};

// Public API
module.exports = Loader;
