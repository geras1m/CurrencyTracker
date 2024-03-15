/// <reference types="cypress" />

const countOfDays = 30;
const inputsData = ['15', '20', '18', '17'];

describe('Timeline modal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/#/timeline');
  });

  it('should show chart', () => {
    cy.get('[data-testid=timeline-chart]').should('be.visible');
  });

  it('should show notify modal when chart has been created', () => {
    cy.get('[data-testid=timeline-random-chart-btn]').click();

    cy.get('[data-testid=timeline-notify-modal]').should('be.visible');
  });

  it('should inputs displays correct value and clear inputs after adding inputs data', () => {
    cy.get('[data-testid=timeline-add-data-btn]').as('timeline-add-data-btn');
    cy.get('@timeline-add-data-btn').should('be.disabled');

    cy.get('[data-testid=timeline-input]').as('input');
    cy.get('@input').eq(0).click();
    cy.get('@input').eq(0).type(inputsData[0]);
    cy.get('@input').eq(0).should('have.value', '15');

    cy.get('@input').eq(1).click();
    cy.get('@input').eq(1).type(inputsData[1]);
    cy.get('@input').eq(1).should('have.value', '20');

    cy.get('@input').eq(2).click();
    cy.get('@input').eq(2).type(inputsData[2]);
    cy.get('@input').eq(2).should('have.value', '18');

    cy.get('@input').eq(3).click();
    cy.get('@input').eq(3).type(inputsData[3]);
    cy.get('@input').eq(3).should('have.value', '17');

    cy.get('@timeline-add-data-btn').should('not.be.disabled');

    cy.get('@timeline-add-data-btn').click();

    cy.get('@input').eq(0).should('have.value', '');
    cy.get('@input').eq(1).should('have.value', '');
    cy.get('@input').eq(2).should('have.value', '');
    cy.get('@input').eq(3).should('have.value', '');

    cy.get('@timeline-add-data-btn').should('be.disabled');
  });

  it('should inputs displays correct value and clear inputs after adding inputs data for 30 days', () => {
    cy.get('[data-testid=timeline-add-data-btn]').as('timeline-add-data-btn');
    cy.get('@timeline-add-data-btn').should('be.disabled');

    for (let day = 0; day < countOfDays; day++) {
      cy.get('[data-testid=timeline-input]').as('input');
      cy.get('@input').eq(0).click();
      cy.get('@input').eq(0).type(inputsData[0]);
      cy.get('@input').eq(0).should('have.value', '15');

      cy.get('@input').eq(1).click();
      cy.get('@input').eq(1).type(inputsData[1]);
      cy.get('@input').eq(1).should('have.value', '20');

      cy.get('@input').eq(2).click();
      cy.get('@input').eq(2).type(inputsData[2]);
      cy.get('@input').eq(2).should('have.value', '18');

      cy.get('@input').eq(3).click();
      cy.get('@input').eq(3).type(inputsData[3]);
      cy.get('@input').eq(3).should('have.value', '17');

      cy.get('@timeline-add-data-btn').should('not.be.disabled');

      cy.get('@timeline-add-data-btn').click();

      cy.get('@input').eq(0).should('have.value', '');
      cy.get('@input').eq(1).should('have.value', '');
      cy.get('@input').eq(2).should('have.value', '');
      cy.get('@input').eq(3).should('have.value', '');

      cy.get('@timeline-add-data-btn').should('be.disabled');

      if (day !== countOfDays - 1) {
        cy.get('[data-testid=create-chart-btn]').should('be.disabled');
      }
    }

    cy.get('[data-testid=create-chart-btn]').should('not.be.disabled');
  });
});
