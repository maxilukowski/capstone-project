import React from 'react'
import Button from './Button'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Header.test.js', () => {
  it('renders a child element', () => {
    const text1 = 'foo'
    render(<Button text={text1} />)
    screen.debug()
    expect(screen.getByText(text1)).toBeInTheDocument()
  })
})
