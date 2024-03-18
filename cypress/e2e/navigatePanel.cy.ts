/// <reference types="cypress" />
describe('Navigate panel', () => {
  it('should redirect to timeline page by clicking on nav link Timeline', () => {
    cy.visit('/');
    cy.contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('should redirect to bank card page by clicking on nav link Bank card', () => {
    cy.visit('/');
    cy.contains('Bank card').click();
    cy.url().should('include', '/bank_card');
  });

  it('should redirect to contato page by clicking on nav link Contato', () => {
    cy.visit('/');
    cy.contains('Timeline').click();
    cy.url().should('include', '/timeline');
  });

  it('should redirect to home page by clicking on nav link Contato', () => {
    cy.visit('/');
    cy.contains('Contato').click();
    cy.url().should('include', '/contacts');
  });

  it('should redirect to not found page when path is non-existent', () => {
    cy.visit('http://localhost:3000/#/non-existent');
    cy.get('[data-testid=Not-found-image]').should('be.visible');
  });
});
