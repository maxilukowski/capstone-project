import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../Buttons'
import DropDownListNames from './DropDownListNames'

const ListNameEdit0r = ({ setShoppingListName, shoppingListName }) => {
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')
  const [listNames, setListNames] = useState(
    JSON.parse(localStorage.getItem('shoppingListNames')) || ['shopping list']
  )
  const [listToRemove, setListToRemove] = useState('')

  useEffect(() => {
    localStorage.setItem('shoppingListNames', JSON.stringify(listNames))
    // only when "shopping list" doesnt exists in localstorage
    const newEntry =
      input === '' && localStorage.getItem('shopping list') === null
        ? 'shopping list'
        : input

    if (newEntry !== '') {
      localStorage.setItem(newEntry, JSON.stringify([]))
    }

    if (listToRemove) localStorage.removeItem(listToRemove)
  }, [listNames])
  console.log(shoppingListName)
  return (
    <Container>
      {toggle ? (
        <Spacer>
          <DropDownListNames
            setShoppingListName={setShoppingListName}
            listNames={listNames}
            shoppingListName={shoppingListName}
          />
          <Button
            fontSize="20px"
            text="del"
            mr="15px"
            onClick={removeListName}
          />
          <Button
            fontSize="20px"
            text="new"
            onClick={() => setToggle(!toggle)}
          />
        </Spacer>
      ) : (
        <Spacer>
          <StyledInput
            onChange={(event) => setInput(event.target.value)}
            value={input}
            type="text"
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                setShoppingListName(input)
                setListNames([...listNames, input])
                setToggle(!toggle)
              }
            }}
            placeholder="e.g. farmer`s market"
            autoFocus
            required
            maxLength="20"
          />
          <Button
            fontSize="20px"
            text="add"
            onClick={() => {
              setShoppingListName(input)
              setListNames([...listNames, input])
              setToggle(!toggle)
            }}
          />
        </Spacer>
      )}
    </Container>
  )
  function removeListName() {
    /* const newListNames = [...listNames]
    newListNames.map((listName, i) => {
      if (listName === shoppingListName) {
        setListToRemove(listName)
        newListNames.splice(i, 1)
      }
      setListNames(newListNames) })*/

    const newListNames = listNames.filter((listName) => {
      if (listName === shoppingListName) setListToRemove(listName)
      return listName !== shoppingListName
    })
    setListNames(newListNames)
  }
}

export default ListNameEdit0r

const Container = styled.div`
  margin-bottom: 10px;

  div {
    color: var(--sand);
    font-size: 1.3rem;
  }

  Button {
    width: 45px;
  }
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

const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
`
