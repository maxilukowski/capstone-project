describe('ListPage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fillOutHeader()
  })
  it('listitems should switch state onClick', () => {
    cy.contains('listItemA').click()
    cy.contains('listItemB').click()
    cy.get('[data-testid="checkedListItems"]').should('have.length', 2)
    cy.contains('listItemA').click()
    cy.contains('listItemB').click()
    cy.get('[data-testid="uncheckedListItems"]').should('have.length', 2)
  })
})
