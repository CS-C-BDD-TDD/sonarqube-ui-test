Feature: As an analyst, I need to log in so that I can perform a review on STIX files

Scenario: Login page is correctly rendered
  Given I am a user with a web browser
  When  I load the default Vue JS page
  And   I input a username
  And   I input a password
  And   I click the SignIn button
  Then  I expect the username value to be set correctly
  And   I expect the password value to be set correctly
  And   the system sends the credentials
