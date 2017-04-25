package tw.teddysoft.bdd.domain.invoice;

import org.junit.Test;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompanySearch;

import static org.junit.Assert.assertEquals;

/**
 * Created by jeni on 2017/4/13.
 */
public class VatidAndCompanySearchTest {

    @Test
    public void testGivenSchoolVatidSearchCorrectName() {
        assertEquals("國立臺北科技大學",VatidAndCompanySearch.getCompany("92021164"));
    }

    @Test
    public void testGivenCompanyNameVatidSearchCorrectCompanyName() {
        assertEquals("泰迪軟體科技有限公司",VatidAndCompanySearch.getCompany("53909614"));
    }

    @Test
    public void testGivenBusinessNameVatidSearchCorrectBusinessName() {
        assertEquals("東發視聽社",VatidAndCompanySearch.getCompany("11111111"));
    }

    @Test
    public void testGivenBranchCompanyNameVatidSearchCorrectBranchCompanyName() {
        assertEquals("台北分公司",VatidAndCompanySearch.getCompany("24628967"));
    }

    @Test
    public void testGivenIllegalVatidIsNullSearchThenCompanyNameIsPlesaseInputVatid() {
        assertEquals("請輸入統編",VatidAndCompanySearch.getCompany(""));
    }

    @Test
    public void testGivenIllegalNumberVatidSearchThenCompanyNameIsPlesaseInputCorrectVatid() {
        assertEquals("請輸入正確統編",VatidAndCompanySearch.getCompany("12584651"));
    }

    @Test
    public void testGivenIllegalStringVatidSearchThenCompanyNameIsPlesaseInputCorrectVatid() {
        assertEquals("請輸入正確統編",VatidAndCompanySearch.getCompany("dddd"));
    }

    @Test
    public void testGivenCorrectNameSearchSchoolVatid() {
        assertEquals("92021164",VatidAndCompanySearch.getVatid("國立臺北科技大學"));
    }

    @Test
    public void testGivenCorrectCompanyNameSearchCompanyNameVatid() {
        assertEquals("53909614",VatidAndCompanySearch.getVatid("泰迪軟體科技有限公司"));
    }

    @Test
    public void testGivenCorrectBusinessNameSearchBusinessNameVatid() {
        assertEquals("24940741",VatidAndCompanySearch.getVatid("鼓勵閣商業顧問有限公司"));
    }

    @Test
    public void testGivenIllegalCompanyNameIsNullSearchThenVatidIsPlesaseInputCompanyName() {
        assertEquals("請輸入公司名稱",VatidAndCompanySearch.getVatid(""));
    }

    @Test
    public void testGivenIllegalErrorCompanyNameSearchThenVatidIsPlesaseInputCorrectCompanyName() {
        assertEquals("請輸入正確公司名稱",VatidAndCompanySearch.getVatid("測試公司"));
    }

}
