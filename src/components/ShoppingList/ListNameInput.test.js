import React from 'react'
import ListNameInput, { submitHandler } from './ListNameInput'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ListNameInput.js', () => {
  let button
  let inputField
  let input = 'testString'
  const setInput = jest.fn()
  beforeEach(() => {
    render(<ListNameInput setInput={setInput} input={input} />)
    button = screen.getByText('add')
    inputField = screen.getByPlaceholderText('e.g. farmer`s market')
  })
  it('renders an inputField and the button', () => {
    expect(button).toBeInTheDocument()
    expect(inputField).toBeInTheDocument()
  })
  it('the onChange function gets called', () => {
    fireEvent.change(inputField, { target: { value: 'suppe' } })
    expect(setInput).toHaveBeenCalledTimes(1)
  })
  describe('formSubmit function', () => {
    let event
    let setShoppingListName
    let setListNames
    let listNames
    let setToggle
    let toggle
    let input
    beforeEach(() => {
      event = {
        target: {
          value: 'test',
        },
        preventDefault: () => {},
      }
      setShoppingListName = jest.fn()
      setListNames = jest.fn()
      listNames = ['listNameA', 'listNameB']
      setToggle = jest.fn()
      toggle = true
      input = 'testString'

      submitHandler(
        event,
        setShoppingListName,
        setListNames,
        listNames,
        setToggle,
        toggle,
        input
      )
    })
    it('triggers setShoppingListName', () => {
      expect(setShoppingListName).toHaveBeenCalledTimes(1)
    })
    it('triggers setListNames', () => {
      expect(setListNames).toHaveBeenCalledTimes(1)
    })
    it('triggers setToggle', () => {
      expect(setToggle).toHaveBeenCalledTimes(1)
    })
    it('listNames is available', () => {
      expect(listNames).not.toBeNull()
    })
  })
})
