Feature: As a Human Review analyst
I need to log in to Human Review page
so that I can perform a review on STIX file

Scenario: Login to the HR page 
 Given I am at the Login page
   When  - I enter username and password 
    Then I should be able to see "Pending Messages" 
