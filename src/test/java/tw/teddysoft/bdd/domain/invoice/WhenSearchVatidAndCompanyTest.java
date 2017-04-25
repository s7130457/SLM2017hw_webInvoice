package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;
import tw.teddysoft.bdd.domain.vatidAndCompany.DefaultVatidAndCompanyBuilder;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompany;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by jeni on 2017/4/16.
 */
public class WhenSearchVatidAndCompanyTest {

    @Test
    public void should_be_a_regular_search_when_given_vatid_then_get_companyName() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withVatID("53909614").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("泰迪軟體科技有限公司", vatidAndCompany.getCompany());
        assertEquals("53909614", vatidAndCompany.getVatid());

        // DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getVatid()).isEqualTo("53909614");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_vatid_then_get_company() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withVatID("").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("請輸入統編", vatidAndCompany.getCompany());
        assertEquals("error", vatidAndCompany.getVatid());

       //  DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getVatid()).isEqualTo("error");
    }

    @Test
    public void should_be_a_illegal_search_when_given_null_company_then_get_vatid() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withCompany("").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("請輸入公司名稱", vatidAndCompany.getVatid());
        assertEquals("error", vatidAndCompany.getCompany());

//         DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getCompany()).isEqualTo("error");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorNumber_vatid_then_get_company() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withVatID("12584651").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("請輸入正確統編", vatidAndCompany.getCompany());
        assertEquals("12584651", vatidAndCompany.getVatid());

        //  DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getVatid()).isEqualTo("12584651");
    }

    @Test
    public void should_be_a_illegal_search_when_given_errorNotNumber_vatid_then_get_company() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withVatID("ddddd").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("請輸入正確統編", vatidAndCompany.getCompany());
        assertEquals("ddddd", vatidAndCompany.getVatid());

        //  DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getVatid()).isEqualTo("ddddd");
    }

    @Test
    public void should_be_a_illegal_search_when_given_error_company_then_get_vatid() {
        VatidAndCompany vatidAndCompany = DefaultVatidAndCompanyBuilder.newInstance().
                withCompany("測試公司").search();

        // DEMO: use junit to perform assertion
        assertNotNull(vatidAndCompany);
        assertEquals("請輸入正確公司名稱", vatidAndCompany.getVatid());
        assertEquals("測試公司", vatidAndCompany.getCompany());

        // DEMO: use AssertJ to perform assertion
        assertThat(vatidAndCompany).isNotNull();
        assertThat(vatidAndCompany.getCompany()).isEqualTo("測試公司");
    }

}
