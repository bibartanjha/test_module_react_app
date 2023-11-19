describe('ArithmeticCalculator Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('performs addition correctly', () => {
    cy.get('[placeholder="First Number"]').type('5');
    cy.get('[placeholder="Second Number"]').type('3');
    cy.get('#arithmeticOperationSelector').select('+');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', '8');
  });

  it('performs subtraction correctly', () => {
    cy.get('[placeholder="First Number"]').type('10');
    cy.get('[placeholder="Second Number"]').type('6');
    cy.get('#arithmeticOperationSelector').select('-');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', '4');
  });

  it('performs multiplication correctly', () => {
    cy.get('[placeholder="First Number"]').type('34');
    cy.get('[placeholder="Second Number"]').type('2');
    cy.get('#arithmeticOperationSelector').select('*');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', '68');
  });

  it('performs division correctly', () => {
    cy.get('[placeholder="First Number"]').type('30');
    cy.get('[placeholder="Second Number"]').type('6');
    cy.get('#arithmeticOperationSelector').select('/');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', '5');
});

  it('displays an error message for invalid input', () => {
    cy.get('[placeholder="First Number"]').type('abc');
    cy.get('[placeholder="Second Number"]').type('3');
    cy.get('#arithmeticOperationSelector').select('+');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', 'Please enter valid numbers.');
  });

  it('displays an error message for division by zero', () => {
    cy.get('[placeholder="First Number"]').type('5');
    cy.get('[placeholder="Second Number"]').type('0');
    cy.get('#arithmeticOperationSelector').select('/');
    cy.get('button').contains('=').click();
    cy.get('[placeholder="Result"]').should('have.value', 'Division by zero is not allowed.');
  });
});
