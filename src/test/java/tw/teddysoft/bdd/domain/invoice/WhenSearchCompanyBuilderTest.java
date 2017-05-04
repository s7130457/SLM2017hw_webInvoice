package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;
import tw.teddysoft.bdd.domain.company.DefaultCompanyBuilder;
import tw.teddysoft.bdd.domain.company.Company;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by jeni on 2017/4/16.
 */
public class WhenSearchCompanyBuilderTest {

    @Test
    public void should_be_a_regular_search_when_given_vatid_then_get_companyName() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("53909614").search();

        assertNotNull(company);
        assertEquals("53909614", company.getVatid());
        assertEquals("泰迪軟體科技有限公司", company.getCompany());
        assertThat(company.getVatid()).isEqualTo("53909614");
        assertThat(company.getCompany()).isEqualTo("泰迪軟體科技有限公司");
    }

    @Test
    public void should_be_a_illegal_search_when_given_empty_vatid_then_will_use_company_name_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("").search();

        assertNotNull(company);
        assertThat(company.getCompany()).isEqualTo("");
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_company_then_get_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName("").search();

        assertNotNull(company);
        assertEquals("請輸入公司名稱", company.getVatid());
        assertThat(company.getCompany()).isEqualTo("");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorNumber_vatid_then_get_company() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("12584651").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("請輸入正確統編", company.getCompany());
        assertThat(company.getVatid()).isEqualTo("12584651");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorString_vatid_then_get_company() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("errorString").search();

        assertNotNull(company);
        assertEquals("請輸入正確統編", company.getCompany());
        assertThat(company.getVatid()).isEqualTo("errorString");
    }

    @Test
    public void should_be_a_illegal_search_when_given_error_company_then_get_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName("測試公司").search();

        assertNotNull(company);
        assertEquals("請輸入正確公司名稱", company.getVatid());
        assertThat(company.getCompany()).isEqualTo("測試公司");
    }

    @Test
    public void should_be_a_illegal_search_when_given_empty_vatid_and_empty_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("").giveCompanyName("").search();

        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_vatid_and_null_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID(null).giveCompanyName(null).search();

        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_vatid_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID(null).search();

        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName(null).search();

        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());
    }

    @Test
    public void should_be_a_regular_search_when_given_company_and_vatid_then_will_use_vatid_search_company() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName("泰迪軟體科技有限公司").giveVatID("92021164").search();

        assertNotNull(company);
        assertThat(company.getCompany()).isEqualTo("國立臺北科技大學");
        assertThat(company.getVatid()).isEqualTo("92021164");
    }

}
