describe("empty spec", () => {
  it("Should open the main page", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("Should not login with empty login", () => {
    cy.visit("/");
    cy.login(" ", "123");
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Should not login with empty password", () => {
    cy.visit("/");
    cy.loginOnly("bropet@mail.ru");
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

  it("Add and tag a book as a favorite", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.typing("#title", "Репка");
    cy.typing(
      "#description.form-control",
      "Репка — русская народная сказка, которая знакома каждому ребенку с малых лет. Записанная и опубликованная в 1863 году «Репка» А. Афанасьевым имеет цепочные действия, ясные даже малышу, поэтому можно читать сказку с раннего возраста. Произведение рассказывает о том, как важная работа заставляет взглянуть друг на друга по-другому. Она научит юного читателя не стесняться просить о помощи, помогать тем, кто слабее, и даст понять, что вместе с любой задачей справиться легче."
    );
    cy.typing("#authors", "Русская народная сказка");
    cy.getClick("#favorite");
    cy.getClick("form > .ml-2");
    cy.getClick("h4");
    cy.getAssert(".card-text", "Русская народная сказка");
    cy.getClick(".card-footer > .btn");
  });

  it("Should delete from favorite", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.getClick(
      ".container > div > a:nth-child(10) > .h-100 > .card-footer > .btn"
    );
    cy.getClick("h4");
    cy.getClick(".card-footer > .btn");
    cy.getAssert(".btn > a", "Please add some book to favorit on home page!");
  });
  it("Should add book to favorite from BookList", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.getClick(
      ".container > div > a:nth-child(11) > .h-100 > .card-footer > .btn"
    );
    cy.getClick("h4");
    cy.getAssert(".card-text", "Ники́та Ильи́ч Толсто́й");
    cy.getClick(".card-footer > .btn");
  });
});
