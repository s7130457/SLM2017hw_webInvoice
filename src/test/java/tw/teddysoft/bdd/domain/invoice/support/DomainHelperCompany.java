package tw.teddysoft.bdd.domain.invoice.support;

import tw.teddysoft.bdd.domain.company.Company;
import tw.teddysoft.bdd.domain.company.CompanyBuilder;

/**
 * Created by jeni on 2017/4/16.
 */
public class DomainHelperCompany {

    CompanyBuilder builder;
    Company company;

    public DomainHelperCompany(CompanyBuilder builder) {
        this.builder = builder;
    }

    public CompanyBuilder getCompanyBuilder() {
        return builder;
    }

    public void setCompany(Company companyName) {
        company = companyName;
    }

    public Company getCompany() { return company; }

}
