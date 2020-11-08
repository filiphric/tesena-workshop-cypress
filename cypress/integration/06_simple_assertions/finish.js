/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353')

})

it('creates a task', () => {

  cy
    .contains('Add a card')
    .click();

  cy
    .get('[data-id="newTaskTitle"]')
    .type('buy milk{enter}')

  cy
    .get('.Task')
    .should('be.visible')


})

it('add another task', () => {

  cy
    .contains('Add a card')
    .click();

  cy
    .get('[data-id="newTaskTitle"]')
    .type('wash dishes{enter}')

  cy
    .get('.Task')
    .should('have.length', 2)

})

it('checks off task', () => {

  cy
    .get('.Task input')
    .check()

  cy
    .get('.Task label')
    .should('have.class', 'completed')

    cy
    .get('.Task input')
    .should('be.checked')

})

it('has proper list name', () => {
  cy
    .get('.boardDetail_title')
    .should('have.value', 'new board')

})