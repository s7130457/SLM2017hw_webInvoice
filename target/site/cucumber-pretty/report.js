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
  "duration": 59716368,
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
  "duration": 175386690,
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
  "duration": 3007650120,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 1016495788,
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
  "duration": 3476972,
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
  "duration": 61295,
  "status": "passed"
});
formatter.after({
  "duration": 31549,
  "status": "passed"
});
formatter.before({
  "duration": 578394,
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
  "duration": 64300,
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
  "duration": 2440011562,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 929703685,
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
  "duration": 81727,
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
  "duration": 55886,
  "status": "passed"
});
formatter.after({
  "duration": 21033,
  "status": "passed"
});
formatter.before({
  "duration": 612647,
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
  "duration": 65801,
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
  "duration": 2496044238,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 986903064,
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
  "duration": 52581,
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
  "duration": 45370,
  "status": "passed"
});
formatter.after({
  "duration": 45971,
  "status": "passed"
});
formatter.before({
  "duration": 1333761,
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
  "duration": 133105,
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
  "duration": 2442263542,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 957083790,
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
  "duration": 63398,
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
  "duration": 88336,
  "status": "passed"
});
formatter.after({
  "duration": 18328,
  "status": "passed"
});
formatter.before({
  "duration": 509287,
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
  "duration": 64299,
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
  "duration": 2437642101,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 983813991,
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
  "duration": 80224,
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
  "duration": 61295,
  "status": "passed"
});
formatter.after({
  "duration": 32150,
  "status": "passed"
});
formatter.before({
  "duration": 1111717,
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
  "duration": 90740,
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
  "duration": 2496230826,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 1006889946,
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
  "duration": 77821,
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
  "duration": 38760,
  "status": "passed"
});
formatter.after({
  "duration": 13821,
  "status": "passed"
});
formatter.before({
  "duration": 655913,
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
  "duration": 146326,
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
  "duration": 2467763942,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 986007079,
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
  "duration": 94946,
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
  "duration": 88938,
  "status": "passed"
});
formatter.after({
  "duration": 28844,
  "status": "passed"
});
formatter.before({
  "duration": 1152280,
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
  "duration": 106364,
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
  "duration": 2435957097,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 940771286,
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
  "duration": 118383,
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
  "duration": 40863,
  "status": "passed"
});
formatter.before({
  "duration": 504179,
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
  "duration": 69708,
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
  "duration": 2442004542,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 957797994,
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
  "duration": 91942,
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
  "duration": 49877,
  "status": "passed"
});
formatter.after({
  "duration": 12620,
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
  "duration": 565173,
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
  "duration": 51380,
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
  "duration": 2468398222,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 958952077,
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
  "duration": 92844,
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
  "duration": 75717,
  "status": "passed"
});
formatter.after({
  "duration": 31849,
  "status": "passed"
});
formatter.before({
  "duration": 623163,
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
  "duration": 71210,
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
  "duration": 2426658931,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 925256213,
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
  "duration": 95548,
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
  "duration": 57689,
  "status": "passed"
});
formatter.after({
  "duration": 18929,
  "status": "passed"
});
formatter.before({
  "duration": 1522453,
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
  "duration": 62497,
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
  "duration": 2475057411,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 1075745535,
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
  "duration": 51980,
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
  "duration": 30947,
  "status": "passed"
});
formatter.after({
  "duration": 12620,
  "status": "passed"
});
formatter.before({
  "duration": 597023,
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
  "duration": 70609,
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
  "duration": 2443778782,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 892528446,
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
  "duration": 99453,
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
  "duration": 27042,
  "status": "passed"
});
formatter.after({
  "duration": 11718,
  "status": "passed"
});
formatter.before({
  "duration": 587107,
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
  "duration": 74215,
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
  "duration": 2441640679,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 954365791,
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
  "duration": 92242,
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
  "duration": 70309,
  "status": "passed"
});
formatter.after({
  "duration": 21032,
  "status": "passed"
});
formatter.before({
  "duration": 494564,
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
  "duration": 74214,
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
  "duration": 2435336638,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 935767955,
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
  "duration": 60694,
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
  "duration": 46272,
  "status": "passed"
});
formatter.after({
  "duration": 13821,
  "status": "passed"
});
formatter.before({
  "duration": 967195,
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
  "duration": 730128,
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
  "duration": 2513810087,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 973363544,
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
  "duration": 58891,
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
  "duration": 79322,
  "status": "passed"
});
formatter.after({
  "duration": 485550,
  "status": "passed"
});
formatter.before({
  "duration": 628571,
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
  "duration": 63098,
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
  "duration": 2405694338,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 988170422,
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
  "duration": 86233,
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
  "duration": 40863,
  "status": "passed"
});
formatter.after({
  "duration": 24939,
  "status": "passed"
});
formatter.before({
  "duration": 571182,
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
  "duration": 79323,
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
  "duration": 2458927589,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 1005942582,
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
  "duration": 82928,
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
  "duration": 46272,
  "status": "passed"
});
formatter.after({
  "duration": 30347,
  "status": "passed"
});
formatter.before({
  "duration": 1450641,
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
  "duration": 33052,
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
  "duration": 117782,
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
  "duration": 2472266999,
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
  "duration": 67540757,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 916973616,
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
  "duration": 88336,
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
  "duration": 44169,
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
  "duration": 42065,
  "status": "passed"
});
formatter.after({
  "duration": 23436,
  "status": "passed"
});
formatter.before({
  "duration": 715706,
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
  "duration": 93144,
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
  "duration": 2411773331,
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
  "duration": 52001948,
  "status": "passed"
});
formatter.match({
  "location": "IssuingInvoiceStep.java:36"
});
formatter.result({
  "duration": 914482467,
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
  "duration": 68205,
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
  "duration": 54385,
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
  "duration": 30047,
  "status": "passed"
});
formatter.after({
  "duration": 11718,
  "status": "passed"
});
});