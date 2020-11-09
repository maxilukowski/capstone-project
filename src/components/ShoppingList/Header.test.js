import React from 'react'
import Header from './Header'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Header.js', () => {
  let selectField
  let deleteButton
  let addButton
  beforeEach(() => {
    render(<Header />)
    selectField = screen.getByText('shopping list')
    deleteButton = screen.getByText('del')
    addButton = screen.getByText('new')
  })
  test('if components are rendered', () => {
    expect(selectField).toBeInTheDocument()
    expect(deleteButton).toBeInTheDocument()
    expect(addButton).toBeInTheDocument()
  })
})