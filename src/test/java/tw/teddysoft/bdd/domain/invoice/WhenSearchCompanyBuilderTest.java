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

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("泰迪軟體科技有限公司", company.getCompany());
        assertEquals("53909614", company.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("53909614");
    }

    @Test
    public void should_be_a_illegal_search_when_given_empty_vatid_then_will_use_company_name_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());

       //  DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_company_then_get_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName("").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("請輸入公司名稱", company.getVatid());
        assertEquals("", company.getCompany());

//         DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getCompany()).isEqualTo("");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorNumber_vatid_then_get_company() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("12584651").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("請輸入正確統編", company.getCompany());
        assertEquals("12584651", company.getVatid());

        //  DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("12584651");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorString_vatid_then_get_company() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("errorString").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("請輸入正確統編", company.getCompany());
        assertEquals("errorString", company.getVatid());

        //  DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("errorString");
    }

    @Test
    public void should_be_a_illegal_search_when_given_error_company_then_get_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName("測試公司").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("請輸入正確公司名稱", company.getVatid());
        assertEquals("測試公司", company.getCompany());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getCompany()).isEqualTo("測試公司");
    }

    @Test
    public void should_be_a_illegal_search_when_given_empty_vatid_and_empty_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID("").giveCompanyName("").search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_vatid_and_null_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID(null).giveCompanyName(null).search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_vatid_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveVatID(null).search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_company_then_will_use_company_search_vatid() {
        Company company = DefaultCompanyBuilder.newInstance().
                giveCompanyName(null).search();

        // DEMO: use junit to perform assertion
        assertNotNull(company);
        assertEquals("", company.getCompany());
        assertEquals("請輸入公司名稱", company.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(company).isNotNull();
        assertThat(company.getVatid()).isEqualTo("請輸入公司名稱");
    }


}
