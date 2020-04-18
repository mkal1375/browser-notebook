describe("Editing the note", () => {
  it("edit the note", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="noteText"]').type("New note");
    cy.get('[data-testid="saveButton"]').click();
    cy.get('[data-testid="note"]').type("New note edited!");
    cy.get('[data-testid="noteText"]')
      .click()
      .and(() => {
        expect(localStorage.getItem("_$_notes&")).to.includes(
          "New note edited!"
        );
      });
    cy.contains("New note edited!");
  });
});
