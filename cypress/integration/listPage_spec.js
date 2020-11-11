describe('ListPage', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fillOutHeader()
    cy.dumpListItems()
  })
  it('listitems should switch state onClick', () => {
    cy.contains('listItemA').click()
    cy.contains('listItemB').click()
    cy.get('[data-testid="checkedListItems"]').should('have.length', 2)
    cy.contains('listItemA').click()
    cy.contains('listItemB').click()
    cy.get('[data-testid="uncheckedListItems"]').should('have.length', 3)
  })
  it('newly created list is empty while old remains', () => {
    cy.get('[data-testid="dropdown-select-listnames"]').select('shopping list')
    cy.get('[data-testid="checkedListItems"]').should('not.exist')
    cy.get('[data-testid="uncheckedListItems"]').should('not.exist')
    cy.get('[data-testid="dropdown-select-listnames"]').select('new list')
    cy.get('[data-testid="uncheckedListItems"]').should('have.length', 3)
  })
  it('deletes all listItems onButtonClick', () => {
    cy.get('[data-testid="uncheckedListItems"]').should('have.length', 3)
    cy.get('[data-testid="deleteAllListItems"]').click()
    cy.get('[data-testid="uncheckedListItems"]').should('not.exist')
  })
})
