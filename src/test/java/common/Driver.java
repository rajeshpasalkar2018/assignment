package common;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Driver{
	
	private static WebDriver driver = null;
	
	
	public static WebDriver getDriver(){
		if(driver == null){
			System.setProperty("webdriver.chrome.driver",Constant.CHROME_DRIVER_PATH);
			driver = (WebDriver) new ChromeDriver();	
		}
		return driver;
	}
	
}
