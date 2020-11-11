describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('adds and deletes lists', () => {
    cy.contains('new').click()
    cy.get('[placeholder="e.g. farmer`s market"]').type('new list')
    cy.contains('add').click()
    cy.contains('shopping list')
    cy.contains('new list')
    cy.reload()
    cy.get('option').should('have.length', 2)
    cy.contains('del').click()
    cy.get('option').should('have.length', 1)
  })
  it('adds list items via button || keydown', () => {
    cy.get('[data-testid="shopping-listitem-input"]').type('listItemA{enter}')
    cy.get('[data-testid="shopping-listitem-input"]').type('listItemB')
    cy.get('[data-testid="shopping-listitem-form-button"]').click()
    cy.reload()
    cy.get('[data-testid="shoppingListItem"]').should('have.length', 2)
  })
})
