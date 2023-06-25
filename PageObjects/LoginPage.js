class LoginPage{
    username="#login";
    Password="#password";
    Loginbtn=".submit > input[type='submit']";
    validation="div[class='container_15 full-width'] h2";
    Logout='.logout';
    UsersTab="li > a[href='/members/su-access']";
    LendersinUsers="li > a[href='#lenders']";
    Searchlender="(//div[@tabulator-field='company']//input)[2]"  //xpath

    Enterusername(uname){
        cy.get(this.username).type(uname);
    }
    Enterpassword(pass){
        cy.get(this.Password).type(pass);
    }
    Clicklogin(){
        cy.get(this.Loginbtn).click();
    }
    // used to validate the CC Login
    validateLogin(){
        let welcometext;
        cy.get(this.validation).then((intext)=>{
            welcometext=intext.text()
        cy.log(welcometext);
         expect(welcometext).to.contains('Welcome Varun Kulakarni');
        })
    }
    // used to validate Lender LO Login
    validateLenderLogin(){
        let welcometext;
        cy.get(this.Logout).then((intext)=>{
            welcometext=intext.text()
        cy.log(welcometext);
         expect(welcometext).to.contains('Welcome Testers Loan Officer');
        })
    }
    ClickOnUsersTab(){
        cy.get(this.UsersTab).click();
    }
}
export default new LoginPage();
