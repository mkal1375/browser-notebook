describe("Creating a note", () => {
  it("Displays the note in the list", () => {
    cy.visit("http://localhost:3000");

    cy.get('[data-testid="noteText"]').type("New note");

    cy.get('[data-testid="saveButton"]')
      .click()
      .should(() => {
        expect(localStorage.getItem("_$_notes&")).to.include("New note");
      });
    cy.get('[data-testid="noteText"]').should("have.value", "");
    cy.contains("New note");
  });
});
