var classify = function(name) {
  return '.' + name.replace(/\s/g, '.')
}

// Public API function
var Loader = {

  options: {
    parent       : document.body,
    className    : 'loader'
  },

  init: function() {
    if ( !this.element() ) {

      // Create and prepend loader element
      this.options.parent.insertAdjacentHTML( 'afterbegin', '<div class="' + this.options.className + '"></div>' );

    }

    return this.element()
  },

  element: function() {
    return document.querySelector( classify( this.options.className ) );
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
  show: function( message, className ) {

    el = this.init()

    el.textContent = message
    el.className = this.options.className
    el.classList.add( className );

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
