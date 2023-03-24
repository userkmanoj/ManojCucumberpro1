package org.step;

import java.io.IOException;

import org.base.Base;
import org.patsteps.Identitypojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Search extends Base {
	Identitypojo n;

	@Given("user launches identitydirect application")
	public void user_launches_identitydirect_application() throws IOException {
		System.out.println("1");
		launchurl(readProperty("url"));
		waits();
		
	}

	@Given("user sees the home page")
	public void user_sees_the_home_page() {
		System.out.println("2");

	}

	@When("user enter the {string} in search bar")
	public void user_enter_the_in_search_bar(String Text) {
		System.out.println("3");
		n = new Identitypojo();
		n.getSearch().sendKeys(Text);

	}

	@When("user click search button")
	public void user_click_search_button() {
		System.out.println("4");
		n.getEnter().click();
	}

	@Then("user sees the results based on {string}")
	public void user_sees_the_results_based_on(String Text) {
		System.out.println("5");
System.out.println("search=="+Text);
			n = new Identitypojo();

		n.getEnter().click();

	}

	@When("user click the category {string}")
	public void user_click_the_category(String category) {
		System.out.println("6");
		n = new Identitypojo();
		n.getCategory().click();
	}

	@When("user click the sub-category {string}")
	public void user_click_the_sub_category(String subcategory) {
		System.out.println("7");
		n = new Identitypojo();
		n.getSubcategory().click();
	}

	@When("user sees the results based on {string} and {string}")
	public void user_sees_the_results_based_on_and(String string, String string2) throws InterruptedException {
		System.out.println("8");
		Thread.sleep(5000);
		n.getClock().click();
	}

	@When("Click the Add to cart button")
	public void click_the_Add_to_cart_button() throws InterruptedException {
		System.out.println("9");
		waits();
		n.getToy().click();
		Thread.sleep(3000);
		n.getPop().click();
		Thread.sleep(2000);
		n.getAddcart().click();
		
	}

	@When("Click The Viewbag")
	public void click_The_Viewbag() throws InterruptedException {
		System.out.println("10");
		
		Thread.sleep(5000);
		n.getViewbag().click();

	}

	@When("enter  the personal details")
	public void enter_the_personal_details() throws InterruptedException {
		System.out.println("18");
		Thread.sleep(5000);
		n.getEmail().sendKeys("userkmanoj@@gmail.com");
		n.getName().sendKeys("Manoj");
		n.getAddress().sendKeys("chennai");
		n.getSuburban().sendKeys("Walkerville");

	}

	@When("user increase the count in addtocount")
	public void user_increase_the_count_in_addtocount() throws InterruptedException {
		System.out.println("14");
		n = new Identitypojo();
		waits();
		Thread.sleep(5000);
		n.getViewbag().click();
		Thread.sleep(5000);
		n.getCountincrese().click();

	}

	@Then("user sees the addtocart page with increae number")
	public void user_sees_the_addtocart_page_with_increae_number() {
		System.out.println("15");
	}

	@Then("Click the checkout")
	public void click_the_checkout() {
		System.out.println("16");

	}

	@When("user add product to addtocart")
	public void user_add_product_to_addtocart() throws InterruptedException {
		System.out.println("17");
		waits();
		n = new Identitypojo();
		n.getToy().click();
		
		n.getPop().click();
	
		n.getAddcart().click();
		Thread.sleep(5000);

	}

	@Given("To validate login using Different credentials")
	public void to_validate_login_using_Different_credentials() {
	    n=new Identitypojo();
		System.out.println("111");
	    waits();
	    n.getAcconticon().click();
	    n.getSignin().click();
	    
	}

	@When("User enter the {string} and {string}")
	public void user_enter_the_and(String mail, String pass) {
		System.out.println("122");
		n.getMail().sendKeys(mail);
		n.getPassword().sendKeys(pass);
			}

	@When("User click login button")
	public void user_click_login_button() throws InterruptedException {
		System.out.println("133");
		n.getSignbtn().click();
		Thread.sleep(5000);
	    	}

	@Then("user sees the result based on {string}")
	public void user_sees_the_result_based_on(String credential) {
		System.out.println("144");
	System.out.println("credential=="+credential);	
	}

}
