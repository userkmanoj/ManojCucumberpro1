package org.patpat;

import java.io.IOException;

import org.base.Base;
import org.patsteps.Patpojo;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks extends Base{
	Patpojo p;
	@Before
	
	public void beforeScnario() throws IOException {
	launchbrowser(readProperty("browser"));

	
	}
	@After
	public void afterScnario() throws IOException {
	System.out.println("852");	
	}
}
