package tw.teddysoft.bdd.domain.vatidAndCompany;

/**
 * Created by jeni on 2017/4/16.
 */
public class DefaultVatidAndCompanyBuilder implements VatidAndCompanyBuilder{

    private String vatid = "vatid";
    private String company = "company";

    public DefaultVatidAndCompanyBuilder() {};

    public static DefaultVatidAndCompanyBuilder newInstance() {
        return new DefaultVatidAndCompanyBuilder();
    }

    @Override
    public DefaultVatidAndCompanyBuilder withVatID(String vatID) {
        if (vatID.equals(""))
            this.vatid = "error";

        else
            this.vatid = vatID;

        return this;
    }

    @Override
    public DefaultVatidAndCompanyBuilder withCompany(String companyName) {
        if(companyName.equals(""))
            this.company = "error";
        else
            this.company = companyName;

        return this;
    }

    @Override
    public VatidAndCompany search() {

        if(isUseCompanyToFindVatid() == true)
            return new VatidAndCompany(VatidAndCompanySearch.getVatid(company), company);

        return new VatidAndCompany(vatid, VatidAndCompanySearch.getCompany(vatid));
    }

    private boolean isUseCompanyToFindVatid() {
        if((vatid == "vatid") ) {
            return true;
        }


        return false;
    }
}
