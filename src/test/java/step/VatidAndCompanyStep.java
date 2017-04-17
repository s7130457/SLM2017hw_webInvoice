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

        When("^I enter the VAT ID \"([^\"]*)\"$", (String arg0) -> {
            helper.getVatidAndCompanyBuilder().withVatID(arg0);
            helper.setVatidAndCompany(helper.getVatidAndCompanyBuilder().search());
        });

        Then("^I should see the company name \"([^\"]*)\"$", (String arg0) -> {
            assertThat(helper.getVatidAndCompany().getCompany(), is(arg0));

        });

        When("^I enter the company name \"([^\"]*)\"$", (String arg0) -> {
            helper.getVatidAndCompanyBuilder().withCompany(arg0);
            helper.setVatidAndCompany(helper.getVatidAndCompanyBuilder().search());

        });

        Then("^I should see the VAT ID \"([^\"]*)\"$", (String arg0) -> {
            assertThat(helper.getVatidAndCompany().getVatid(), is(arg0));
        });

    }


}
