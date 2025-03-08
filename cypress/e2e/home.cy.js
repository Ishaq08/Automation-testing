describe("landing page ", () => {
  //Test setup, or hooks
  before(() => {
    //before do any thing run this block
    // run 1 time
     cy.visit('https://www.saucedemo.com/v1/');
     cy.get('#login-button').should('be.visible');
  })
  beforeEach(() => {
    //run before every test
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should("be.visible");
    cy.get('[data-test="username"]').type("standard_user", { slow: 0.5 });
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should("include", "inventory.html")
  })
  it('Add to cart', () => {
      cy.get(cy.get(':nth-child(1) > .pricebar > .btn_primary').click())
      cy.get(cy.get('.fa-layers-counter').should("contain", 1));
  });
  it ("perform logout", () => {
    cy.get('.bm-burger-button > button').click();
    cy.pause();
    cy.get('#logout_sidebar_link').click();
   cy.get('#login-button').should('be.visible');
  })
  
  it 
  // Test Tear Down
  after(() => { 
    //run at the end of test cases 
    // run 1 time
  });
  afterEach(() => {
    // run at the every end of test
  });
})

//headed test :- saw browser , slow
//headless test :- not show browser , false tests are show in the report , run in terminal or server
  // headless mode run at the end of project
  // fast
// npx cypress run

//cy.wait(5000); // wait for 5 sec , its recommended to use
//cy.reload()   // reload the page
//cy.pause(); // pause the test . when you allow it then move to next step

