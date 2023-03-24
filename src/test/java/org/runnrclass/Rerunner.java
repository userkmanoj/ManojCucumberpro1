package org.runnrclass;

import org.base.Base;
import org.base.ReporrUtil;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="@src\\test\\resources\\Rerun\\Failed.txt",glue="org.identity",dryRun=false,
strict=false,tags={"@Login"},plugin= {"pretty","html:src\\test\\resources\\Reports",
		"json:src\\test\\resources\\Reports\\output1.json",
		"junit:src\\test\\resources\\Reports\\mano.xml"})

public class Rerunner extends Base{
@AfterClass
public static void reportGen() {
	ReporrUtil.generateJvmReport("C:\\Users\\lenovo\\Desktop\\framework\\CUCUM\\src\\test\\resources\\Reports\\output1.json");
}
}
