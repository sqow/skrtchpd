var modalStepDefinitionWrapper = function() {
  var self = this;

  this.World = require( '../support/world.js' ).World;

  this.Given(/^I am at "([^"]*)"$/, function(url, callback) {
    this.visit( url, callback );
  });

  this.Given(/^I wait$/, function(callback) {
    setTimeout( function() {
      callback();
    }, 500 );
  });

  this.Given(/^there is an element with the id "([^"]*)"$/, function(id, callback) {
    if ( this.browser.query( id ) ) {
      callback();
    } else {
      callback.fail( 'Could not find an element with the id ' + id );
    }
  });

  this.When(/^I click the element "([^"]*)"$/, function(id, callback) {
    if ( this.browser.query( id ) ) {
      this.browser.click( id, callback );
    } else {
      callback.fail( 'Could not click the element ' + href );
    }
  });

  this.Then(/^the document should be obscured by a modal$/, function(callback) {
    var docElClassName = this.browser.evaluate( 'document.body.className' );
    if ( docElClassName.match( /has-overlay/ ) ) {
      callback();
    } else {
      callback.fail( 'No modal was visible' );
    }
  });

  this.Then(/^the document should not be obscured by a modal$/, function(callback) {
    var docElClassName = this.browser.evaluate( 'document.body.className' );
    if ( !docElClassName.match( /has-overlay/ ) ) {
      callback();
    } else {
      callback.fail( 'A modal was visible' );
    }
  });
};

module.exports = modalStepDefinitionWrapper;