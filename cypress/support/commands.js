Cypress.Commands.add('fillOutHeader', () => {
  cy.contains('button', 'new').click()
  cy.get('[placeholder="e.g. farmer`s market"]').type('new list')
  cy.contains('add').click()
  cy.get('[data-testid="shopping-listitem-input"]').type('listItemA{enter}')
  cy.get('[data-testid="shopping-listitem-input"]').type('listItemB')
  cy.get('[data-testid="shopping-listitem-form-button"]').click()
})
