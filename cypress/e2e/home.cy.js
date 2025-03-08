describe("landing page ", () => {
  //Test setup, or hooks
  before(function () {
    //before do any thing run this block
    // run 1 time
    cy.fixture("user.json").as("myUser")
     cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should('be.visible');

    
  })
  beforeEach(function () {
    //run before every test
  })
  it.only("perform login" ,function () {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should("be.visible");
    cy.get('[data-test="username"]').type(this.myUser.validUser.userName);
    cy.get('[data-test="password"]').type(this.myUser.validUser.password);
    cy.get('#login-button').click();
    cy.url().should("include", "inventory.html")
    
  })
  it('Add to cart', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
      cy.get('.fa-layers-counter').should('contain', 1);
  });
  it.only("perform logout", () => {
    cy.get('.bm-burger-button > button').click();
   // cy.pause();
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

//headed test :- saw browser
      // npx cypress open
      // slower the headless
//headless test :- not show browser , false tests are show in the report , run in terminal or server
      // headless mode run at the end of project
      // fast
      // npx cypress run

//cy.wait(5000); // wait for 5 sec , its recommended to use
//cy.reload()   // reload the page
//cy.pause(); // pause the test . when you allow it then move to next step


//fixtures
// in fixtures folder we write test data
// test data is data which is used in testing
// data driven testing: data comes from other soures
// when we write some data in fixture , and now we need to add or change data , so we samply change in the fixtures , and that is also data driven testing
// where we use fixtures , the functoin is normal function
