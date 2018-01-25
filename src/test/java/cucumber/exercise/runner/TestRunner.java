package cucumber.exercise.runner;


import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(format = {"pretty", "html:target/cucumber"},
glue = {"cucumber.exercise.setpdef"},
tags = {"@Sanity"}
) 

public class TestRunner { }
