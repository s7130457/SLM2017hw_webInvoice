Feature: Entering VAT ID and the company name
  In order to avoid errors
  As a Teddysoft employee
  I want to make sure the VAT ID and company name are consistency

  Scenario: Entering VAT ID gets the corresponding company name
    When  I enter the VAT ID "53909614"
    Then  I should see the company name "泰迪軟體科技有限公司"

  Scenario: Entering company name gets the corresponding VAT ID
    When  I enter the company name "泰迪軟體科技有限公司"
    Then  I should see the VAT ID "53909614"

  Scenario: Entering VAT ID is null gets the corresponding company name is "請輸入統編"
    When  I enter the VAT ID ""
    Then  I should see the company name "請輸入統編"

  Scenario Outline: 用統一編號找公司名稱
    When I enter the VAT ID "<vat_id>"
    Then I should see the company name "<company_name>"
    Examples:
      |   vat_id       |   company_name                |                    notes                     |
      |  11111111  |    東發視聽社                  |                  商業名稱                   |
      |  56605473  |    資展百貨有限公司            |                  公司名稱                   |
      |  24628967  |    台北分公司                  | 分公司名稱  (大馨旅行社有限公司台北分公司)   |
      |  92021164  |    國立臺北科技大學            |                      名稱                    |
#      |            |      請輸入統編                 |                  統編為空                   |
      |  12584651  |  查無此公司，請輸入正確統編   |                  錯誤統編                   |


  Scenario Outline: 用公司名稱找統一編號
    When I enter the company name "<company_name>"
    Then I should see the VAT ID "<vat_id>"
    Examples:
      |   vat_id                            |   company_name           |                    notes                     |
      |  09430924                          |    東發視聽社             |                  商業名稱                   |
      |  04374276                          |    鴻海當舖               |                  商業名稱                   |
      |  56605473                          |    資展百貨有限公司       |                  公司名稱                   |
      |  60627506                          |    千山室內設計有限公司   |                  公司名稱                   |
      |  92021164                          |    國立臺北科技大學       |                      名稱                    |
      |  請輸入公司名稱                   |                              |                  公司為空                  |
      |  查無此統編，請輸入正確公司名稱  |       測試公司              |                  錯誤公司                  |