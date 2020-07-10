import React, { useState } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'

let initialId = 0

export default () => {
  const [shoppingListItems, setShoppingListItems] = useState([])
  const activeList = shoppingListItems.filter((item) => item.isActive)
  const secondaryList = shoppingListItems.filter((item) => !item.isActive)

  return (
    <>
      <Header onSubmit={addItems} />
      <ShoppingList shoppingListItems={activeList} onClick={onItemClick} />
      {secondaryList.length < 1 ? null : <p>recently checked</p>}
      <ShoppingList shoppingListItems={secondaryList} onClick={onItemClick} />
    </>
  )
  function onItemClick(listItem) {
    listItem.isActive = !listItem.isActive
    setShoppingListItems([...shoppingListItems])
  }

  function addItems(title) {
    initialId++

    setShoppingListItems([
      { title, id: initialId, isActive: true },
      ...shoppingListItems,
    ])
  }
}
