describe("Create Event Test Suit", () => {
  beforeEach(() => {
    cy.session("signed-in", () => {
      cy.signIn();
    });
  });

  it("visits the create event page", () => {
    cy.visit("/events/create", {
      failOnStatusCode: false,
    });
  });
});
