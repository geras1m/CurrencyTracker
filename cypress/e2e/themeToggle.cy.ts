/// <reference types="cypress" />

describe('Theme toggle', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible the toggle and the toggle element', () => {
    cy.get('[data-testid=toggle]').should('be.visible');
    cy.get('[data-testid=toggle-element]').should('be.visible');
  });

  it('should the toggle element moves by clicking the toggle', () => {
    cy.get('[data-testid=toggle]').as('toggle');
    cy.get('[data-testid=toggle-element]').as('toggle-element');

    cy.get('@toggle').first().click();
    cy.get('@toggle-element').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 22, 0)');

    cy.get('@toggle').first().click();
    cy.get('@toggle-element').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 0, 0)');
  });

  it('should the theme changes by clicking the toggle', () => {
    cy.get('body').as('body');

    cy.get('@body').should('have.css', 'background-color', 'rgb(255, 255, 255)');

    cy.get('[data-testid=toggle]').first().click();

    cy.get('@body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
  });
});
