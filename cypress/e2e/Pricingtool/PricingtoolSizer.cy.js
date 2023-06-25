import LoginPage from "../../../PageObjects/LoginPage"
import Pricingtool from "../../../PageObjects/Pricingtool";
describe('PricingTool_Sizer_Validation',()=>{
    beforeEach('Invoke webpage',()=>{
        // cy.visit("https://aws-stage.blnsoftware.com/");
        cy.Login('Testers.LO@test.com','Cypress123@');
    })
    it.skip('login to BLN',()=>{
        LoginPage.Enterusername('Testers.LO@test.com');
        LoginPage.Enterpassword('Cypress123@');
        LoginPage.Clicklogin();
        LoginPage.validateLenderLogin();
        cy.wait(3000);
    })
    it.skip('Import Sizer',()=>{ 
        Pricingtool.PricingtoolTabclick();
        Pricingtool.SelectLoanProgram('Short Term 12 Month');
        Pricingtool.SelectuseofFunds('Purchase');
        Pricingtool.SelectPropertyType('Single Family');
        Pricingtool.importsizerfile('ST12Sizer.xlsm'); // here .extension is not mandatory
    })

    it('should convert the Excel file to JSON', () => {
        const excelFilePath ="/Users/kulakarnivarunkumar/Desktop/CypressAutomation/cypress/fixtures/ST12Sizer.xlsm";
        const sheetName = "RTL";
        cy.convertExcelToJson(excelFilePath);
        // cy.task("generateJSONFromExcel", { excelFilePath, sheetName},{force:true}).then(
        //     (user) => {
        //       cy.log(user[1]);
        //     }
        // );
    });
    it.only('should convert the Excel file to JSON', () => {
        const filePath = '/Users/kulakarnivarunkumar/Desktop/CypressAutomation/cypress/fixtures/ST12Sizer.xlsm';
        cy.convertExcelToJson(filePath).then((jsonData) => {
          cy.log(JSON.stringify(jsonData));
        });
    });   
})