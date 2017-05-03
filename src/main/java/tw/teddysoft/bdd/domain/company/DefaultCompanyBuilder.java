package tw.teddysoft.bdd.domain.company;

/**
 * Created by jeni on 2017/5/3.
 */
public class DefaultCompanyBuilder implements CompanyBuilder {

    private String vatid = "";
    private String company = "";

    public DefaultCompanyBuilder() {};

    public static DefaultCompanyBuilder newInstance() {
        return new DefaultCompanyBuilder();
    }

    @Override
    public DefaultCompanyBuilder giveVatID(String input_vatid) {
        if (input_vatid == null)
            this.vatid = "";
        else if (input_vatid.equals(""))
            this.vatid = "";
        else
            this.vatid = input_vatid;

        return this;
    }

    @Override
    public DefaultCompanyBuilder giveCompanyName(String input_company) {
        if (input_company == null)
            this.company = "";
        else if(input_company.equals(""))
            this.company = "";
        else
            this.company = input_company;

        return this;
    }

    @Override
    public Company search() {

        if(useCompanySearchVatid() == true)
            return new Company(CompanySearch.getVatid(company), company);

        //Default use vatid search company
        return new Company(vatid, CompanySearch.getCompany(vatid));
    }

    private boolean useCompanySearchVatid() {
        if((vatid == "") ) {
            return true;
        }
        return false;
    }

}
