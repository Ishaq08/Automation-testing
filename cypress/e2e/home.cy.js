describe('Landing Page', () => {
  // Run once before all tests
  before(function () {
    cy.fixture('user.json').as('myUser');
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should('be.visible');
  });

  // Run before each test case
  beforeEach(function () {
    cy.visit('https://www.saucedemo.com/v1/');

    // Ensure fixture data is loaded before login
    cy.get('myUser').then((user) => {
      cy.get('[data-test="username"]').type(user.validUser.userName);
      cy.get('[data-test="password"]').type(user.validUser.password);
      cy.get('#login-button').click();
      cy.url().should('include', 'inventory.html');
    });
  });

  it('Perform Login', function () {
    cy.url().should('include', 'inventory.html');
  });

  it('Add to cart', function () {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();
    cy.get('.fa-layers-counter').should('contain', 1);
  });

  it('Perform Logout', function () {
    cy.get('.bm-burger-button > button').click();
    cy.pause();
    cy.get('#logout_sidebar_link').click();
    cy.get('#login-button').should('be.visible');
  });

  // Run once after all test cases
  after(() => {
    cy.log('All tests completed!');
  });

  // Run after each test case
  afterEach(() => {
    cy.log('Test case completed!');
  });
});
