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
  let handleClick
  let renderedShoppingListItems
  beforeEach(() => {
    handleClick = jest.fn()
    render(
      <ShoppingList
        shoppingListItems={shoppingListItems}
        onClick={handleClick}
      />
    )
    screen.debug()
    renderedShoppingListItems = screen.getAllByText('a')
  })
  it('displays the expected amount of children', () => {
    expect(renderedShoppingListItems.length).toBe(amount)
  })
  it('reacts on a click event', () => {
    /* shoppingListItems.map((item) => {
      fireEvent.click(screen.getByText(item.title))
    }) */
    renderedShoppingListItems.map((item) => {
      fireEvent.click(item)
    })
    expect(handleClick).toHaveBeenCalledTimes(amount)
  })
})
