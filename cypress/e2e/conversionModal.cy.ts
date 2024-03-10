/// <reference types="cypress" />

describe('Conversion modal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show list of currency cards', () => {
    cy.get('[data-testid=currency-card]', { timeout: 3000 }).should('be.visible').should('have.length', 10);
  });

  it('should open the currency modal by clicking on a currency card and close it', () => {
    cy.contains('Belarusian ruble').click();

    cy.get('[data-testid=currency-modal]').as('currency-modal');
    cy.get('@currency-modal', { timeout: 3000 }).should('be.visible');

    cy.get('[data-testid=currency-modal-input]').should('be.visible');
    cy.get('[data-testid=currency-title]').should('be.visible');

    cy.contains('Close modal').should('be.visible').click();
    cy.get('@currency-modal', { timeout: 3000 }).should('not.exist');
  });

  it('should change current currency', () => {
    cy.contains('Belarusian ruble').click();

    cy.get('[data-testid=modal-current-currency]').as('current-currency');
    cy.get('@current-currency').click();

    cy.get('[data-testid=modal-current-currency-item]').as('current-currency-item');
    cy.get('@current-currency-item').should('be.visible');

    cy.get('@current-currency-item').eq(1).click();
    cy.get('@current-currency').contains('EUR');
  });
});
