$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/issuing_company_invoice.feature");
formatter.feature({
  "line": 1,
  "name": "Issuing invoices for companies",
  "description": "In order to avoid errors\r\nAs a Teddysoft employee\r\nI want to brainlessly issue an company invoice with tax included price",
  "id": "issuing-invoices-for-companies",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 14,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 15,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 16,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 17,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 18,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 19,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 20,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 21,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7"
    },
    {
      "cells": [
        "10",
        "0",
        "10",
        "邊界條件"
      ],
      "line": 22,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8"
    },
    {
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 23,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 24,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 403223,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 117117057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 190495,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 414641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 3120321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 69407,
  "status": "passed"
});
formatter.after({
  "duration": 17427,
  "status": "passed"
});
formatter.before({
  "duration": 245479,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 60694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 51079,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 24938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 53182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 50779,
  "status": "passed"
});
formatter.after({
  "duration": 19229,
  "status": "passed"
});
formatter.before({
  "duration": 301967,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 95248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 59192,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 51079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 114477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 71510,
  "status": "passed"
});
formatter.after({
  "duration": 22535,
  "status": "passed"
});
formatter.before({
  "duration": 287844,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 83229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 56488,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 16225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 76619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 67905,
  "status": "passed"
});
formatter.after({
  "duration": 19531,
  "status": "passed"
});
formatter.before({
  "duration": 361459,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 70609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 46272,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 14422,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 85032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 76618,
  "status": "passed"
});
formatter.after({
  "duration": 26741,
  "status": "passed"
});
formatter.before({
  "duration": 282136,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 98552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 67304,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 14723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 62797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 54084,
  "status": "passed"
});
formatter.after({
  "duration": 20131,
  "status": "passed"
});
formatter.before({
  "duration": 341628,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 10",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 133106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 67905,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 19530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 45370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 42966,
  "status": "passed"
});
formatter.after({
  "duration": 21934,
  "status": "passed"
});
formatter.before({
  "duration": 353346,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 131003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 91942,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 17126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 71811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 65501,
  "status": "passed"
});
formatter.after({
  "duration": 19530,
  "status": "passed"
});
formatter.before({
  "duration": 380387,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Successful issuing invoices using tax included prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-included-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the tax included price provided is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "the tax excluded price is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 104261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 44769,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 13821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 72713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 36056,
  "status": "passed"
});
formatter.after({
  "duration": 27943,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is \u003ctax_excluded\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is \u003cVAT\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is \u003ctax_included\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;",
  "rows": [
    {
      "comments": [
        {
          "line": 35,
          "value": "# VAT \u003d Value Added Tax"
        }
      ],
      "cells": [
        "tax_included",
        "VAT",
        "tax_excluded",
        "notes"
      ],
      "line": 36,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;1"
    },
    {
      "cells": [
        "36000",
        "1714",
        "34286",
        "Refactoring定價"
      ],
      "line": 37,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2"
    },
    {
      "cells": [
        "17900",
        "852",
        "17048",
        "Scrum早鳥"
      ],
      "line": 38,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3"
    },
    {
      "cells": [
        "17000",
        "810",
        "16190",
        "Scrum泰迪之友"
      ],
      "line": 39,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4"
    },
    {
      "cells": [
        "21000",
        "1000",
        "20000",
        "Scrum定價"
      ],
      "line": 40,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5"
    },
    {
      "cells": [
        "99",
        "5",
        "94",
        "四捨五入案例"
      ],
      "line": 41,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6"
    },
    {
      "cells": [
        "1",
        "0",
        "1",
        "邊界條件"
      ],
      "line": 42,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7"
    },
    {
      "comments": [
        {
          "line": 43,
          "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
        }
      ],
      "cells": [
        "11",
        "1",
        "10",
        "邊界條件"
      ],
      "line": 44,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8"
    },
    {
      "cells": [
        "12",
        "1",
        "11",
        "邊界條件"
      ],
      "line": 45,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9"
    },
    {
      "cells": [
        "0",
        "0",
        "0",
        "可以開零元發票"
      ],
      "line": 46,
      "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 264108,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 34286",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1714",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 36000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 110271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34286",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 126495,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 22535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1714",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 79022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 66103,
  "status": "passed"
});
formatter.after({
  "duration": 16826,
  "status": "passed"
});
formatter.before({
  "duration": 282737,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 17048",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 852",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17900",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 65201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17048",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 37858,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 10516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "852",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 39361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17900",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 32450,
  "status": "passed"
});
formatter.after({
  "duration": 13521,
  "status": "passed"
});
formatter.before({
  "duration": 227451,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 16190",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 810",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 17000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 61596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16190",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 90740,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 13220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "810",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 57689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "17000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 70910,
  "status": "passed"
});
formatter.after({
  "duration": 55886,
  "status": "passed"
});
formatter.before({
  "duration": 292352,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 20000",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1000",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 21000",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 84130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 46572,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 13521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 68506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21000",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 45069,
  "status": "passed"
});
formatter.after({
  "duration": 13821,
  "status": "passed"
});
formatter.before({
  "duration": 224146,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 94",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 5",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 99",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 53482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "94",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 46873,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 28845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 108467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "99",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 66402,
  "status": "passed"
});
formatter.after({
  "duration": 15023,
  "status": "passed"
});
formatter.before({
  "duration": 219339,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 1",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 71811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 32150,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 9615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 26140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 27943,
  "status": "passed"
});
formatter.after({
  "duration": 12920,
  "status": "passed"
});
formatter.before({
  "duration": 493662,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 43,
      "value": "#  | 10              | 0     | 10           | 此案例不適用     |"
    }
  ],
  "line": 44,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 10",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 11",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 50779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 41764,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 12018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 33952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 69408,
  "status": "passed"
});
formatter.after({
  "duration": 256897,
  "status": "passed"
});
formatter.before({
  "duration": 172767,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 11",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 12",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 54384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 86834,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 18929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 101257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 38759,
  "status": "passed"
});
formatter.after({
  "duration": 36957,
  "status": "passed"
});
formatter.before({
  "duration": 259301,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Successful issuing invoices using tax excluded prices",
  "description": "",
  "id": "issuing-invoices-for-companies;successful-issuing-invoices-using-tax-excluded-prices;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the tax excluded price provided is 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I should see the VAT is 0",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the tax included price is 0",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 52882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 27943,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 8713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 26741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 23136,
  "status": "passed"
});
formatter.after({
  "duration": 21333,
  "status": "passed"
});
formatter.before({
  "duration": 151434,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "A special case to issue an invoice by assigning 10$ to tax included prices first and tax excluded prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-included-prices-first-and-tax-excluded-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I am on the invoice Web page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I should see the VAT is 1",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "the tax included price is 11",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "location": "IssuingInvoiceStep.java:33"
});
formatter.result({
  "duration": 14121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 57388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 28845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 95548,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 14122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 160749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 122289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 56487,
  "status": "passed"
});
formatter.after({
  "duration": 41765,
  "status": "passed"
});
formatter.before({
  "duration": 240972,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "A special case to issue an invoice by assigning 10$ to tax excluded prices first and tax included prices second",
  "description": "",
  "id": "issuing-invoices-for-companies;a-special-case-to-issue-an-invoice-by-assigning-10$-to-tax-excluded-prices-first-and-tax-included-prices-second",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 62,
  "name": "Ｔhe VAT rate is 0.05",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "the tax excluded price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the tax included price provided is 10",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I issue a company invoice",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "I should see the VAT is 0",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "the tax included price is 10",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the tax excluded price is 10",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "0.05",
      "offset": 16
    }
  ],
  "location": "IssuingInvoiceStep.java:18"
});
formatter.result({
  "duration": 124392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:28"
});
formatter.result({
  "duration": 41164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 35
    }
  ],
  "location": "IssuingInvoiceStep.java:24"
});
formatter.result({
  "duration": 65802,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 12920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "IssuingInvoiceStep.java:40"
});
formatter.result({
  "duration": 36056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:48"
});
formatter.result({
  "duration": 34854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 26
    }
  ],
  "location": "IssuingInvoiceStep.java:44"
});
formatter.result({
  "duration": 28845,
  "status": "passed"
});
formatter.after({
  "duration": 13822,
  "status": "passed"
});
});