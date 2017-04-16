
function clearTaxExclude() {
    var x = document.getElementById("taxExcludedPrice");
    x.value = ""
}

function clearTaxInclude() {
    var x = document.getElementById("taxIncludedPrice");
    x.value = ""
}

function clearVatid() {
    var x = document.getElementById("vatid");
    x.value = ""
}

function clearCompany() {
    var x = document.getElementById("company");
    x.value = ""
}

function companyNameService() {
//var companyNameService = {
    API_URL: 'http://company.g0v.ronny.tw/api/',
    getSingleCompanyName: function(companyData) {
        if (typeof companyData['公司名稱'] === 'string') {
            return companyData['公司名稱'];
        }
        return 'Can\'t found any company.';
    },
    getCompanyFromId: function(companyId, callback) {
        $.getJSON(
            this.API_URL + 'show/' + companyId,
            function(res) {
                if (!res || !res.data) {
                    callback();
                    return;
                }

                var companyInfo = {
                    name: this.getSingleCompanyName(res.data),
                    fdi: !!res.data['在中華民國境內營運資金'],
                    id: companyId
                };

            callback(companyInfo);
            }.bind(this)
        );
    }
}