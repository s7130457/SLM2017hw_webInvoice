package tw.teddysoft.bdd.domain.invoice.support;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import tw.teddysoft.bdd.domain.company.Company;
import tw.teddysoft.bdd.domain.company.CompanyBuilder;

/**
 * Created by jeni on 2017/4/16.
 */
public class WebCompanyBuilder implements CompanyBuilder {
    private WebDriver driver = null;

    public WebCompanyBuilder() {}

    private WebDriver getWebDriver(){
        if (null == driver){
            System.setProperty("webdriver.chrome.driver" ,  "chromedriver.exe");
            driver = new ChromeDriver();
            driver.get("http://localhost:4567/invoice");
        }
        return  driver;
    }

    @Override
    public CompanyBuilder giveVatID(String vatID) {
        getWebDriver().findElement(By.name("vatid")).sendKeys(String.valueOf(vatID));
        return this;
    }

    @Override
    public CompanyBuilder giveCompanyName(String companyName) {
        getWebDriver().findElement(By.name("company")).sendKeys(String.valueOf(companyName));
        return this;
    }

    @Override
    public Company search() {
        try {
            getWebDriver().findElement(By.name("search")).click();
            String vatid = getWebDriver().findElement(By.name("vatid")).getAttribute("value");
            String company = getWebDriver().findElement(By.name("company")).getAttribute("value");
            return new Company(vatid,company);
        }
        finally {
            getWebDriver().quit();
        }
    }

}
