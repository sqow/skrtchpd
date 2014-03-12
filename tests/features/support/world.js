var zombie = require( 'zombie' );

var World = function( callback ) {
  //  setup
  this.browser = new zombie();

  this.visit = function visit( url, cb ) {
    this.browser.visit( url, cb );
  };

  this.query = function query( selector, context ) {
    this.browser.query( selector, context );
  };

  callback();
};

exports.World = World;
