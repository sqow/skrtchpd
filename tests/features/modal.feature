Feature: When a User clicks a ".call-modal" element, a modal will be presented
  As a User
  I want a modal with information to show up with information when I click a modal link
  So that I can learn more about scrtchpd or how to use scrtchpd

Scenario: Info modal is successfully presented upon clicking it's link
  Given I am at "http://localhost:8080/"
  And I wait
  And there is an element with the id "#modal-info-callout"
  When I click the element "#modal-info-callout"
  Then the document should be obscured by a modal

Scenario: Clear modal is successfully presented upon clicking it's link
  Given I am at "http://localhost:8080/"
  And I wait
  And there is an element with the id "#modal-clear-callout"
  When I click the element "#modal-clear-callout"
  Then the document should be obscured by a modal

Scenario: Info modal can be cleared
  Given I am at "http://localhost:8080/"
  And I wait
  And there is an element with the id "#modal-info-callout"
  And I click the element "#modal-info-callout"
  And the document should be obscured by a modal
  When I click the element "#modal-info-close"
  Then the document should not be obscured by a modal

Scenario: Clear modal can be cleared
  Given I am at "http://localhost:8080/"
  And I wait
  And there is an element with the id "#modal-clear-callout"
  And I click the element "#modal-clear-callout"
  And the document should be obscured by a modal
  When I click the element "#modal-clear-close"
  Then the document should not be obscured by a modal
