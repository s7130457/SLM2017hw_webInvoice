package tw.teddysoft.bdd.domain.invoice.support;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompany;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompanyBuilder;

/**
 * Created by jeni on 2017/4/16.
 */
public class WebVatidAndCompanyBuilder implements VatidAndCompanyBuilder {
    private WebDriver driver = null;

    public WebVatidAndCompanyBuilder() {}

    private WebDriver getWebDriver(){
        if (null == driver){
            System.setProperty("webdriver.chrome.driver" ,  "chromedriver.exe");
            driver = new ChromeDriver();
            driver.get("http://localhost:4567/invoice");
        }
        return  driver;
    }

    @Override
    public VatidAndCompanyBuilder withVatID(String vatID) {
        getWebDriver().findElement(By.name("vatid")).sendKeys(String.valueOf(vatID));
        return this;
    }

    @Override
    public VatidAndCompanyBuilder withCompany(String companyName) {
        getWebDriver().findElement(By.name("company")).sendKeys(String.valueOf(companyName));
        return this;
    }

    @Override
    public VatidAndCompany search() {
        try {
            getWebDriver().findElement(By.name("search")).click();
            String vatid = getWebDriver().findElement(By.name("vatid")).getAttribute("value");
            String company = getWebDriver().findElement(By.name("company")).getAttribute("value");
            return new VatidAndCompany(vatid,company);
        }
        finally {
            getWebDriver().quit();
        }
    }

}
