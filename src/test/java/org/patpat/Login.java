package org.patpat;

import java.io.IOException;

import org.base.Base;
import org.patsteps.Patpojo;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class Login extends Base {


Patpojo p;
@Given("user launches identitydirect application")
public void user_launches_identitydirect_application() throws IOException {

	launchurl(readProperty("url"));
	waits();
	p=new Patpojo();
	clickbut(p.getClose());
	p=new Patpojo();
	clickbut(p.getLocation());

}
@Given("To validate login using Different credentials")
public void to_validate_login_using_Different_credentials() {
    p =new Patpojo();
    clickbut(p.getAcounticon());
    clickbut(p.getCratesignin());
    
}

@When("User enter the {string} and {string}")
public void user_enter_the_and(String user, String pass) {
	 p =new Patpojo();
	   passvalue(p.getEmail(),user);
	   passvalue(p.getPassword(),pass);
	   
   
}

@When("User click login button")
public void user_click_login_button() {
clickbut(p.getSigninbtn1());  
}

	
}
