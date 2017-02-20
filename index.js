var classify = function(name) {
  return '.' + name.replace(/\s/g, '.')
}

var merge = function() {
  var args = [{}].concat( Array.prototype.slice.call( arguments ) )
  return Object.assign.apply( this, args )
}

var defaultSettings = {
  parent      : 'body',
  className   : 'loader',
  loading     : 'Loading…',
  success     : 'Success!',
  failure     : 'An error occurred.',
  removeAfter : 800
}

// Public API function
var Loader = {
  new: function( options ) {

    var settings = merge( defaultSettings, options || {} )

    var el,
        parent = document.querySelector( settings.parent )

    function element () {
      if ( !el ) {
        parent.insertAdjacentHTML( 'beforeend', '<div class="' + settings.className + '"></div>' );
        el = parent.lastChild
      }

      return el
    }

    function show( options ) {
      options = merge( settings, options || {} )

      el = element()

      el.textContent = options.message
      el.className   = settings.className

      el.classList.add( options.className )

      if ( options.removeAfter ) {

        // Remove loader after timeout
        setTimeout( function(){
          remove( options.callback )
        }, options.removeAfter )

      }
    }

    function loading ( options ) {
      show( setDefaults( options, 'loading' ) )
    }

    function success ( options ) {
      show( setDefaults( options, 'success' ) )
    }

    function failure ( options ) {
      show( setDefaults( options, 'failure' ) )
    }

    function setDefaults ( options, type ) {

      if ( typeof options == 'string' )
        options = { message: options }
      
      options = merge( {
        message: settings[ type ],
        className: type
      }, options || {} )

      // Default to removeAfter setting (not overriding false)
      if ( ( type == 'success' || type == 'failure' ) && typeof options.removeAfter == 'undefined' )
        options.removeAfter = settings.removeAfter

      return options

    }

    function remove ( callback ) {
      requestAnimationFrame( function(){ 
        parent.removeChild( element() )
        if ( typeof callback === 'function' ) callback()
      })
    }

    return {
      options  : settings,
      loading  : loading,
      success  : success,
      failure  : failure,
      show     : show,
      element  : element,
      remove   : remove
    }
  },

  defaults: function ( options ) {
    return Object.assign( defaultSettings, options || {} )
  }
}

// Public API
module.exports = Loader
