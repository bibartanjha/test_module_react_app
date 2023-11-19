describe('ButtonWithBorder Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should not have border initially', () => {
    cy.get('#buttonThatHasBorder').should('have.css', 'border', '0px none rgb(0, 0, 0)');
  });

  it('Should show border on hover', () => {
    cy.get('#buttonThatHasBorder').trigger('mouseover');
    cy.get('#buttonThatHasBorder').should('have.css', 'border', '5px solid rgb(128, 0, 128)'); //purple is default color
  });

  it('Should remove border on mouse leave', () => {
    cy.get('#buttonThatHasBorder').trigger('mouseover');
    cy.get('#buttonThatHasBorder').should('have.css', 'border', '5px solid rgb(128, 0, 128)');
    cy.get('#buttonThatHasBorder').trigger('mouseout');
    cy.get('#buttonThatHasBorder').should('have.css', 'border', '0px none rgb(0, 0, 0)');
  });

  it('Should change border color on color selection', () => {
    const selectedColor = 'green';
    cy.get('#colorPicker').select(selectedColor);
    cy.get('#buttonThatHasBorder').trigger('mouseover');
    cy.get('#buttonThatHasBorder').should('have.css', 'border', '5px solid rgb(0, 128, 0)'); //rgb for green is 0,128,0
  });
});
