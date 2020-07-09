import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

let initialId = 0

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])

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
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
