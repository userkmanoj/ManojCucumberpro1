@Search
Feature: To verify the search functionality of the application

  Background: 
    Given user launches identitydirect application
    And user sees the home page

  Scenario Outline: To verify the search relevance using search functionality
    When user enter the "<Text>" in search bar
    And user click search button
    Then user sees the results based on "<Text>"

    Examples: 
      | Text      |
      | WineGlass |
      | Toys      |

  @sanity
  Scenario Outline: To verify the search relevance using category and sub-category navigation
    When user click the category "<category>"
    And user click the sub-category "<subcategory>"
    Then user sees the results based on "<category>" and "<subcategory>"

    Examples: 
      | category      | subcategory |
      | Kids & School | Money Boxes |
