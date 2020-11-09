describe('first test', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.fillOut()
  })
  it('test', () => {
    cy.contains('button', 'new')
  })
})
