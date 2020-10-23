import React from 'react'
import styled from 'styled-components'
import ButtonS from '../Buttons'

const ShoppingListItemForm = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={formSubmit}>
      <StyledInput
        maxLength="20"
        type="text"
        name="input"
        placeholder="I need.."
        required
      />
      <ButtonS text="add" fontSize="20px" />
    </StyledForm>
  )

  function formSubmit(event) {
    event.preventDefault()
    const title = event.target.input.value
    onSubmit(title)
    event.target.reset()
  }
}

export default ShoppingListItemForm

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
