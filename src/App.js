import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

let initialId = 0

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])
  /*   const activeList = shoppingListItems.filter((item) => item.isActive)
  const checkedList = shoppingListItems.filter((item) => !item.isActive)
  console.log(shoppingListItems) */

  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingList
        shoppingListItems={shoppingListItems.filter((item) => item.isActive)}
        onClick={onItemClick}
      />
      {/* {checkedList.length < 1 ? null : <p>recently checked</p>} */}
      <ShoppingList
        shoppingListItems={shoppingListItems.filter((item) => !item.isActive)}
        onClick={onItemClick}
      />
    </Container>
  )

  function onItemClick(title) {
    console.log(shoppingListItems, title)
    title.isActive = !title.isActive
    setShoppingListItems([...shoppingListItems])
  }

  function addItems(title) {
    initialId++

    setShoppingListItems([
      { title, id: initialId, isActive: true },
      ...shoppingListItems,
    ])
  }

  /* function swapItems(title) {
    const indexOfItemToRemove = shoppingListItems.findIndex(
      (item) => item === title
    )

    shoppingListItems.state = !shoppingListItems.state
    setShoppingListItems([
      ...shoppingListItems.slice(0, indexOfItemToRemove),
      ...shoppingListItems.slice(indexOfItemToRemove + 1),
    ])

    setCheckedListItems([title, ...checkedListItems])
  }

  function swapItemsBack(title) {
    const indexOfItemToRemove = checkedListItems.findIndex(
      (item) => item === title
    )

    setCheckedListItems([
      ...checkedListItems.slice(0, indexOfItemToRemove),
      ...checkedListItems.slice(indexOfItemToRemove + 1),
    ])

    setShoppingListItems([title, ...shoppingListItems])
  }
 */
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
