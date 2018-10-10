Feature: As a Human Review analyst 
I need to be able to view the list of HR Pending fields graphical web interface 
so that review items can be processed for eventual dissemination.

Background:
    Given I am successfully login to the HR page with the "username" and "password"

Scenario: Select "Confirm Risk" action on HR page for a STIX package with one HR field
    When I select "Confirm Risk" action on a single row package
    Then the "Disseminate" button is enabled
 