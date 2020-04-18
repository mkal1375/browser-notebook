describe("Deleting a note", () => {
  it("Delete the note by clicking on delete button", () => {
    cy.visit("http://localhost:3000");
    // create note
    cy.get('[data-testid="noteText"]').type("New note");
    cy.get('[data-testid="saveButton"]').click();
    // delete note
    cy.get('[data-testid="note-delete-button"]')
      .click()
      .and(() => {
        expect(localStorage.getItem("_$_notes&")).to.not.includes("New note");
      });
    cy.contains("New note").should("not.exist");
  });
  it("Delete the note by remove all letters of note", () => {
    cy.visit("http://localhost:3000");
    // create note
    cy.get('[data-testid="noteText"]').type("New note");
    cy.get('[data-testid="saveButton"]').click();
    // delete note
    cy.get('[data-testid="note_text"]').clear();
    cy.contains("New note").should("not.exist");
  });
});
