/// <reference types="cypress" />

beforeEach( () => {

  cy
    .visit(); // add the url of your board

});

it('creating a task', () => {

  // create a new task in the list and spy on request that happens on creating the task. check the status and body of the response using commands .its() and .should() commands

})

it('deleting a list', () => {

  // manually create a new list and then write a test to delete that list. spy on the request that happens on list deletion

})

it('checking off a task', () => {

  // write a test that will check off a task and then spy on the request that happens during this action. try to write some assertions for the request too. use .then() command for this and test status or response body of the request

})