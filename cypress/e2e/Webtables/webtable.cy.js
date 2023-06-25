
describe('handling Webtables' ,()=> {
    // using each method to get row data and within that getting td and from each td getting the value of it
    it('Webtable data' , ()=>{
        cy.visit("https://demo.guru99.com/test/web-table-element.php");
        cy.get('tbody > tr')
        .each(($r,index,$rows)=>{
            cy.wrap($r).within(()=>{
                cy.get('td').each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
})