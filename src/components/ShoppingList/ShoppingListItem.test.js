import React from 'react'
import ShoppingListItem from './shoppingListItem'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ShoppingListItem.js', () => {
  const listItem = { title: 'banana' }
  let handleClick
  let renderedListItem
  beforeEach(() => {
    handleClick = jest.fn()
    render(<ShoppingListItem onClick={handleClick} listItem={listItem} />)
    renderedListItem = screen.getByText('banana')
    screen.debug()
  })
  it('calls onClick prop when clicked', () => {
    fireEvent.click(renderedListItem)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  it('the checkbox checks and unchecks onClick', () => {
    const checkBox = screen.getByTestId('shopping-list-item-checker')
    expect(checkBox.checked).toBe(false)
    fireEvent.click(checkBox)
    expect(checkBox.checked).toBe(true)
    fireEvent.click(checkBox)
    expect(checkBox.checked).toBe(false)
  })
})
