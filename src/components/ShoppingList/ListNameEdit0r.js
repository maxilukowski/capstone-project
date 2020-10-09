import React, { useEffect, useState } from 'react'

import styled from 'styled-components'
import Button from '../Buttons'
import DropDownListNames from './DropDownListNames'



export default ({ shoppingListItems, onListNameChange }) => {
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')
  const [listNames, setListNames] = useState(
    JSON.parse(localStorage.getItem('shoppingListNames'))||["shopping list"] )

  useEffect(() => {
    localStorage.setItem('shoppingListNames', JSON.stringify(listNames))

    // only when "shopping list" not exists in localstorage
    const newEntry = (input === "" && localStorage.getItem("shopping list") === null)
      ? 'shopping list'
      :  input 

    if (newEntry !== "") {
      localStorage.setItem(newEntry, JSON.stringify([]))
    }
    
  }, [listNames])

  return (
    <Container>
      {toggle ? (
        <Spacer>
          <DropDownListNames
            onListNameChange={onListNameChange}
            listNames={listNames}
          />
          <Button fontSize='20px' text='c' onClick={() => setToggle(!toggle)} />
        </Spacer>
      ) : (
        <Spacer>
          <StyledInput
            onChange={(event) => setInput(event.target.value)}
            value={input}
            type='text'
            onKeyDown={(event) => {
              if (event.keyCode === 13) {
                setListNames([...listNames,input ])
                setToggle(!toggle)
              }
            }}
            placeholder='e.g. farmer`s market'
            autoFocus
            required
            maxLength='20'
          />
          <Button
            fontSize='20px'
            text='c'
            onClick={() => {
              setListNames([ ...listNames,input])
              setToggle(!toggle)
            }}
          />
        </Spacer>
      )}
    </Container>
  )
}

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
