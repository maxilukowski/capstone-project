import React from 'react'
import ShoppingList from './ShoppingList'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ShoppingList.js', () => {
  const shoppingListItems = [
    {
      title: 'a',
      id: 1,
    },
    {
      title: 'a',
      id: 2,
    },
  ]
  const amount = shoppingListItems.length
  let renderedShoppingListItems
  beforeEach(() => {
    render(<ShoppingList shoppingListItems={shoppingListItems} />)
    renderedShoppingListItems = screen.getAllByText('a')
    screen.debug()
  })
  it('displays the expected amount of children', () => {
    expect(renderedShoppingListItems.length).toBe(amount)
  })
})
