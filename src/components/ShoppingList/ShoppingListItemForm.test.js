import React from 'react'
import ShoppingListItemForm, { formSubmit } from './ShoppingListItemForm'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('ShoppingListItemForm.js', () => {
  describe('testing formfields', () => {
    const testString = 'text'
    let input
    let button
    let handleSubmit
    let form
    beforeEach(() => {
      handleSubmit = jest.fn()
      render(<ShoppingListItemForm onSubmit={handleSubmit} />)
      input = screen.getByPlaceholderText('I need..')
      button = screen.getByTestId('shopping-listitem-form-button')
      form = screen.getByTestId('shoppingListItemForm')
    })
    test('inputfield & button should be in the document', () => {
      expect(input).toBeInTheDocument()
      expect(button).toBeInTheDocument()
    })
    test('inputfield should accept text', () => {
      expect(input.value).toBe('')
      fireEvent.change(input, { target: { value: testString } })
      expect(input.value).toBe(testString)
    })
    test('should submit form on buttonClick', () => {
      fireEvent.click(button)
      fireEvent.submit(form)
      expect(handleSubmit).toHaveBeenCalledTimes(2)
    })
  })

  describe('formSubmit function', () => {
    let onSubmit
    let event
    let input
    beforeEach(() => {
      onSubmit = jest.fn()
      event = {
        target: {
          reset: jest.fn(),
        },
        preventDefault: () => {},
      }
      input = {
        current: {
          value: null,
        },
      }
      formSubmit(event, onSubmit, input)
    })
    function toHaveBeenCalledOnce(spyOn) {
      expect(spyOn).toHaveBeenCalledTimes(1)
    }
    test('triggers event.target.reset', () => {
      toHaveBeenCalledOnce(event.target.reset)
    })
    test('triggers onSubmit prop', () => {
      toHaveBeenCalledOnce(onSubmit)
    })
  })
})
