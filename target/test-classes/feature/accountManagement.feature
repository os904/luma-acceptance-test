Feature: Account Management

  @createAccount
  Scenario Outline: Create an account with a valid email
    Given user is on create an account page
    When user enter "<FirstName>"and "<LastName>"and"<Email>"and"<PassWord>"and"<ConfirmPassword>"
    And user clicks on create an account
    Then My account page is displayed




    Examples:
      | FirstName | LastName | Email         | PassWord | ConfirmPassword |
      | Bee       | Cee      | ass@yahoo.com | Swer@45  | Swer@45         |