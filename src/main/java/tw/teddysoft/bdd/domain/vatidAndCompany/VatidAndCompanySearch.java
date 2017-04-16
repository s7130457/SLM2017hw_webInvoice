package tw.teddysoft.bdd.domain.vatidAndCompany;

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
public class VatidAndCompanySearch {

    public static String getCompany(String vatid) {
        String url = "http://company.g0v.ronny.tw/api/show/" + vatid;
        String company = "";
        JSONObject json = null;
        try {
            InputStream is = new URL(url).openStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            json = new JSONObject(jsonText);
            if(json.getJSONObject("data").has("公司名稱")) {
                company = json.getJSONObject("data").getString("公司名稱");
            }
            else if(json.getJSONObject("data").has("名稱")) {
                company = json.getJSONObject("data").getString("名稱");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return company;
    }

    public static String getVatid(String company) {
        String url = "http://company.g0v.ronny.tw/api/search?q=" + company;
        String vatid = "";
        JSONArray jsonArr = null;
        JSONObject jsonOb = null;
        try {
            InputStream is = new URL(url).openStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is, Charset.forName("UTF-8")));
            String jsonText = readAll(rd);
            jsonOb = new JSONObject(jsonText);
            jsonArr = jsonOb.getJSONArray("data");
            vatid = jsonArr.getJSONObject(0).getString("統一編號");
        } catch (IOException e) {
            e.printStackTrace();
        }
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
}
