require('./_object.assign.js')

var Loader,
    assert = require('chai').assert,
    loader = require('../')

var loaderEl = function() {
  return document.querySelector( '.'+Loader.options.className )
}

describe('Loader', function(){

  it( 'allows overwriting defaults', function() {
    var d = loader.defaults({})

    assert.equal( d.success, 'Success!' )
    loader.defaults({ success: 'Got it!' })
    assert.equal( d.success, 'Got it!' )

  })

  it( 'allows overwriting defaults for an instance', function() {

    var d = loader.defaults({})

    assert.equal( d.loading, 'Loading…' )

    Loader = loader.new({
      loading: 'Hang tight…',
      failure: 'Hold up!'
    })

    // Default is the same
    assert.equal( d.loading, 'Loading…' )

    // Instance option is different
    assert.equal( Loader.options.loading, 'Hang tight…' )

  })


  it('displays a loading state', function(){

    Loader.loading()

    assert.isDefined( loaderEl() )
    assert.equal( Loader.element().textContent, 'Hang tight…')
    assert.isTrue( Loader.element().classList.contains( 'loading' ) )

  })

  it('displays a failure state', function(){

    Loader.failure( { removeAfter: false } )

    assert.equal( loaderEl().textContent, 'Hold up!' )
    assert.isTrue( loaderEl().classList.contains( 'failure' ) )

  })

  it('displays a success state', function(){

    Loader.success( { removeAfter: false } )

    assert.equal( loaderEl().textContent, 'Got it!' )
    assert.isTrue( loaderEl().classList.contains( 'success' ) )

  })

  it('displays a success custom loading message', function(){

    Loader.loading( 'Chill yo…' )

    assert.equal( loaderEl().textContent, 'Chill yo…' )
    assert.isTrue( loaderEl().classList.contains( 'loading' ) )

  })

  it('displays a success custom show message', function(){

    Loader.show( { message: 'Test Message!', className: 'test-class' } )
    assert.equal( loaderEl().textContent, 'Test Message!' )
    assert.isTrue( loaderEl().classList.contains( 'test-class' ) )

  })

  it('removes the loader when done', function() {
    Loader.remove()
    requestAnimationFrame( function() { 
      assert.isNull( loaderEl() )
    })
  })

  it('automatically removes messages', function() {
    Loader.success( { removeAfter: 30 } )

    setTimeout( function() {
      requestAnimationFrame( function() { 
        assert.isNull( loaderEl() )
      })
    }, 30 )
  })
})
