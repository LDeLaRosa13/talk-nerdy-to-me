describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/sockjs-node/*", {
      statusCode: 200,
    });
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 200,
      fixture: "responseOne",
    }).as("r1");
    cy.visit("http://localhost:3000");
  });
  it("allows user to navigate pages", () => {
    cy.wait("@r1");
    cy.get("p").should("contain", "This is response One");
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 200,
      fixture: "responseTwo",
    }).as("r2");
    cy.get("button")
      .contains("Add To Favorites")
      .click();
    cy.wait("@r2");
    cy.get("p").should("contain", "This is response Two");
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 200,
      fixture: "responseThree",
    }).as("r3");
    cy.get("button")
      .contains("Add To Favorites")
      .click();
    cy.wait("@r3");
    cy.get("p").should("contain", "This is response Three");
    cy.get("button")
      .contains("Favorites")
      .click();
    cy.get(".fave-card")
      .eq(0)
      .should("contain", "This is response One");
    cy.get(".fave-card")
      .eq(1)
      .should("contain", "This is response Two");
    cy.get("button")
      .contains("Remove")
      .click();
    cy.get(".fave-card").should("contain", "This is response Two");
    cy.get("button")
      .contains("Remove")
      .click();
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 200,
      fixture: "responseFour",
    }).as("r4");
    cy.get("button")
      .contains("Home")
      .click();
    cy.get("button")
      .contains("Next")
      .click();
    cy.wait("@r4");
    cy.get("p").should("contain", "This is response Four");
  });
  it("should show error on fetch fail", () => {
    cy.wait("@r1");
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 400,
    }).as("fail");
    cy.get("button")
      .contains("Next")
      .click();
    cy.wait("@fail");
    cy.get("p").should("contain", "Sorry! We could not find any phrases");
  });
  it("should display error button when visiting a wild url", () => {
    cy.intercept("GET", "https://techy-api.vercel.app/api/json", {
      statusCode: 404,
    })
      .visit("http://localhost:3000/nonsense")
      .url()
      .should("eq", "http://localhost:3000/nonsense")
      .get(".error-button")
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
