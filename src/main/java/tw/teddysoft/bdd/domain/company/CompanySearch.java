package tw.teddysoft.bdd.domain.company;

import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.nio.charset.Charset;

/**
 * Created by jeni on 2017/4/16.
 */
public class CompanySearch {

    public static String getCompany(String input_vatid) {
        if (input_vatid == "" ){
            return "請輸入統編";
        }
        try {
            Integer.parseInt(input_vatid);
        } catch (Exception e) {
            return "請輸入正確統編";
        }
        String company = searchCompany(input_vatid);

        return company;
    }

    public static String getVatid(String input_company) {

        if (input_company == "")
            return "請輸入公司名稱";

        String vatid = searchVatid(input_company);

        return vatid;
    }

    private static String readAll(BufferedReader rd) throws IOException {
        StringBuilder sb = new StringBuilder();
        int cp;
        while ((cp = rd.read()) != -1) {
            sb.append((char) cp);
        }
        return sb.toString();
    }

    private static String searchCompany(String input_vatid) {
        String url = "http://company.g0v.ronny.tw/api/show/" + input_vatid;
        String company = null;
        try {
            InputStream is = new URL(url).openStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            JSONObject json = new JSONObject(jsonText);

            if( json.has("data") == false ){
                company = "請輸入正確統編";
            }
            else {
                if (json.getJSONObject("data").has("公司名稱")) {
                    company = json.getJSONObject("data").getString("公司名稱");
                } else if (json.getJSONObject("data").has("名稱")) {
                    company = json.getJSONObject("data").getString("名稱");
                } else if (json.getJSONObject("data").has("分公司名稱")) {
                    company = json.getJSONObject("data").getString("分公司名稱");
                } else if (json.getJSONObject("data").has("商業名稱")) {
                    company = json.getJSONObject("data").getString("商業名稱");
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return company;
    }

    private static String searchVatid(String input_companyName) {

        String url = "http://company.g0v.ronny.tw/api/search?q=" + input_companyName;
        String vatid = null;
        try {
            InputStream is = new URL(url).openStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            JSONObject jsonOb = new JSONObject(jsonText);
            JSONArray jsonArray = jsonOb.getJSONArray("data");

            if( jsonArray.isNull(0))
                vatid = "請輸入正確公司名稱";
            else
                vatid = jsonArray.getJSONObject(0).getString("統一編號");

        } catch (IOException e) {
            e.printStackTrace();
        }

        return vatid;
    }

}
