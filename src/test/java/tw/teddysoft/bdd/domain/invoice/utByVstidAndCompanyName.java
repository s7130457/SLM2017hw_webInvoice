package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompanySearch;

import static org.junit.Assert.assertEquals;

/**
 * Created by jeni on 2017/4/13.
 */
public class utByVstidAndCompanyName {
    @Test
    public void testGiveVatidSearchCompany() {
        assertEquals("泰迪軟體科技有限公司",VatidAndCompanySearch.getCompany("53909614"));
        assertEquals("國立臺北科技大學",VatidAndCompanySearch.getCompany("92021164"));
        assertEquals("鼓勵閣商業顧問有限公司",VatidAndCompanySearch.getCompany("24940741"));

    }

    @Test
    public void testGiveCompanyNameSearchVatid() {
        assertEquals("53909614",VatidAndCompanySearch.getVatid("泰迪軟體科技有限公司"));
        assertEquals("92021164",VatidAndCompanySearch.getVatid("國立臺北科技大學"));
        assertEquals("24940741",VatidAndCompanySearch.getVatid("鼓勵閣商業顧問有限公司"));
    }
}
