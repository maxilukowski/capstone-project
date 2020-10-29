import React, { useEffect, useState } from 'react'
import DropDownListNames from './DropDownListNames'
import ListNameInput from './ListNameInput'

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

  return (
    <>
      {toggle ? (
        <DropDownListNames
          setShoppingListName={setShoppingListName}
          listNames={listNames}
          shoppingListName={shoppingListName}
          toggle={toggle}
          setToggle={setToggle}
          setListToRemove={setListToRemove}
          setListNames={setListNames}
        />
      ) : (
        <ListNameInput
          setInput={setInput}
          input={input}
          setShoppingListName={setShoppingListName}
          setListNames={setListNames}
          listNames={listNames}
          setToggle={setToggle}
          toggle={toggle}
        />
      )}
    </>
  )
}

export default ListNameEdit0r
