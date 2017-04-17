package tw.teddysoft.bdd.domain.vatidAndCompany;

/**
 * Created by jeni on 2017/4/13.
 */
public class VatidAndCompany {
    private final String vatid;
    private final String company;

    public VatidAndCompany(String vatid, String company) {
        this.vatid = vatid;
        this.company = company;
    }

    public String getVatid() {
        return vatid;
    }

    public String getCompany() {
        return this.company;
    }



}
