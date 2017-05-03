package tw.teddysoft.bdd.domain.company;

/**
 * Created by jeni on 2017/4/13.
 */
public class Company {
    private final String vatid;
    private final String company;

    public Company(String vatid, String company) {
        this.vatid = vatid;
        this.company = company;
    }

    public String getVatid() {
        return this.vatid;
    }

    public String getCompany() {
        return this.company;
    }



}
