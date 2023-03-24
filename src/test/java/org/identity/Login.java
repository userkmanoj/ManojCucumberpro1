package org.identity;
import java.io.IOException;

import org.base.Base;
import org.junit.Assert;
import org.patsteps.Identitypojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
public class Login extends Base {
	Identitypojo n;
	@Given("user launches identitydirect application")
	public void user_launches_identitydirect_application() throws IOException {
		n = new Identitypojo();
		launchurl(readProperty("url"));
		
	}

	@Given("To validate login using Different credentials")
	public void to_validate_login_using_Different_credentials() {
		n = new Identitypojo();
		System.out.println("111");
		waits();
		n.getAcconticon().click();
		n.getSignin().click();
	}

	@When("User enter the {string} and {string}")
	public void user_enter_the_and(String mail, String pass) {
		System.out.println("122");
		waits();
		passvalue(n.getMail(), mail);
		n.getPassword().sendKeys(pass);
		Assert.assertTrue("Submitbuttton not enabled",n.getSignbtn().isEnabled() );
		
	}

	@When("User click login button")
	public void user_click_login_button() throws InterruptedException {
		System.out.println("133");
		waits();
		Thread.sleep(2000);
		clickbut(n.getSignbtn());
		
	}

	@Then("user sees the result based on {string}")
	public void user_sees_the_result_based_on(String credential) {
		System.out.println("144");
		System.out.println("credential==" + credential);
		
		
	}

	
}
