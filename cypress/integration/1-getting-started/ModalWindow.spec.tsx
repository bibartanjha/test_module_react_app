describe('ModalWindow Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should open modal on button click', () => {
    cy.get('#modalOpenButton').click();
    cy.get('#modalOverlay').should('be.visible');
    cy.get('#modalContent').should('be.visible');
  });

  it('Should display correct content in the modal', () => {
    cy.get('#modalOpenButton').click();
    cy.get('#modalHeading').should('have.text', 'Modal Content');
    cy.get('#modalParagraph').should('have.text', 'This is the content of the modal window.');
  });

  it('Should close modal on "Close Modal" button click', () => {
    cy.get('#modalOpenButton').click();
    cy.get('#modalContent').should('be.visible');
    cy.get('#modalCloseButton').click(); // Click the "Close Modal" button
    cy.get('#modalOverlay').should('not.exist');
    cy.get('#modalContent').should('not.exist');
  });
});
