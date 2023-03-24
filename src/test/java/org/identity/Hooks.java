package org.identity;

import java.io.IOException;

import org.base.Base;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends Base {
	
	@Before
	
	public void beforeScnario() throws IOException {
	launchbrowser(readProperty("browser"));
	
	}
	@After
	public void afterScnario(Scenario s) throws IOException, InterruptedException {
	System.out.println("852");	
	String name = s.getName();
	Snapshot( name);
	if (s.isFailed()) {
		
	
	TakesScreenshot ts = (TakesScreenshot) driver;
	byte[] b = ts.getScreenshotAs(OutputType.BYTES);
	s.embed(b, "image/png");
	Thread.sleep(9000);
	closebrowser();
	}
}
}