package tw.teddysoft.bdd.domain.vatidAndCompany;

/**
 * Created by jeni on 2017/4/16.
 */
public interface VatidAndCompanyBuilder {

   public static VatidAndCompanyBuilder newInstance() {
      return new DefaultVatidAndCompanyBuilder();
   }

   public VatidAndCompanyBuilder withVatID(String vatid);

   public VatidAndCompanyBuilder withCompany(String company);

   public VatidAndCompany search();

}
