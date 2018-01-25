package cucumber.exercise.setpdef;


import java.util.List;

import org.openqa.selenium.WebDriver;

import common.Driver;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.table.DataTable;



public class StepDefinition {
	 private WebDriver driver = null; 
	 private final String TEST_PASS_MSG = "Test Pass";
	 private final String TEST_FAIL_MSG = "Test Fail";

	   @Given("^Open the browser$") 
	   public void openBrowser() throws Exception{ 
			driver =Driver.getDriver();			
	   } 
		
	   @When("^Open Cleartrip website$") 
	   public void goToCleartip() throws Exception{
		   final String TRAVEL_SITE = "https://www.cleartrip.com/";
		   driver.get(TRAVEL_SITE);
	   } 
		
	   @Then("^Page Title should contain cleartrip$") 
	   public void pageTitleForTravelSite() throws Exception{ 
		   final String CLEARTRIP_NAME = "cleartrip";
	      if(driver.getTitle().contains(CLEARTRIP_NAME)){
	    	  System.out.println(TEST_PASS_MSG); 
	      }else { 
	         System.out.println(TEST_FAIL_MSG); 
	      } 
	      driver.close(); 
	   } 
	   
	   @When("^Open cricket website$") 
	   public void goToCricketSite () throws Exception{ 
		   final String SPORTS_SITE = "http://www.cricbuzz.com/";
		   driver.get(SPORTS_SITE);
	   } 
		
	   @Then("^Page Title should contain cricket$") 
	   public void pageTitleForCricketSite() throws Exception{ 
		   final String SPORT_NAME = "cricket";
		   
	      if(driver.getTitle().contains(SPORT_NAME)){
	    	  System.out.println(TEST_PASS_MSG); 
	      }else { 
	         System.out.println(TEST_FAIL_MSG); 
	      } 
	   } 
	   
	   @When("^I am testing \"([^\"]*)\"$")
	   public void I_am_testing_pages(String site) throws Exception {
		   driver.get(site);
	       
	   }

	   @When("^Display the data table$")
	   public void DIsplay_the_data_table(DataTable data) throws Exception {
		   List<List<String>> l = data.raw();
		   
		   
		   try{
			   for(List<String> record: data.raw()){
				   System.out.println(record);
			   }
		   }catch(Exception e){
				e.printStackTrace();
			}
	       
	   }
}
