package org.base;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Base {
	public static WebDriver driver;
	public  static JavascriptExecutor js;
	public static Actions a;
		/*   browser Launch */
	public static void launchbrowser(String browsertype) {
		if (browsertype.equals("chrome")) {
			WebDriverManager.chromedriver().setup();
			driver = new ChromeDriver();
		} else if (browsertype.equals("edge")) {
			WebDriverManager.edgedriver().setup();
			driver = new EdgeDriver();
		}
		driver.manage().window().maximize();
	}

	public static void moveelement (WebElement s) {
		a= new Actions (driver);
		a.moveToElement(s).build().perform();
	}
	//  Read Property //
	public static String readProperty(String property) throws IOException {
		FileReader f = new FileReader("C:\\Users\\lenovo\\Desktop\\framework\\CUCUM\\TestDataFolder\\Config.properties");
		Properties p = new Properties();
		p.load(f);
		String text = p.getProperty(property);
		return text;
		
	}
	
	//  launch url  //
	public static void launchurl(String s) {
		driver.get(s);
	}

	public static void javascriptexe(WebElement element, String text) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].SetAttriubute('value',' '" + text + "')", element);
	}
	public static void javascriptclick(WebElement element) {
		js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click()",element);
	}
	
	public static void passvalue(WebElement s,String value) {
	s.sendKeys(value);
	}
	public static void clickbut(WebElement s) {
		s.click();
		}
		public static void checkPresenceofElement(WebElement element,String message) {
		Assert.assertTrue(message, element.isDisplayed());
		}
		
		public static void checkPresenceOfGivenTextInElement(WebElement actual,String message,String expected) {
			Assert.assertEquals(message, expected, actual.getText());
			}
		
		
		public static void pgetitl() {
			driver.getTitle();
			}
		
		public static void closebrowser() {
			driver.close();
			}
		public static void currturl() {
			driver.getCurrentUrl();
			}
		
				
	public static void maximizebrowser() {
		driver.manage().window().maximize();
		 
	}
	
	public static void Snapshot( String s) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		File source = ts.getScreenshotAs(OutputType.FILE);
		File perm = new File("C:\\Users\\lenovo\\Desktop\\framework\\CUCUM\\ScreenShot"+s+"\\png");
		FileUtils.copyFile(source,perm);
	}
	
	public static void waits() {
		driver.manage().timeouts().implicitlyWait(15,TimeUnit.SECONDS);
	}
	
	// Excel Read  //

}