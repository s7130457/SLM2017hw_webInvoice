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
    public void should_be_a_regular_search_when_given_vatid_then_get_company() {
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
}
