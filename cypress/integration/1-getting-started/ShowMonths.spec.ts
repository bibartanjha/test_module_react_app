describe('ShowMonths Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/')
  });

  it('should display the current month', () => {
    cy.get('div').contains('Current Month: January').should('be.visible');
  });

  it('should navigate to the next month', () => {
    cy.get('button').contains('Next').click();
    cy.get('div').contains('Current Month: February').should('be.visible');
  });

  it('should navigate to the previous month', () => {
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Previous').click();
    cy.get('div').contains('Current Month: April').should('be.visible');
  });

  it('should start the year over', () => {
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Start the Year Over').should('not.exist');
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Start the Year Over').should('exist');
    cy.get('button').contains('Start the Year Over').click();
    cy.get('div').contains('Current Month: January').should('be.visible');
    cy.get('button').contains('Start the Year Over').should('not.exist');
  });

  it('should disable the Previous button on the first month', () => {
    cy.get('button').contains('Previous').should('be.disabled');
  });

  it('should disable the Next button on the last month', () => {
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').click();
    cy.get('button').contains('Next').should('be.disabled');
  });
});
