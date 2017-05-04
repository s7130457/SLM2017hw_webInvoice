package tw.teddysoft.bdd.domain.invoice;

import org.junit.Ignore;
import org.junit.Test;
import tw.teddysoft.bdd.domain.company.Company;
import tw.teddysoft.bdd.domain.company.CompanySearch;
import tw.teddysoft.bdd.domain.company.DefaultCompanyBuilder;

import static org.junit.Assert.assertEquals;

/**
 * Created by jeni on 2017/5/3.
 */
public class CompanySearchAPI_ut {

    @Test
    public void given_school_vatid_search_name() {
        assertEquals("國立臺北科技大學", CompanySearch.getCompany("92021164"));
    }

    @Test
    public void given_name_search_vatid() {
        assertEquals("92021164", CompanySearch.getVatid("國立臺北科技大學"));
    }

    @Test
    public void given_company_vatid_search_company_name() {
        assertEquals("泰迪軟體科技有限公司", CompanySearch.getCompany("53909614"));
    }

    @Test
    public void given_company_name_search_vatid() {
        assertEquals("53909614", CompanySearch.getVatid("泰迪軟體科技有限公司"));
    }

    @Test
    public void given_business_company_vatid_search_business_company_name() {
        assertEquals("東發視聽社", CompanySearch.getCompany("11111111"));
    }

    @Test
    public void given_business_name_search_business_vatid() {
        assertEquals("24940741", CompanySearch.getVatid("鼓勵閣商業顧問有限公司"));
    }

    @Test
    public void given_branch_company_vatid_search_branch_company_name() {
        assertEquals("台北分公司", CompanySearch.getCompany("24628967"));
    }

    @Test
    public void given_branch_company_name_search_first_return_branch_company_vatid() {
        assertEquals("33061127", CompanySearch.getVatid("台北分公司"));
    }

    @Ignore@Test
    public void given_branch_company_vatid_search_complete_branch_company_name() {
        assertEquals("大馨旅行社有限公司台北分公司",CompanySearch.getCompany("24628967"));
    }

    @Ignore@Test
    public void given_branch_company_name_search_vatid_and_return_search_many_company_data() {
        assertEquals("查詢到多筆資料",CompanySearch.getVatid("台北分公司"));
    }

    @Test
    public void when_input_empty_string_vatid_then_companyName_output_is_please_input_vatid() {
        assertEquals("請輸入統編", CompanySearch.getCompany(""));
    }

    @Test
    public void when_given_empty_string_of_company_name_then_output_is_please_input_company_name() {
        assertEquals("請輸入公司名稱", CompanySearch.getVatid(""));
    }

    @Test
    public void when_input_number_of_vatid_and_search_is_not_found_then_companyName_output_is_please_input_correct_vatid() {
        assertEquals("請輸入正確統編", CompanySearch.getCompany("12584651"));
    }

    @Test
    public void when_input_string_of_vatid_and_search_is_not_found_then_companyName_output_is_please_input_correct_vatid() {
        assertEquals("請輸入正確統編", CompanySearch.getCompany("統編為非數字字串找公司名稱"));
    }

    @Test
    public void when_given_company_name_and_search_vatid_is_not_found_then_output_is_please_input_correct_company_name() {
        assertEquals("請輸入正確公司名稱", CompanySearch.getVatid("錯誤的公司名稱找統編"));
    }

    @Test
    public void when_given_company_name_is_number_and_search_vatid_then_output_is_please_input_correct_company_name() {
        assertEquals("請輸入正確公司名稱", CompanySearch.getVatid("12584651"));
    }

    @Test
    public void when_vatid_is_null_and_search_company_name() {
        assertEquals("請輸入正確統編", CompanySearch.getCompany(null));
    }

    @Test
    public void when_company_name_is_null_and_search_vatid() {
        assertEquals("請輸入正確公司名稱", CompanySearch.getVatid(null));
    }

}
