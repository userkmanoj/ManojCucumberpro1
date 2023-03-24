package org.identity;
import org.base.Base;
import org.openqa.selenium.interactions.Actions;
import org.patsteps.Identitypojo;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class search extends Base {
	Identitypojo i;
	@Given("user sees the home page")
	public void user_sees_the_home_page() {
	}
	@When("user enter the {string} in search bar")
	public void user_enter_the_in_search_bar(String Text) {
		System.out.println("3");
		i = new Identitypojo();
		waits();
		i.getSearch().click();
		i.getSearch().sendKeys(Text);
	}
	@When("user click search button")
	public void user_click_search_button() {
		System.out.println("4");
		i = new Identitypojo();
		i.getEnter().click();
	}
	@Then("user sees the results based on {string}")
	public void user_sees_the_results_based_on(String Text) {
		System.out.println("5");
		System.out.println("search==" + Text);
		i = new Identitypojo();
		
		i.getEnter().click();
	}
	@When("user click the category {string}")
	public void user_click_the_category(String category) {
		System.out.println("6");
		i = new Identitypojo();
		waits();
		Actions a = new Actions (driver);
		a.moveToElement(i.getCategory()).build().perform();
			}
	@When("user click the sub-category {string}")
	public void user_click_the_sub_category(String subcategory) {
		System.out.println("7");
		i = new Identitypojo();
		
		
		i.getSubcategory().click();
	}
	@Then("user sees the results based on {string} and {string}")
	public void user_sees_the_results_based_on_and(String category, String subcategory) {
		System.out.println("8");
		System.out.println("producct==" + category);
		System.out.println("subcategory" + subcategory);

	}

}
