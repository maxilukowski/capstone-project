import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])
  const [secondListItems, setSecondListItems] = useState([])
  const [newId, setNewId] = useState(0)

  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingList
        shoppingListItems={shoppingListItems}
        onClick={removeItems}
      />

      <ShoppingList shoppingListItems={secondListItems} onClick={removeItems} />
    </Container>
  )

  function addItems(title) {
    setNewId(newId + 1)
    setShoppingListItems([{ title, id: newId }, ...shoppingListItems])
  }

  function removeItems(title) {
    const indexOfItemToRemove = shoppingListItems.findIndex(
      (item) => item === title
    )

    setShoppingListItems([
      ...shoppingListItems.slice(0, indexOfItemToRemove),
      ...shoppingListItems.slice(indexOfItemToRemove + 1),
    ])

    setSecondListItems([title, ...secondListItems])
  }
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
