var assert = require('chai').assert
var Loader = require('../')
require('./_object.assign.js')

var loaderEl = function() {
  return document.querySelector('.loader')
}

describe('Loader', function(){
  it('displays a loading state', function(){

    Loader.loading()

    assert.isDefined( loaderEl() )
    assert.equal( loaderEl().textContent, 'Hang tight…')
    assert.isTrue( loaderEl().classList.contains( 'loading' ) )

  })

  it('displays a failure state', function(){

    Loader.failure()

    assert.equal( loaderEl().textContent, 'Hold up!' )
    assert.isTrue( loaderEl().classList.contains( 'failure' ) )

  })

  it('displays a success state', function(){

    Loader.success()

    assert.equal( loaderEl().textContent, 'Got it!' )
    assert.isTrue( loaderEl().classList.contains( 'success' ) )

  })

  it('displays a success custom loading message', function(){

    Loader.loading( 'Chill yo…' )

    assert.equal( loaderEl().textContent, 'Chill yo…' )
    assert.isTrue( loaderEl().classList.contains( 'loading' ) )

  })

  it('displays a success custom show message', function(){

    Loader.show( 'Test Message!', 'test-class' )
    assert.equal( loaderEl().textContent, 'Test Message!' )
    assert.isTrue( loaderEl().classList.contains( 'test-class' ) )

  })

  it('removes the loader when done', function() {
    Loader.remove()
    assert.isNull(loaderEl())
  })
})
