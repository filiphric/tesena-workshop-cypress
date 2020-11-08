/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit('/board/25619573353');

});

it('assertion of the text of first task', () => {

  cy
    .get('.Task').then( items => {

      expect(items).to.contain.text('buy milk');

    });

});

it('assertion for texts of all tasks', () => {

  cy
    .get('.Task')
    .then( items => {

      expect(items[0]).to.contain.text('buy milk');
      expect(items[1]).to.contain.text('wash dishes');

    });

});

it('task with the text „buy milk” should be last (solution 1)', () => {

  cy
    .get('.Task')
    .should('have.length', 3)
    .last()
    .should('contain.text', 'buy milk');

});

it('task with the text „buy milk“ should be last (solution 2)', () => {

  cy
    .get('.Task')
    .should( items => {

      expect(items[0]).to.contain.text('wash dishes');
      expect(items[1]).to.contain.text('buy milk');

    });

});

