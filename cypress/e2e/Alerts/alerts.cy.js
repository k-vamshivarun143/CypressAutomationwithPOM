describe('Javascript Alerts' , () => {
    // sample Alert with some text and Ok Button
    // Alert window was Automatically closed by Cypress
    it.skip('Sample Alert' , () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("I am a JS Alert")
        })
        cy.get('#result').should('have.text',"You successfully clicked an alert")
    })
    //2. confirmation Alert
    // By default Cypress uses Ok button and closes the Alert
    it('Confirmation Alert using Ok button', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
    })
        cy.get('#result').should('have.text',"You clicked: Ok")
    })
    it('Confirmation Alert using cancel button', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on('window:c',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
    })
        cy.on('window:confirm',() => false);
        cy.get('#result').should('have.text',"You clicked: Cancel")
    })
    //3. JavaScript Prompt Alert
    // By default Cypress uses Ok button and closes the Alert
    it.only('Prompt Alert using', () =>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window().then((win) => {    // cy.window states window is open & 'win' states that variable
            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click();
        cy.on('window:prompt',(t)=>{
            expect(t).to.contains("I am a JS Confirm")
    })
        // cy.on('window:prompt',() => false);
        cy.get('#result').should('have.text',"You entered: welcome")
    })
    //4. JavaScript Prompt Alert
    // By default Cypress uses Ok button and closes the Alert
    it.only('Authentication Alert using', () =>{
        // Aproach 1 - by passing data through json 
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {usernamer:"admin",password:"password"}});
        // Approach 2 - By passing directly username and password in URL as shown below
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain',"Congratulations");
    })
})
// https://admin:admin@the-internet.herokuapp.com/basic_auth