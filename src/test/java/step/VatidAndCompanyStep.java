package step;

import cucumber.api.java8.En;
import tw.teddysoft.bdd.domain.invoice.support.DomainHelperForVatidAndCompany;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

/**
 * Created by jeni on 2017/4/13.
 */
public class VatidAndCompanyStep implements En {
    DomainHelperForVatidAndCompany helper;

    public VatidAndCompanyStep(DomainHelperForVatidAndCompany helper) {

        this.helper = helper;

        When("^I enter the VAT ID \"([^\"]*)\"$", (String vatid) -> {
            helper.getVatidAndCompanyBuilder().withVatID(vatid);
            helper.setVatidAndCompany(helper.getVatidAndCompanyBuilder().search());
        });

        Then("^I should see the company name \"([^\"]*)\"$", (String company) -> {
            assertThat(helper.getVatidAndCompany().getCompany(), is(company));
        });

        When("^I enter the company name \"([^\"]*)\"$", (String company) -> {
            helper.getVatidAndCompanyBuilder().withCompany(company);
            helper.setVatidAndCompany(helper.getVatidAndCompanyBuilder().search());
        });

        Then("^I should see the VAT ID \"([^\"]*)\"$", (String vatid) -> {
            assertThat(helper.getVatidAndCompany().getVatid(), is(vatid));
        });

    }


}
