/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('„buy milk“ is in the list', () => {

  cy
    .contains('mlieko')

  cy
    .get('[data-id="81447763519"]')
    .contains('mlieko')

});

it('„buy milk“ is in the other list', () => {

  cy
    .get('[data-id="81447763519"]')
    .find('.Task')
    .eq(2)
    .should('contain.text', 'buy milk')

});

it('there’s only one task in second list', () => {

  cy
    .get('[data-id="81447763519"] .Task')
    .should('have.length', 2)

});