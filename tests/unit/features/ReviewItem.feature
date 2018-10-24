Feature: Review Item Component

Scenario: Displaying a review item
  Given data for an individual review item
  When  I render the review item component
  Then  I should see a Stix Id
  And   I should see an Action Date
  And   I should see an Object Type
  And   I should see a Field Name
  And   I should see a Field Value as a Popup Edit component
  And   I should see a Status
  And   I should see an Action Combo box

Scenario: Modify the value of a review item
  Given data for an individual review item
  When  I render the review item component
  And   I select the value
  And   I change the value
  And   I click Set
  Then  the underlying data object should be updated

# Scenario:  Select "Confirm Risk" action for a review item
#  Given data for an individual review item
#  When I render the review item component
#  And I select "Confirm Risk" action
#  Then the underlying data object should be updated

##Scenario:  Select "Not PII" action for a review item
##  Given data for an individual review item
##  When I render the review item component
##  And I select "Not PII" action
##  Then the underlying data object should be updated
##
##Scenario:  Select "Redact Field" action for a review item
##  Given data for an individual review item
##  When I render the review item component
##  And I select "Redact Field" action
##  Then the underlying data object should be updated