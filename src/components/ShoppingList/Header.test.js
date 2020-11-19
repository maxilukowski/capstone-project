import React from 'react'
import Header from './Header'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Header.js', () => {
  let selectField
  let DeleteListNameButton
  let addButton
  beforeEach(() => {
    render(<Header />)
    screen.debug()
    selectField = screen.getByText('shopping list')
    DeleteListNameButton = screen.getByTestId('deleteListNameButton')
    addButton = screen.getByTestId('addListNameButton')
  })
  test('if components are rendered', () => {
    expect(selectField).toBeInTheDocument()
    expect(DeleteListNameButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })
})
