import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])

  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingList
        shoppingListItems={shoppingListItems}
        onClick={removeItems}
      />
    </Container>
  )

  function addItems(text) {
    setShoppingListItems([text, ...shoppingListItems])
  }

  function removeItems(title) {
    const indexOfItemToRemove = shoppingListItems.findIndex(
      (item) => item === title
    )

    setShoppingListItems([
      ...shoppingListItems.slice(0, indexOfItemToRemove),
      ...shoppingListItems.slice(indexOfItemToRemove + 1),
    ])
  }
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
