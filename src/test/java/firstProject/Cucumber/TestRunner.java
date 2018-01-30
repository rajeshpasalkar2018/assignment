package firstProject.Cucumber;


import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(format = {"html:target/cucumber-html-report",
		"json:target/cucumber.json",
		"pretty:target/cucumber-pretty.txt", "junit:target/cucumber-results.xml"},
glue = {"stepDef.test.example"},
tags = {"@Sanity"}

) 

public class TestRunner { }
