package tw.teddysoft.bdd.domain.vatidAndCompany;

/**
 * Created by jeni on 2017/4/16.
 */
public class DefaultVatidAndCompanyBuilder implements VatidAndCompanyBuilder{

    private String vatid = "";
    private String company = "";

    public DefaultVatidAndCompanyBuilder() {};

    public static DefaultVatidAndCompanyBuilder newInstance() {
        return new DefaultVatidAndCompanyBuilder();
    }

    @Override
    public DefaultVatidAndCompanyBuilder withVatID(String vatID) {
        this.vatid = vatID;
        return this;
    }

    @Override
    public DefaultVatidAndCompanyBuilder withCompany(String companyName) {
        this.company = companyName;
        return this;
    }

    @Override
    public VatidAndCompany search() {
        if(isUseCompanyToFindVatid()) {
            vatid = VatidAndCompanySearch.getVatid(company);
        }
        return new VatidAndCompany(vatid, VatidAndCompanySearch.getCompany(vatid));
    }

    private boolean isUseCompanyToFindVatid() {
        if (vatid == "")
            return true;
        return false;
    }
}
