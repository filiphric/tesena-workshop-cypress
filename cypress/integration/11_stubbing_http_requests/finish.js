beforeEach( () => {

  cy
    .server()

  cy
    .route({
      method: 'POST',
      url: '/api/boards',
      response: [],
      status: 500
    })
    .as('createBoard')

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
    .type('new project')

  cy
    .contains('Save')
    .click()

  cy
    .get('#errorMessage')
    .should('be.visible')
    .should('contain.text', 'Oh no! New board could not be created.')

})