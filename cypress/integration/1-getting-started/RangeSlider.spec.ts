describe('RangeSlider Component', () => {
  beforeEach(() => {
   cy.visit('http://localhost:4200');
  });

  it('should initially display the default range', () => {
    cy.get('label').should('have.text', 'Selected Range: 0 - 100');
  });

  it('should update the range when moving the left thumb', () => {
    cy.get('.rc-slider-handle').eq(0).trigger('mousedown', { which: 1, pageX: 120, force: true });
    cy.get('.rc-slider-handle').eq(0).trigger('mousemove', { which: 1, pageX: 220, force: true });
    cy.get('.rc-slider-handle').eq(0).trigger('mouseup', { force: true });

    cy.get('label').should('have.text', 'Selected Range: 26 - 100');
  });

  it('should update the range when moving the right thumb', () => {
    cy.get('.rc-slider-handle').eq(1).trigger('mousedown', { which: 1, pageX: 320, force: true });
    cy.get('.rc-slider-handle').eq(1).trigger('mousemove', { which: 1, pageX: 270, force: true });
    cy.get('.rc-slider-handle').eq(1).trigger('mouseup', { force: true });

    cy.get('label').should('have.text', 'Selected Range: 0 - 87');
  });

});
