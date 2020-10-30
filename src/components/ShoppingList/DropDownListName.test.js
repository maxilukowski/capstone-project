import React from 'react'
import DropDownListName from './DropDownListNames'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('DropDownListName', () => {
  const listNames = ['a', 'b']
  const [listNameA, ListNameB] = listNames
  let handleChange
  beforeEach(() => {
    handleChange = jest.fn()
    render(
      <DropDownListName
        listNames={listNames}
        setShoppingListName={handleChange}
      />
    )
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
})
