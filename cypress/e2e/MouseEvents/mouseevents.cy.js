describe('Mouse events', ()=>{
    before('invoke website',()=>{
        cy.visit("https://demo.opencart.com");
    })
    it('Mouse hover',()=>{
        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover');
    //    cy.get('').rightclick(); // this is other method to use right click
    })
    it.only('Double click',()=>{
        cy.xpath("//a[normalize-space()='Desktops']").trigger('dblclick');  
    //    cy.get('').dblclick();   // this method as well used
    })
    it('Right Click',()=>{
        cy.get('').trigger('contextmenu');
        //    cy.get('').rightclick(); // this is other method to use right click
    })
})