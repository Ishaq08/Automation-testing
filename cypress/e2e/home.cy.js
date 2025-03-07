describe("landing page ", () => {
  it("verify if landing page is reacheable", () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should("be.visible");
  })
  it("Login with valid credentials", () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#login-button').should("be.visible");
    cy.get('[data-test="username"]').type("standard_user", { slow: 0.5 });
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('#login-button').click();
    cy.url().should("include", "inventory.html")
 })
})
