/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/');

});

it.only('loading list of boards', () => {

  cy
    .get('.board_item')
    .should('have.length', 0)

})

it('creating a new board', () => {

  cy
    .get('#new-board')
    .click()

  cy
    .get('.board_addBoard')
    .type('nova zahrada')

  cy
    .contains('Save')
    .click()

})