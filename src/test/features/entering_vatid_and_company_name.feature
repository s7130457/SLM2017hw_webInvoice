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

  Scenario Outline: 用統一編號找公司名稱
    When I enter the VAT ID "<vat_id>"
    Then I should see the company name "<company_name>"
    Examples:
      |   vat_id       |   company_name             |                    notes                     |
      |  11111111  |    東發視聽社                  |                  商業名稱                   |
      |  56605473  |    資展百貨有限公司           |                  公司名稱                   |
      |  24628967  |    台北分公司                  | 分公司名稱  (大馨旅行社有限公司台北分公司)   |
      |  92021164  |    國立臺北科技大學            |                      名稱                    |
#      |            |  請輸入正確統編                |                  統編為空                   |
      |  12584651  |  請輸入正確統編   		        |                  錯誤統編                   |
	  |  fthrhr  |  請輸入正確統編   		            |                  錯誤統編                   |
#      |  27942243  |  韓商三星太科股份有限公司   		|                公司名稱(外商)                     |


  Scenario Outline: 用公司名稱找統一編號
    When I enter the company name "<company_name>"
    Then I should see the VAT ID "<vat_id>"
    Examples:

      |        company_name          |         vat_id       |           notes             |
      |         東發視聽社            |       09430924      |          商業名稱          |
      |   韓商三星太科股份有限公司   |       27942243      |  公司名稱(外商):SAMSUNG  |
#      | SAMSUNG TECHWIN CO., LTD. |       27942243      |  公司名稱(外商):SAMSUNG  |
      |       資展百貨有限公司        |       56605473      |         公司名稱           |
      |           台北分公司          |       33061127      |        公司名稱(暫定)       |
#      |           台北分公司          |    查詢到多筆資料  |          公司名稱           |
      |        國立臺北科技大學      |        92021164      |            名稱             |
      |                               |   請輸入公司名稱    |           公司為空          |
      |            測試公司          |  請輸入正確公司名稱  |          錯誤公司          |