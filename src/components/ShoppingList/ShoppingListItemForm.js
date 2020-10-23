import React, { useRef } from 'react'
import styled from 'styled-components'
import ButtonS from '../Buttons'

const ShoppingListItemForm = ({ onSubmit }) => {
  const input = useRef(null)
  return (
    <StyledForm
      data-testid="test"
      onSubmit={(e) => formSubmit(e, onSubmit, input)}
    >
      <StyledInput
        maxLength="20"
        type="text"
        ref={input}
        name="input"
        placeholder="I need.."
        required
      />
      <ButtonS text="add" fontSize="20px" />
    </StyledForm>
  )
}

export default ShoppingListItemForm

export function formSubmit(event, onSubmit, input) {
  event.preventDefault()
  const title = input.current.value
  onSubmit(title)
  event.target.reset()
}

const StyledInput = styled.input`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  background: var(--sand);
  outline: none;
  font-size: 20px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`
