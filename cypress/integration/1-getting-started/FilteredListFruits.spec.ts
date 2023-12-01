const suggestions=["apple", "banana", "orange", "grape", "kiwi", "mango", "strawberry", "pineapple", "watermelon", "cherry"];

describe('FilteredListFruits Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('renders the Autocomplete component', () => {
    cy.get('#filtered_list_input').should('exist');
    cy.get('#listOfFruits').should('exist');
  });

  it('displays all suggestions initially', () => {
    cy.get('#listOfFruits').should('have.text', 'List: ' + suggestions.join(', '));
  });

  it('filters suggestions based on user input', () => {
    cy.get('#filtered_list_input').type('ban');
    cy.get('#listOfFruits').should('have.text', 'List: banana');
  });

  it('show multiple suggestions that match user input', () => {
      cy.get('#filtered_list_input').type('g');
      cy.get('#listOfFruits').should('have.text', 'List: orange, grape, mango');
  });

  it('clears input and shows all suggestions on input value reset', () => {
    cy.get('#filtered_list_input').type('ban');
    cy.get('#filtered_list_input').clear();
    cy.get('#listOfFruits').should('have.text', 'List: ' + suggestions.join(', '));
  });

  it('handles non-matching input', () => {
    cy.get('#filtered_list_input').type('nonexistent');
    cy.get('#listOfFruits').should('have.text', 'List: ');
  });
});
