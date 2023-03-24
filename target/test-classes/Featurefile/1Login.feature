@Login
Feature: To verify the login functionality

Scenario Outline: To verify the login

Given user launches identitydirect application
  And To validate login using Different credentials
	 When User enter the "<username>" and "<password>"
    And User click login button
    Then user sees the result based on "<credential>"
	
 
    Examples: 
      | username | password  | credential|
      | userkmanoj@gmail.com    | Manoj@1995    |passed| 
      | manoj@152525gmail.com   | wsdf@852  | failed|
    
      