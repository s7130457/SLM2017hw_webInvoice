package step;

import cucumber.api.java8.En;
import tw.teddysoft.bdd.domain.invoice.support.DomainHelperCompany;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 * Created by jeni on 2017/4/13.
 */
public class CompanyStep implements En {
    DomainHelperCompany helper;

    public CompanyStep(DomainHelperCompany helper) {

        this.helper = helper;

        When("^I enter the VAT ID \"([^\"]*)\"$", (String vatid) -> {
            helper.getCompanyBuilder().giveVatID(vatid);
            helper.setCompany(helper.getCompanyBuilder().search());
        });

        Then("^I should see the company name \"([^\"]*)\"$", (String company) -> {
            assertThat(helper.getCompany().getCompany(), is(company));
        });

        When("^I enter the company name \"([^\"]*)\"$", (String company) -> {
            helper.getCompanyBuilder().giveCompanyName(company);
            helper.setCompany(helper.getCompanyBuilder().search());
        });

        Then("^I should see the VAT ID \"([^\"]*)\"$", (String vatid) -> {
            assertThat(helper.getCompany().getVatid(), is(vatid));
        });

    }


}
