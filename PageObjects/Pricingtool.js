class Pricingtool {
    // Selectors
    Pricingtooltab = "ul#loan_menu>li>a[href='/lender_employee/pricing_tool/loan_calculator']";   //CSS
    LoanProgram="select#loan_program";  //CSS 
    Useoffunds="select#use_of_funds";  // CSS
    PropertyType="select#property_type"; // CSS
    importSizer="button[data-role='import-sizer']"; // CSS 
    importinput="input[type='file']"; // CSS for Input field

    importsizerfile(filename){
        // cy.UploadFile(this.importSizer,filename);
        cy.upload(filename,this.importinput);
    }
    PricingtoolTabclick(){
        cy.get(this.Pricingtooltab).click();
    }
    SelectLoanProgram(value){
        cy.get(this.LoanProgram).select(value ,{force:true});
    }
    SelectuseofFunds(UOFValue){
        cy.get(this.Useoffunds).select(UOFValue,{force:true});
    }
    SelectPropertyType(Propertyvalue){
        cy.get(this.PropertyType).select(Propertyvalue,{force:true});
    }
    executor(locator){
        
    }
}
export default new Pricingtool();