import React from 'react'
import ListNameEdit0r from './ListNameEdit0r'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ListNameEditt0r.js', () => {
  let selectField
  let newListButton
  let DeleteListItemsButton
  let shoppingListName
  const listNames = ['listNameA', 'listNameB']
  beforeEach(() => {
    const setShoppingListName = jest.fn()
    shoppingListName = 'listNameA'
    localStorage.setItem('shoppingListNames', JSON.stringify(listNames))
    render(
      <ListNameEdit0r
        setShoppingListName={setShoppingListName}
        shoppingListName={shoppingListName}
      />
    )
    selectField = screen.getByTestId('dropdown-select-listnames')
    newListButton = screen.getByText('new')
    DeleteListItemsButton = screen.getByText('del')
  })
  it('displays elements on initial render', () => {
    expect(selectField).toBeInTheDocument()
    expect(newListButton).toBeInTheDocument()
    expect(DeleteListItemsButton).toBeInTheDocument()
  })
  it('toggles to input when buttonclick', () => {
    fireEvent.click(newListButton)
    const input = screen.getByPlaceholderText('e.g. farmer`s market')
    expect(input).toBeInTheDocument()
    expect(DeleteListItemsButton).not.toBeInTheDocument()
  })
  it('reads and writes to localStorage', () => {
    const option1 = screen.getByText('listNameA')
    const option2 = screen.getByText('listNameB')
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()
    fireEvent.click(newListButton)
    const addButton = screen.getByText('add')
    const input = screen.getByPlaceholderText('e.g. farmer`s market')
    fireEvent.change(input, { target: { value: 'listNameC' } })
    fireEvent.click(addButton)
    expect(JSON.parse(localStorage.getItem('shoppingListNames'))).toHaveLength(
      3
    )
  })
  // fertigmachen
  it('removes key from localStorage', () => {
    fireEvent.click(DeleteListItemsButton)
  })
})
