import React from 'react'
import DropDownListName, { removeListName } from './DropDownListNames'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// mutation?!
const listNames = ['a', 'b']
const [listNameA, ListNameB] = listNames
describe('DropDownListName', () => {
  let handleChange
  const setToggle = jest.fn()
  let button
  beforeEach(() => {
    handleChange = jest.fn()
    render(
      <DropDownListName
        listNames={listNames}
        setShoppingListName={handleChange}
        setToggle={setToggle}
      />
    )
    button = screen.getByTestId('addListNameButton')
  })
  it('changes the value via onChange', () => {
    const select = screen.getByTestId('dropdown-select-listnames')
    fireEvent.change(select, { target: { value: ListNameB } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(select.value).toBe(ListNameB)
    fireEvent.change(select, { target: { value: listNameA } })
    expect(handleChange).toHaveBeenCalledTimes(2)
    expect(select.value).toBe(listNameA)
  })
  it('outputs the correct amount of option fields', () => {
    const arrayOfOptions = screen.getAllByTestId('dropdown-option-listnames')
    expect(arrayOfOptions.length).toBe(listNames.length)
  })
  it('triggers togglefunction onButtonClick', () => {
    fireEvent.click(button)
    expect(setToggle).toHaveBeenCalledTimes(1)
  })
})

describe('removeListName function', () => {
  const setListToRemove = jest.fn()
  const setListNames = jest.fn()
  let shoppingListName
  beforeEach(() => {
    shoppingListName = listNameA
    removeListName(listNames, setListToRemove, setListNames, shoppingListName)
  })
  it('triggers setListToRemove & checks for condition', () => {
    expect(setListToRemove).toHaveBeenCalledTimes(1)
    shoppingListName = 'wrong input'
    removeListName(listNames, setListToRemove, setListNames, shoppingListName)
    expect(setListToRemove).toHaveBeenCalledTimes(1)
  })
  it('triggers setListNames function', () => {
    expect(setListNames).toHaveBeenCalledTimes(1)
  })
})
