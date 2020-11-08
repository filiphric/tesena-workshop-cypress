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

it('loads two boards from fixture', () => {

  // use the file twoBoards.json from fixtures folder.

})

it('loads a starred board', () => {

  // change data in twoBoards.json fixture so that you will load one board that is in „starred list

})

it('error while creating task', () => {

  // add another .route() coommand and spy on api call that fires when creating a new task. stub an error response and write a test for the error message that appears

})