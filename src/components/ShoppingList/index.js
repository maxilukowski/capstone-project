import React, { useState, useEffect } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import styled from 'styled-components'

let idSuffix = 0

export default () => {
  const [shoppingListItems, setShoppingListItems] = useState(
    JSON.parse(localStorage.getItem('shoppingListItems')) || []
  )
  const [shoppingListName, setShoppingListName] = useState('')
  const activeList = shoppingListItems.filter((item) => item.isActive)
  const secondaryList = shoppingListItems.filter((item) => !item.isActive)

  useEffect(() => {
    localStorage.setItem(shoppingListName, JSON.stringify(shoppingListItems))
  }, [shoppingListItems])

  console.log(shoppingListName)

  return (
    <>
      <Header
        onSubmit={addItems}
        onClickDelete={clearPage}
        shoppingListItems={shoppingListItems}
        onListNameChange={handleListNameChange}
      />
      <ShoppingList shoppingListItems={activeList} onClick={onItemClick} />
      {secondaryList.length < 1 ? null : (
        <StyledDiv>recently checked</StyledDiv>
      )}
      <ShoppingList
        opacity={0.7}
        shoppingListItems={secondaryList}
        onClick={onItemClick}
      />
    </>
  )

  function onItemClick(listItem) {
    listItem.isActive = !listItem.isActive
    setShoppingListItems([...shoppingListItems])
    console.log(listItem.id)
  }

  function addItems(title) {
    idSuffix++

    setShoppingListItems([
      { title, id: `${Date.now()}_${idSuffix}`, isActive: true },
      ...shoppingListItems,
    ])
  }

  function clearPage() {
    setShoppingListItems([])
  }

  function handleListNameChange(listName) {
    setShoppingListName(listName)
  }
}

const StyledDiv = styled.div`
  text-align: center;
  color: var(--primary);
`
