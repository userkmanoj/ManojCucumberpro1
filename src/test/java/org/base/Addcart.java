package org.base;

import java.io.IOException;

import org.base.Base;
import org.patsteps.Identitypojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Addcart extends Base {
	

Identitypojo n = new Identitypojo();
@Given("user launches identitydirect application")
public void user_launches_identitydirect_application() throws IOException {
	launchbrowser(readProperty("browser"));
	launchurl(readProperty("url"));
	waits();
	maximizebrowser();
	System.out.println("1");

}

@Given("user sees the home page")
public void user_sees_the_home_page() {
    System.out.println("2");
    
}

@Then("user sees the results based on {string}")
public void user_sees_the_results_based_on(String Text) {
	n.getSearch().sendKeys(Text);
	n.getEnter().click();
	System.out.println("3");
   
}

@When("Click the Add to cart button")
public void click_the_Add_to_cart_button() {
	n.getSearch().sendKeys("kidsbook");
	n.getEnter().click();
	n.getToy().click();
	n.getPop().click();
	n.getAddcart().click();
	System.out.println("4");
}


@When("Click The Viewbag")
public void click_The_Viewbag() {
   n.getViewbag().click();
	System.out.println("5");
}

@Then("enter  the personal details")
public void enter_the_personal_details() {
    n.getEmail().sendKeys("userkmanoj@gmail.com");
    n.getName().sendKeys("Manoj");
    n.getAddress().sendKeys("Chennai");
	System.out.println("6");
}

@Then("Click the checkout")
public void click_the_checkout() {
	
	   n.getPlaceorder().click();
		System.out.println("7");
}

@When("user enter the {string} in search bar")
public void user_enter_the_in_search_bar(String Text) {
	waits();
	System.out.println("start"+Text);
n.getSearch().sendKeys(Text);  
System.out.println("end" +Text);
System.out.println("8");
}

@When("user click search button")
public void user_click_search_button() {
 n.getEnter().click();
	System.out.println("9");
}

@When("user click the category {string}")
public void user_click_the_category(String string) {
    System.out.println("select category");
   n.getCategory().click();
	System.out.println("10");
}

@When("user click the sub-category {string}")
public void user_click_the_sub_category(String subproduct) {
    System.out.println("Subcattegory");
    n.getSubcategory().click();
	System.out.println("11");
}

@When("user sees the results based on {string} and {string}")
public void user_sees_the_results_based_on_and(String string, String string2) {
	System.out.println("12");
}

	
}
