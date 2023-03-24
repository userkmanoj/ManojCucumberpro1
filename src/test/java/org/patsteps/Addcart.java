package org.patsteps;

import java.io.IOException;

import org.base.Base;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Addcart extends Base {
	Identitypojo n;

	@Given("User launch the application")
	public void user_launch_the_application() throws IOException {
		System.out.println("Appliction Launched");
		launchbrowser(readProperty("browser"));
		launchurl(readProperty("url"));
		waits();
		maximizebrowser();

	}

	@Given("close the Alert appeared for subscription")
	public void close_the_Alert_appeared_for_subscription() throws InterruptedException {
		System.out.println("closee button clicld");

	}

	@Given("Click The search box and search for Required Product")
	public void click_The_search_box_and_search_for_Required_Product() {
		n = new Identitypojo();
		WebElement search = n.getSearch();
		
		search.sendKeys("kidsBooks");
		n.getEnter().click();

	}

	@Given("Select the requied product")
	public void select_the_requied_product() throws InterruptedException {
		n.getToy().click();

	}

	@When("Click the Add to cart button")
	public void click_the_Add_to_cart_button() {
		n.getAddcart().click();

	}

	@Then("enter card details")
	public void enter_card_details() {
		System.out.println("Enter Card Details");
	}

}
