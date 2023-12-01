describe('ColorChangingText Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('Should have initial text color black', () => {
    cy.get('#colorChangingText').should('have.css', 'color', 'rgb(0, 0, 0)');
  });

  it('Should change text color on button click', () => {
    cy.get('#ChangeTextColorButton').click();
    cy.get('#colorChangingText').should('have.css', 'color').and('not.eq', 'rgb(0, 0, 0)');
  });

  it('Should cycle through colors on multiple button clicks', () => {
    const colorRBGBalues = ['rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(0, 0, 0)'];
    colorRBGBalues.forEach((color) => {
      cy.get('#ChangeTextColorButton').click();
      cy.get('#colorChangingText').should('have.css', 'color', color);
    });
  });

  it('Should reset color after cycling through all colors', () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'black'];
    colors.forEach(() => {
      cy.get('#ChangeTextColorButton').click();
    });
    cy.get('#colorChangingText').should('have.css', 'color', 'rgb(0, 0, 0)');
  });
});
