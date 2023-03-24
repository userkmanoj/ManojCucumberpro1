
Feature: To verify the Add to Cart functionality of the application

Background: 
    Given user launches identitydirect application
    When  user enter search product
    And user click search button
    Then user sees the results based on search and select product 
		
  Scenario: To verify the  Add to cart with selected product 
    When Click the Add to cart button 
    And Click The Viewbag 
    And enter  the personal details 
		Then Click the checkout 
		
		Scenario: To  increase the count of product in addtocart  
  	When user add product to addtocart
  	And  user increase the count in addtocount
  	Then user sees the addtocart page with increae number
  	 