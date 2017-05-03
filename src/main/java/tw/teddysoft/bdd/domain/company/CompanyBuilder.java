package tw.teddysoft.bdd.domain.company;

/**
 * Created by jeni on 2017/4/16.
 */
public interface CompanyBuilder {

   public static CompanyBuilder newInstance() {
      return new DefaultCompanyBuilder();
   }

   public CompanyBuilder giveVatID(String vatid);

   public CompanyBuilder giveCompanyName(String company);

   public Company search();

}
