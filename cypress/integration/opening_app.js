describe("Opening App", () => {
  it("Displays saved notes in the list", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="noteText"]').type("New note");
    cy.get('[data-testid="saveButton"]').click();
    cy.reload();
    cy.contains("New note");
  });
});
