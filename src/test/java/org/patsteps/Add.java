package org.patsteps;

import java.io.IOException;

import org.base.Base;
import org.openqa.selenium.WebElement;
import org.patsteps.Identitypojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Add extends Base {
 Identitypojo n;

	@Given("user launch identitydirect application")
	public void user_launch_identitydirect_application() throws IOException {
		launchbrowser(readProperty("browser"));
		launchurl(readProperty("url"));
		waits();
		maximizebrowser();

	}

	@Given("User enter a search word in search field")
	public void user_enter_a_search_word_in_search_field() {
		n = new Identitypojo();
		System.out.println("User enter product");
		WebElement search = n.getSearch();
		search.sendKeys("kidsBook");
		n.getEnter().click();

	   	}

	@Given("user click search button")
	public void user_click_search_button() {
		System.out.println("User enter search");
		n.getEnter().click();

	}

	@Then("user see the search results based on search word")
	public void user_see_the_search_results_based_on_search_word() {
		System.out.println("User Sees the product");
		waits();
		n.getToy();
		
	

	}

	@When("user click cart icon")
	public void user_click_cart_icon() throws InterruptedException {
		System.out.println("User Selects the product");
		waits();
		n= new Identitypojo();
	 n.getSearch().sendKeys("kidsBook");
	 n.getEnter().click();
	 n.getToy().click();
	 Thread.sleep(2000);
	 n.getPop().click();
	 Thread.sleep(5000);
	 n.getAddcart().click();
	 Thread.sleep(5000);
		
	 n.getBag().click();
	 
		
		
		
	}

	@Then("user lands in cart page")
	public void user_lands_in_cart_page() throws InterruptedException {
		
		System.out.println("User click add to cart");
		waits();
		Thread.sleep(5000);
		 n.getEmail().sendKeys("userkmanoj@gmail.com");
			 
		 n.getPlaceorder().click();
	}

	@When("user click Accounts and lists option")
	public void user_click_Accounts_and_lists_option() {
	   waits();
	   n= new Identitypojo();
	   n.getAcconticon().click();
	}

	@When("user click your accounts link from list")
	public void user_click_your_accounts_link_from_list() throws InterruptedException {
		waits();
	n.getSignin().click();
	WebElement getmail = n.getMail();
	getmail.sendKeys("userkmanoj@gmail.com");
	WebElement getpassword = n.getPassword();
	getpassword.sendKeys("Manoj@1995");
	Thread.sleep(3000);
	n.getSignbtn().click();
	}

	@Then("user lands in my acconts page")
	public void user_lands_in_my_acconts_page() {
	waits();
		
	}

}
