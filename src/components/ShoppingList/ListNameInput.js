import React from 'react'
import { AddListNameButton } from '../Buttons'
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
    <StyledForm
      onSubmit={(event) =>
        submitHandler(
          event,
          setShoppingListName,
          setListNames,
          listNames,
          setToggle,
          toggle,
          input
        )
      }
    >
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
      <AddListNameButton dataTestid="addListNameButton" />
    </StyledForm>
  )
}

export default ListNameInput

export function submitHandler(
  event,
  setShoppingListName,
  setListNames,
  listNames,
  setToggle,
  toggle,
  input
) {
  event.preventDefault()
  if (input.length < 3) return
  if (listNames.includes(input)) {
    alert(`there is already a list "${input}"`)
    return
  }
  setShoppingListName(input)
  setListNames([...listNames, input])
  setToggle(!toggle)
}

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
