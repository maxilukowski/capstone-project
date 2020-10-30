import React from 'react'
import Button from '../Buttons'
import styled from 'styled-components'

const ListNameInput = ({
  setInput,
  input,
  setShoppingListName,
  setListNames,
  listNames,
  setToggle,
  toggle,
}) => {
  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInput
        required
        minLength="3"
        onChange={(event) => setInput(event.target.value)}
        value={input}
        type="text"
        placeholder="e.g. farmer`s market"
        autoFocus
        maxLength="20"
      />
      <Button fontSize="20px" text="add" />
    </StyledForm>
  )

  function submitHandler(event) {
    event.preventDefault()
    setShoppingListName(input)
    setListNames([...listNames, input])
    setToggle(!toggle)
  }
}

export default ListNameInput

const StyledForm = styled.form`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`
const StyledInput = styled.input`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 20px;
  color: var(--sand);
`
