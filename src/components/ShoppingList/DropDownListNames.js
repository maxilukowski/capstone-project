import React from 'react'
import styled from 'styled-components'
import { DeleteListNameButton, AddListNameButton } from '../Buttons'

const DropDownListNames = ({
  listNames,
  setShoppingListName,
  shoppingListName,
  setToggle,
  setListToRemove,
  toggle,
  setListNames,
}) => {
  return (
    <Spacer>
      <StyledSelect
        value={shoppingListName}
        onChange={(event) => setShoppingListName(event.target.value)}
        data-testid="dropdown-select-listnames"
      >
        {listNames.map((listName, index) => (
          <option key={index} data-testid="dropdown-option-listnames">
            {listName}
          </option>
        ))}
      </StyledSelect>
      <DeleteListNameButton
        data-testid="delete-button"
        onClick={() =>
          removeListName(
            listNames,
            setListToRemove,
            setListNames,
            shoppingListName
          )
        }
      />
      <AddListNameButton onClick={() => setToggle(!toggle)} />
    </Spacer>
  )
}

export default DropDownListNames

export function removeListName(
  listNames,
  setListToRemove,
  setListNames,
  shoppingListName
) {
  const newListNames = listNames.filter((listName) => {
    if (listName === shoppingListName) setListToRemove(listName)
    return listName !== shoppingListName
  })
  setListNames(newListNames)
}

const StyledSelect = styled.select`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 20px;
  background: var(--sand);
`

const Spacer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`
