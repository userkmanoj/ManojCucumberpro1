package org.identity;

import org.base.Base;
import org.patsteps.Identitypojo;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddCart extends Base {

	Identitypojo i;

	@When("user enter search product")
	public void user_enter_search_product() {
		i = new Identitypojo();
		System.out.println("9");
		waits();
		i.getSearch().sendKeys("KidsBook");

	}

	@Then("user sees the results based on search and select product")
	public void user_sees_the_results_based_on_search_and_select_product() throws InterruptedException {
		i = new Identitypojo();
		Thread.sleep(3000);
		clickbut(i.getToy());

	}

	@When("Click the Add to cart button")
	public void click_the_Add_to_cart_button() throws InterruptedException {
		i = new Identitypojo();
		System.out.println("9");
		waits();
		Thread.sleep(5000);
		i.getPop().click();
		i.getAddcart().click();
		Thread.sleep(5000);

	}

	@When("Click The Viewbag")
	public void click_The_Viewbag() throws InterruptedException {
		System.out.println("10");
		Thread.sleep(5000);
		i.getViewbag().click();

	}

	@When("enter  the personal details")
	public void enter_the_personal_details() throws InterruptedException {
		i = new Identitypojo();
		System.out.println("18");
		Thread.sleep(5000);
		i.getEmail().sendKeys("userkmanoj@@gmail.com");
		i.getName().sendKeys("Manoj");
		i.getAddress().sendKeys("chennai");
		i.getSuburban().sendKeys("Walkerville");

	}

	@Then("Click the checkout")
	public void click_the_checkout() {
		clickbut(i.getPlaceorder());

	}

	@When("user add product to addtocart")
	public void user_add_product_to_addtocart() throws InterruptedException {
		System.out.println("17");
		waits();
		i = new Identitypojo();
		Thread.sleep(2000);
		i.getPop().click();
		Thread.sleep(5000);
		i.getAddcart().click();
		Thread.sleep(5000);

	}

	@When("user increase the count in addtocount")
	public void user_increase_the_count_in_addtocount() throws InterruptedException {

		System.out.println("14");
		i = new Identitypojo();
		waits();
		Thread.sleep(5000);
		i.getViewbag().click();
		Thread.sleep(5000);
		i.getCountincrese().click();

	}

	@Then("user sees the addtocart page with increae number")
	public void user_sees_the_addtocart_page_with_increae_number() {

	}

}
