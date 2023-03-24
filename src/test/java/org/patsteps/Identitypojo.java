package org.patsteps;

import org.base.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Identitypojo extends Base {
	public Identitypojo() {
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//*[@maxlength='255']")
	 private WebElement search;
	@FindBy(xpath="(//*[@class='STOjg'])[1]")
	 private WebElement toyselect;
	
	@FindBy(xpath="//*[text()='Gift Shop']")
	 private WebElement category;
	@FindBy(xpath="//*[text()='Wine Glasses']")
	 private WebElement subcategory;
	
	
	@FindBy(xpath="//*[@class='aXKjz test-search-input_magnifier-icon _2_2f']")
	 private WebElement enter;
	@FindBy(xpath="//*[@class='T1eIR KaXAm']")
	 private WebElement acconticon;
	@FindBy(xpath="(//*[text()='Sign In'])[1]")
	 private WebElement signin;
	
	@FindBy(xpath="//*[text()='My School Years Book Hardcover']")
	private WebElement Toy;
	@FindBy(xpath="//div[@class='xuJkw']")
	private WebElement addcart;
	public WebElement getCategory() {
		return category;
	}
	public WebElement getSubcategory() {
		return subcategory;
	}

	@FindBy(xpath="//*[@name='Name']")
	private WebElement name;
	@FindBy(xpath="//*[@id='AddressLines']")
	private WebElement address;
	@FindBy(xpath="//*[@id='Suburb']")
	private WebElement suburban;
	@FindBy(xpath="//*[@id='State']")
	private WebElement state;
	@FindBy(xpath="(//span[@class='list-item-description-qty-wrapper'])[4]")
	private WebElement countincrese;
	
	public WebElement getCountincrese() {
		return countincrese;
	}

	@FindBy(xpath="//*[@id='Postcode']")
	private WebElement postcode;
	@FindBy(xpath="//*[@class='dR3ca test-product-list-item_img']")
	private WebElement clock;


	public WebElement getClock() {
		return clock;
	}
	public WebElement getSearch() {
		return search;
	}
	public WebElement getEnter() {
		return enter;
	}
	
	public WebElement getAcconticon() {
		return acconticon;
	}
	public WebElement getSignin() {
		return signin;
	}
	public WebElement getToy() {
		return Toy;
	}
	public WebElement getAddcart() {
		return addcart;
	}
	public WebElement getName() {
		return name;
	}
	public WebElement getAddress() {
		return address;
	}
	
	public WebElement getToyselect() {
		return toyselect;
	}
	public WebElement getSuburban() {
		return suburban;
	}
	public WebElement getState() {
		return state;
	}
	public WebElement getPostcode() {
		return postcode;
	}
	public WebElement getPhone() {
		return phone;
	}
	public WebElement getMail() {
		return mail;
	}
	public WebElement getPassword() {
		return password;
	}
	public WebElement getSignbtn() {
		return signbtn;
	}
	public WebElement getViewbag() {
		return viewbag;
	}
	public WebElement getPop() {
		return pop;
	}
	public WebElement getBag() {
		return Bag;
	}
	public WebElement getEmail() {
		return email;
	}
	public WebElement getPlaceorder() {
		return placeorder;
	}

	@FindBy(xpath="//*[@id='Phone']")
	private WebElement phone;
	@FindBy(xpath="(//*[@name='email'])[1]")
	private WebElement mail;
	@FindBy(xpath="//*[@name='password']")
	private WebElement password;
	@FindBy(xpath="(//*[text()='Sign In'])[2]")
	private WebElement signbtn;
	@FindBy(xpath="//*[@class='kgT12']")
	private WebElement viewbag;
	
	
	

	@FindBy(xpath="//*[@class='cLdCP']")
	private WebElement pop;
	
	@FindBy(xpath="//*[@class='kgT12']")
	private WebElement Bag;
	
	@FindBy(xpath="//*[@name='CustomerEmail']")
	private WebElement email;
	@FindBy(xpath="//*[@id='braintree']")
	private WebElement placeorder;
	
}
