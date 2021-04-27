package com.lamtech.luma.stepDefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^user is on create an account page$")
    public void userIsOnCreateAnAccountPage() {
        // to define browser
        WebDriverManager.chromedriver().setup();
        // open browser
        driver = new ChromeDriver();
        //launch ecommerce application
        driver.get("https://demo-m2.bird.eu/");
        //maximise browser window
        driver.manage().window().maximize();
        // click create an account
        driver.findElement(By.linkText("Create an Account")).click();

    }

    @When("^user enter \"([^\"]*)\"and \"([^\"]*)\"and\"([^\"]*)\"and\"([^\"]*)\"and\"([^\"]*)\"$")
    public void userEnterAndAndAndAnd(String FirstName, String LastName, String Email, String Password, String ConfirmPassword) throws Throwable {
      driver.findElement(By.id("firstname")).sendKeys(FirstName);
      driver.findElement(By.id("lastname")).sendKeys(LastName);


    }

    @And("^user clicks on create an account$")
    public void userClicksOnCreateAnAccount() {

    }

    @Then("^My account page is displayed$")
    public void myAccountPageIsDisplayed() {

    }
}
