

describe('assertions',()=> {
    it('Implicit assertion',()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.url().should('include','parabank')
        .and('include','parasoft.com')
        cy.title().should('contain','Welcome')
        cy.get('span.services').should('be.visible')
        cy.xpath("//a").should('have.length','33')
    })
    it('Explicit assertion',()=>{
        cy.visit("https://aws-stage.blnsoftware.com/")
        cy.get('#login').type('varun.kulkarni@ticketnetwork.com')
        cy.get('#password').type('123456789Ab@')
        cy.get('#submit_0').click()
            let exp='Welcome Varun Kulakarni';
        cy.get('.logout').then((x)=>{
            let act=x.text()
        
        // BDD Assertions
         expect(act).to.contains(exp)

        //TDD Assertions
            assert.notEqual(act,exp)
        })
    })
})