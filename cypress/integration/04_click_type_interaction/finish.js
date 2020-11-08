/// <reference types="cypress" />

it('creating new board', () => {

  cy
    .visit('/');

  cy
    .get('#new-board')
    .click();

  cy
    .get('#new-board input')
    .type('new board{enter}');

});

it('marking a board as starred', () => {

  cy
    .visit('/');

  cy
    .get('.Star')
    .click({force: true})

});

it('checking off a task', () => {

  cy
    .visit('/board/82425010767');

  cy
    .get('.Task input')
    .check();

});