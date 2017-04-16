package tw.teddysoft.bdd.domain.invoice.support;

import cucumber.runtime.java.picocontainer.PicoFactory;
import tw.teddysoft.bdd.domain.invoice.DefaultInvoiceBuilder;
import tw.teddysoft.bdd.domain.vatidAndCompany.DefaultVatidAndCompanyBuilder;

import java.util.Properties;

/**
 * Created by teddy on 2017/3/19.
 */
public class CustomPicoFactory extends PicoFactory  {

    public CustomPicoFactory()  {
        Properties prop = Utility.loadProperties(Utility.CUCUMBER_PROPERTY_FILE);
        if(Utility.isUnderInvoiceWebMode()) {
            addClass(WebInvoiceBuilder.class);
            addClass(WebVatidAndCompanyBuilder.class);
        } else {
            addClass(DefaultInvoiceBuilder.class);
            addClass(DefaultVatidAndCompanyBuilder.class);
        }
    }
}
