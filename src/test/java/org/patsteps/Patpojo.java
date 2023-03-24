package org.patsteps;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.base.*;
public class Patpojo extends Base{
	
	public Patpojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="(//*[@aria-label='close'])[1]")
	 private WebElement close;
	
	@FindBy(xpath="//*[text()=' Stay in United Kingdom ']")
	 private WebElement location;
	
	@FindBy(xpath="(//*[@class='patpat-Medium nav-item-a'])[9]")
	private WebElement Baby;
	@FindBy(xpath="(//*[text()=' Shoes '])[2]")
	private WebElement Babyboy;
	@FindBy(xpath="(//*[@type='button'])[1]")
	private WebElement cart;
	@FindBy(xpath="(//*[@class='product-img'])[1]")
	private WebElement addtocart;
	@FindBy(xpath="//*[text()='UK 6']")
	private WebElement size;
	@FindBy(xpath="//*[@class=\"sku-submit\"]")
	private WebElement viewbag;
	@FindBy(xpath="//*[text()='View Bag']")
	private WebElement checkout;
	@FindBy(xpath="//*[text()='Continue Shopping']")
	private WebElement down;
	
	public WebElement getDown() {
		return down;
	}
	@FindBy(xpath="(//*[text()='Log in '])[2]")
	private WebElement cratesignin;
	@FindBy(xpath="//*[text()='Sign in']")
	private WebElement signinbtn;
	
	public WebElement getSigninbtn() {
		return signinbtn;
	}
	public WebElement getCratesignin() {
		return cratesignin;
	}

	@FindBy(xpath="(//*[@type='email'])[1]")
	private WebElement email;
	@FindBy(xpath="(//*[@type='password'])[1]")
	private WebElement password;
	@FindBy(xpath="(//*[text()='Sign in'])[2]")
	private WebElement signin;
	@FindBy(xpath="(//*[@class='patpat-icon'])[1]")
	private WebElement acounticon;
	public WebElement getAcounticon() {
		return acounticon;
	}

	@FindBy(xpath="(//*[@class='top-cart-button wh-32'])")
	private WebElement view;
	@FindBy(xpath="//*[text()=' Proceed to Checkout ']")
	private WebElement chech;
	@FindBy(xpath="//*[@id='first_name']")
	private WebElement firstname;
	@FindBy(xpath="//*[@id='last_name']")
	private WebElement lastname;
	@FindBy(xpath="//*[@id='country']")
	private WebElement country;
	@FindBy(xpath="//*[@id='address']")
	private WebElement addressl;
	@FindBy(xpath="//*[@id='suburb']")
	private WebElement address2;
	@FindBy(xpath="//*[@id='state']")
	private WebElement state;
	@FindBy(xpath="//*[@id='city']")
	private WebElement town;
	@FindBy(xpath="//*[@id='postcode']")
	private WebElement zipcode;
	@FindBy(xpath="//*[@id='email']")
	private WebElement emailadd;
	@FindBy(xpath="//*[@id='phonenumber']")
	private WebElement phone;
	
	public WebElement getCountry() {
		return country;
	}
	public WebElement getEmailadd() {
		return emailadd;
	}
	public WebElement getPhone() {
		return phone;
	}
	public WebElement getFirstname() {
		return firstname;
	}
	public void setFirstname(WebElement firstname) {
		this.firstname = firstname;
	}
	public WebElement getLastname() {
		return lastname;
	}
	public void setLastname(WebElement lastname) {
		this.lastname = lastname;
	}
	public WebElement getAddressl() {
		return addressl;
	}
	public void setAddressl(WebElement addressl) {
		this.addressl = addressl;
	}
	public WebElement getAddress2() {
		return address2;
	}
	public void setAddress2(WebElement address2) {
		this.address2 = address2;
	}
	public WebElement getState() {
		return state;
	}
	public void setState(WebElement state) {
		this.state = state;
	}
	public WebElement getTown() {
		return town;
	}
	public void setTown(WebElement town) {
		this.town = town;
	}
	public WebElement getZipcode() {
		return zipcode;
	}
	public void setZipcode(WebElement zipcode) {
		this.zipcode = zipcode;
	}
	
	
	
	
	
	
	
	
	
	public WebElement getChech() {
		return chech;
	}
	public WebElement getCart() {
		return cart;
	}
	public WebElement getView() {
		return view;
	}
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getSignin() {
		return signin;
	}

	
	
	
	public WebElement getClose() {
		return close;
	}
	public WebElement getAddtocart() {
		return addtocart;
	}
	public WebElement getSize() {
		return size;
	}
	public WebElement getViewbag() {
		return viewbag;
	}
	public WebElement getCheckout() {
		return checkout;
	}
	public WebElement getLocation() {
		return location;
	}
	public WebElement getBaby() {
		return Baby;
	}
	public WebElement getBabyboy() {
		return Babyboy;
	}
	public WebElement getcart() {
		return cart;
	}
	public WebElement getSigninbtn1() {
		// TODO Auto-generated method stub
		return signinbtn;
	}
	
	

}
