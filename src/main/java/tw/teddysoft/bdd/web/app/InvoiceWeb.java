package tw.teddysoft.bdd.web.app;

import spark.ModelAndView;
import spark.template.velocity.VelocityTemplateEngine;
import tw.teddysoft.bdd.domain.invoice.Invoice;
import tw.teddysoft.bdd.domain.invoice.InvoiceBuilder;

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



//        get("/VatidAndCompany", (request, response) -> {
//            Map<String, Object> model = new HashMap<>();
//            model.put("Title", "統編與公司名稱");
//
//            return new ModelAndView(model, "invoice_input.vm"); // located in the resources directory
//        }, new VelocityTemplateEngine());
//
//
//        post("/VatidAndCompany", (request, response) -> {
//            VatidAndCompany vatidAndCompany = null;
//            String vatid = request.queryMap("vatid").value();
//            String company = request.queryMap("company").value();
////            companyNameService(vatid);
//            if(isUseVatidToFindCompany(vatid)) {
//                vatidAndCompany.withVatID(vatid);
//            }
//            else {
////                vatidAndCompany.
//            }
//
////            if (isUseTaxIncludedPriceToCalculateInvoice(taxIncludedPrice)) {
////                vatidAndCompany = InvoiceBuilder.newInstance().
////                        withTaxIncludedPrice(taxIncludedPrice).
////                        withVatRate(vatRate).
////                        issue();
////            }
////            else {
////                vatidAndCompany = InvoiceBuilder.newInstance().
////                        withTaxExcludedPrice(taxExcludedPrice).
////                        withVatRate(vatRate).
////                        issue();
////            }
//
//            Map<String, Object> model = new HashMap<>();
//            model.put("VatidAndCompany", vatidAndCompany);
//
//            return new ModelAndView(model, "invoice_result.vm"); // located in the resources directory
//        }, new VelocityTemplateEngine());
    }


//    private static boolean isUseVatidToFindCompany(String vatid) {
//        return true;
//    }

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