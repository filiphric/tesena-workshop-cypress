/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('assertion of the text of first task', () => {

  cy
    .get('.Task')
    .should('contain.text', 'buy milk')

});

it('assertion for texts of all tasks', () => {

});

it('task with the text „buy milk“ should be last (solution 1)', () => {

  cy
    .get('.Task')
    .last()
    .should('contain.text', 'syr');

});

it('task with the text „buy milk“ should be last (solution 2)', () => {

});

