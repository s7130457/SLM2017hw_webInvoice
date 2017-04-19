$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/features/entering_vatid_and_company_name.feature");
formatter.feature({
  "line": 1,
  "name": "Entering VAT ID and the company name",
  "description": "In order to avoid errors\r\nAs a Teddysoft employee\r\nI want to make sure the VAT ID and company name are consistency",
  "id": "entering-vat-id-and-the-company-name",
  "keyword": "Feature"
});
formatter.before({
  "duration": 463917,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Entering VAT ID gets the corresponding company name",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;entering-vat-id-gets-the-corresponding-company-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I enter the VAT ID \"53909614\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see the company name \"泰迪軟體科技有限公司\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "53909614",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 201040929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "泰迪軟體科技有限公司",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 5606362,
  "status": "passed"
});
formatter.after({
  "duration": 25840,
  "status": "passed"
});
formatter.before({
  "duration": 375880,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Entering company name gets the corresponding VAT ID",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;entering-company-name-gets-the-corresponding-vat-id",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I enter the company name \"泰迪軟體科技有限公司\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should see the VAT ID \"53909614\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "泰迪軟體科技有限公司",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 133265208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53909614",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 178776,
  "status": "passed"
});
formatter.after({
  "duration": 48675,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"\u003cvat_id\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"\u003ccompany_name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;",
  "rows": [
    {
      "cells": [
        "vat_id",
        "company_name",
        "notes"
      ],
      "line": 18,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;1"
    },
    {
      "cells": [
        "11111111",
        "東發視聽社",
        "商業名稱"
      ],
      "line": 19,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;2"
    },
    {
      "cells": [
        "56605473",
        "資展百貨有限公司",
        "公司名稱"
      ],
      "line": 20,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;3"
    },
    {
      "cells": [
        "24628967",
        "台北分公司",
        "分公司名稱  (大馨旅行社有限公司台北分公司)"
      ],
      "line": 21,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;4"
    },
    {
      "cells": [
        "92021164",
        "國立臺北科技大學",
        "名稱"
      ],
      "line": 22,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;5"
    },
    {
      "comments": [
        {
          "line": 23,
          "value": "#      |            |      請輸入統編                 |                  統編為空                   |"
        }
      ],
      "cells": [
        "12584651",
        "查無此公司，請輸入正確統編",
        "錯誤統編"
      ],
      "line": 24,
      "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 810953,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"11111111\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"東發視聽社\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "11111111",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 86372054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "東發視聽社",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 134007,
  "status": "passed"
});
formatter.after({
  "duration": 64599,
  "status": "passed"
});
formatter.before({
  "duration": 652608,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"56605473\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"資展百貨有限公司\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "56605473",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 1122458711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "資展百貨有限公司",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 104562,
  "status": "passed"
});
formatter.after({
  "duration": 44168,
  "status": "passed"
});
formatter.before({
  "duration": 572385,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"24628967\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"台北分公司\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "24628967",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 91726627,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "台北分公司",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 140617,
  "status": "passed"
});
formatter.after({
  "duration": 52882,
  "status": "passed"
});
formatter.before({
  "duration": 763780,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"92021164\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"國立臺北科技大學\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "92021164",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 85275058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "國立臺北科技大學",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 149030,
  "status": "passed"
});
formatter.after({
  "duration": 51380,
  "status": "passed"
});
formatter.before({
  "duration": 541136,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "#      |            |      請輸入統編                 |                  統編為空                   |"
    }
  ],
  "line": 24,
  "name": "用統一編號找公司名稱",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用統一編號找公司名稱;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I enter the VAT ID \"12584651\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should see the company name \"查無此公司，請輸入正確統編\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12584651",
      "offset": 20
    }
  ],
  "location": "VatidAndCompanyStep.java:19"
});
formatter.result({
  "duration": 80999753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "查無此公司，請輸入正確統編",
      "offset": 31
    }
  ],
  "location": "VatidAndCompanyStep.java:24"
});
formatter.result({
  "duration": 142120,
  "status": "passed"
});
formatter.after({
  "duration": 34253,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"\u003ccompany_name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"\u003cvat_id\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;",
  "rows": [
    {
      "cells": [
        "vat_id",
        "company_name",
        "notes"
      ],
      "line": 31,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;1"
    },
    {
      "cells": [
        "09430924",
        "東發視聽社",
        "商業名稱"
      ],
      "line": 32,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;2"
    },
    {
      "cells": [
        "04374276",
        "鴻海當舖",
        "商業名稱"
      ],
      "line": 33,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;3"
    },
    {
      "cells": [
        "56605473",
        "資展百貨有限公司",
        "公司名稱"
      ],
      "line": 34,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;4"
    },
    {
      "cells": [
        "60627506",
        "千山室內設計有限公司",
        "公司名稱"
      ],
      "line": 35,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;5"
    },
    {
      "cells": [
        "92021164",
        "國立臺北科技大學",
        "名稱"
      ],
      "line": 36,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;6"
    },
    {
      "cells": [
        "請輸入公司名稱",
        "",
        "公司為空"
      ],
      "line": 37,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;7"
    },
    {
      "cells": [
        "查無此統編，請輸入正確公司名稱",
        "測試公司",
        "錯誤公司"
      ],
      "line": 38,
      "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 855422,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"東發視聽社\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"09430924\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "東發視聽社",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 851914092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "09430924",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 65502,
  "status": "passed"
});
formatter.after({
  "duration": 29445,
  "status": "passed"
});
formatter.before({
  "duration": 353947,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"鴻海當舖\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"04374276\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "鴻海當舖",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 102132906,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04374276",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 134308,
  "status": "passed"
});
formatter.after({
  "duration": 47774,
  "status": "passed"
});
formatter.before({
  "duration": 758972,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"資展百貨有限公司\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"56605473\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "資展百貨有限公司",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 117353824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56605473",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 139115,
  "status": "passed"
});
formatter.after({
  "duration": 47173,
  "status": "passed"
});
formatter.before({
  "duration": 824174,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"千山室內設計有限公司\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"60627506\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "千山室內設計有限公司",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 108524682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60627506",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 145725,
  "status": "passed"
});
formatter.after({
  "duration": 47774,
  "status": "passed"
});
formatter.before({
  "duration": 768888,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"國立臺北科技大學\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"92021164\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "國立臺北科技大學",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 102671338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92021164",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 148129,
  "status": "passed"
});
formatter.after({
  "duration": 50778,
  "status": "passed"
});
formatter.before({
  "duration": 530319,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"請輸入公司名稱\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 101256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "請輸入公司名稱",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 87135,
  "status": "passed"
});
formatter.after({
  "duration": 31548,
  "status": "passed"
});
formatter.before({
  "duration": 563371,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "用公司名稱找統一編號",
  "description": "",
  "id": "entering-vat-id-and-the-company-name;用公司名稱找統一編號;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "I enter the company name \"測試公司\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see the VAT ID \"查無此統編，請輸入正確公司名稱\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "測試公司",
      "offset": 26
    }
  ],
  "location": "VatidAndCompanyStep.java:28"
});
formatter.result({
  "duration": 85683990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "查無此統編，請輸入正確公司名稱",
      "offset": 25
    }
  ],
  "location": "VatidAndCompanyStep.java:33"
});
formatter.result({
  "duration": 146026,
  "status": "passed"
});
formatter.after({
  "duration": 54684,
  "status": "passed"
});
});