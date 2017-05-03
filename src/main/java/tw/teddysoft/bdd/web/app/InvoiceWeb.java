package tw.teddysoft.bdd.web.app;

import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;
import tw.teddysoft.bdd.domain.invoice.Invoice;
import tw.teddysoft.bdd.domain.invoice.InvoiceBuilder;
import tw.teddysoft.bdd.domain.company.Company;
import tw.teddysoft.bdd.domain.company.CompanyBuilder;

import java.util.HashMap;
import java.util.Map;

import static spark.Spark.get;
import static spark.Spark.post;


/**
 * Created by teddy on 2017/3/2.
 */

/**
 * VelocityTemplateRoute example.
 */
public final class InvoiceWeb {

    public static void main(String[] args) {

        get("/invoice", (request, response) -> {
            Map<String, Object> model = new HashMap<>();
            model.put("Title", "三聯式發票");

            return new ModelAndView(model, "invoice_input.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());


        post("/invoice", (request, response) -> {
            Invoice invoice;
            int taxIncludedPrice = integerValue(request.queryMap("taxIncludedPrice").value());
            int taxExcludedPrice = integerValue(request.queryMap("taxExcludedPrice").value());
            double vatRate = request.queryMap("vatRate").doubleValue();

            if (isUseTaxIncludedPriceToCalculateInvoice(taxIncludedPrice)) {
                invoice = InvoiceBuilder.newInstance().
                        withTaxIncludedPrice(taxIncludedPrice).
                        withVatRate(vatRate).
                        issue();
            }
            else {
                invoice = InvoiceBuilder.newInstance().
                        withTaxExcludedPrice(taxExcludedPrice).
                        withVatRate(vatRate).
                        issue();
            }

            Map<String, Object> model = new HashMap<>();
            model.put("invoice", invoice);

            return new ModelAndView(model, "invoice_result.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());



        get("/search", (request, response) -> {

            Map<String, Object> model = new HashMap<>();

            model.put("Title", "統編與公司名稱");

            return new ModelAndView(model, "invoice_input.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());


        post("/search", (request, response) -> {
            Company company;
            String vatid = request.queryMap("vatid").value();
            String companyName = request.queryMap("companyName").value();
            System.out.print("companyName="+companyName);
            if(isUseVatidToFindCompany(vatid)) {
                company = CompanyBuilder.newInstance().
                        giveVatID(vatid).search();
            }
            else {
                company = CompanyBuilder.newInstance().
                        giveCompanyName(companyName).search();
            }
            Map<String, Object> model = new HashMap<>();
            model.put("company", company);
            return new ModelAndView(model, "invoice_result.vm"); // located in the resources directory
        }, new VelocityTemplateEngine());

    }


    private static boolean isUseVatidToFindCompany(String vatid) {
        if ( ("".equals(vatid) ) || (null == vatid) ) { //use Company name find Vatid
            return  false;
        }
        return true;
    }

    private static boolean isUseTaxIncludedPriceToCalculateInvoice(int taxIncludedPrice){
        return !(0 == taxIncludedPrice);
    }

    private static int integerValue(String str){
        if ((null == str) || ("".equals(str)))
            return 0;
        else
           return Integer.valueOf(str);
    }

}