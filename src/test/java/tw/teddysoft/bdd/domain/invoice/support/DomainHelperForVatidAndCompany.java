package tw.teddysoft.bdd.domain.invoice.support;

import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompany;
import tw.teddysoft.bdd.domain.vatidAndCompany.VatidAndCompanyBuilder;

/**
 * Created by jeni on 2017/4/16.
 */
public class DomainHelperForVatidAndCompany {

    VatidAndCompanyBuilder builder;
    VatidAndCompany vatidAndCompany;



    public DomainHelperForVatidAndCompany(VatidAndCompanyBuilder builder) {
        this.builder = builder;
    }

    public VatidAndCompanyBuilder getVatidAndCompanyBuilder() {
        return builder;
    }

    public void setVatidAndCompany(VatidAndCompany vatidAndCompanyName) {
        vatidAndCompany = vatidAndCompanyName;
    }

    public VatidAndCompany getVatidAndCompany() { return vatidAndCompany; }

}
