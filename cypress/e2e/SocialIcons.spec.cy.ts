describe('SocialDetails', () => {
  beforeEach(() => cy.visit("/"));

  it("have correct social links", () =>{
    cy.get("[data-testid='github']").should(
      "have.attr",
      'href',
      "https://github.com/leviyukenn"
    );
  })
  
})