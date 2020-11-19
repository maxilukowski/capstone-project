Cypress.Commands.add('fillOutHeader', () => {
  cy.get('[data-testid="addListNameButton"]').click()
  cy.get('[placeholder="e.g. farmer`s market"]').type('new list')
  cy.get('[data-testid="addListNameButton"]').click()
})

Cypress.Commands.add('dumpListItems', () => {
  cy.get('[data-testid="shopping-listitem-input"]').type('listItemA{enter}')
  cy.get('[data-testid="shopping-listitem-input"]').type('listItemB{enter}')
  cy.get('[data-testid="shopping-listitem-input"]').type('listItemC{enter}')
})
