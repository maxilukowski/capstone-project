describe('first test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
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
})
