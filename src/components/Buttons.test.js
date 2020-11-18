import React from 'react'
import {
  DeleteListNameButton,
  AddListNameButton,
  DeleteListItemsButton,
} from './Buttons'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('Buttons.test.js', () => {
  let testFunction
  const dataTestId = 'testId'
  const dataTestId2 = 'testId2'
  const dataTestId3 = 'testId3'
  beforeEach(() => {
    testFunction = jest.fn()
    render(
      <>
        <DeleteListNameButton onClick={testFunction} dataTestid={dataTestId} />
        <AddListNameButton onClick={testFunction} dataTestid={dataTestId2} />
        <DeleteListItemsButton
          onClick={testFunction}
          dataTestid={dataTestId3}
        />
      </>
    )
    screen.debug()
  })
  it('gets rendered', () => {
    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
    expect(screen.getByTestId(dataTestId2)).toBeInTheDocument()
    expect(screen.getByTestId(dataTestId3)).toBeInTheDocument()
  })
  it('reacts on a click event', () => {
    fireEvent.click(screen.getByTestId(dataTestId))
    expect(testFunction).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByTestId(dataTestId2))
    expect(testFunction).toHaveBeenCalledTimes(2)
    fireEvent.click(screen.getByTestId(dataTestId3))
    expect(testFunction).toHaveBeenCalledTimes(3)
  })
})
