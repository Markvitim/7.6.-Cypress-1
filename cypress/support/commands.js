Cypress.Commands.add("login", (login, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("loginOnly", (login) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(login);
  cy.contains("Submit").click();
});

Cypress.Commands.add("typing", (selector, text) => {
  cy.get(selector).type(text);
});

Cypress.Commands.add("getClick", (selector) => {
  cy.get(selector).click();
});

Cypress.Commands.add("getAssert", (selector, text) => {
  cy.get(selector).contains(text);
});
