describe('Iframe examples',()=> {
    it('Calling Iframe from commands',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr')
        .clear().type("welcome to Iframe {cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })
    it.only('calling cypressiframe by plugin', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr');
        cy.iframe('#mce_0_ifr').clear().type("Welcome to Iframe added via Plugin {cmd+a}");
        cy.get("[aria-label='Bold']").click();
    })
})