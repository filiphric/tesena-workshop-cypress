/// <reference types="cypress" />

beforeEach( () => {

  cy
    .server()

  cy
    .route('/api/boards')
    .as('boardList')

  cy
    .visit('/');

});

it.only('empty board list', () => {

})

it('error message while creating board', () => {

  cy
    .get('#new-board')
    .click()

  cy
    .get('.board_addBoard')
    .type('new garden')

  cy
    .contains('Save')
    .click()

})