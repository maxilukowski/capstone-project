import React from 'react'
import Button from './Buttons'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Button.test.js', () => {
  let testFunction
  const text1 = 'foo'
  beforeEach(() => {
    testFunction = jest.fn()
    render(<Button onClick={testFunction} text={text1} />)
  })
  it('renders a child element', () => {
    expect(screen.getByText(text1)).toBeInTheDocument()
  })
  it('reacts on a click event', () => {
    fireEvent.click(screen.getByText(text1))
    expect(testFunction).toHaveBeenCalledTimes(1)
  })
})
