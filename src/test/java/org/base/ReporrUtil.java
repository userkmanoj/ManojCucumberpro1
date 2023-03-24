package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;


public class ReporrUtil {
@AfterClass
 public static void generateJvmReport(String jsonFilepath) {

	File f = new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Reports\\JvmReports");
	Configuration con = new Configuration(f," IdentityDirect");
	con.addClassifications("Browser Name", "Chrome");
	con.addClassifications("SprintNo", "20");
	
	List<String> li = new ArrayList<String>();
	li.add(jsonFilepath);
	ReportBuilder r = new ReportBuilder(li, con);
	r.generateReports();
} 

}