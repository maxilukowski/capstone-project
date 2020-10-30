import React from 'react'
import styled from 'styled-components'
import Button from '../Buttons'

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
      <Button fontSize="20px" text="del" mr="15px" onClick={removeListName} />
      <Button fontSize="20px" text="new" onClick={() => setToggle(!toggle)} />
    </Spacer>
  )
  function removeListName() {
    const newListNames = listNames.filter((listName) => {
      if (listName === shoppingListName) setListToRemove(listName)
      return listName !== shoppingListName
    })
    setListNames(newListNames)
  }
}

// alle elemente vorhanden/ && visible
// test .map
// onchangehandler testen jest.fn() calledTimes & mock eventObject
// removeListName exportieren und testen (shoppingListItemForm.js)
//jest.fn( )doc anschaun
// button testen / ob settoggle ausgeführt wird jest.fn() hasbeencalledtimes

export default DropDownListNames

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
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`
