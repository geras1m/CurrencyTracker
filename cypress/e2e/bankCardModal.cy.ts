/// <reference types="cypress" />

describe('Bank card modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/bank_card');
  });

  it('should show a bank map and a search input', () => {
    cy.get('[data-testid=bank-map]').should('be.visible');
    cy.get('[data-testid=bank-search]').should('be.visible');
  });

  it('should open the elastic search after typing value in the input with right options of elastic search', () => {
    cy.get('[data-testid=bank-search]').as('search');

    cy.get('@search').click();
    cy.get('@search').type('usd');

    cy.get('[data-testid=elastic-search]').as('elastic-search');
    cy.get('@elastic-search').should('be.visible');

    cy.get('@elastic-search').should('be.visible');
    cy.get('@elastic-search').contains('USD');

    cy.get('@search').click();
    cy.get('@search').clear();
    cy.get('@search').type('incorrect value');

    cy.get('@elastic-search').contains('Not found');
  });
});
