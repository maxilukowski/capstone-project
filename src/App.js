import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

let initialId = 0

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])
  const [secondListItems, setSecondListItems] = useState([])

  console.log(initialId)
  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingList shoppingListItems={shoppingListItems} onClick={swapItems} />
      {secondListItems.length < 1 ? null : <p>recently checked</p>}
      <ShoppingList
        shoppingListItems={secondListItems}
        onClick={swapItemsBack}
      />
    </Container>
  )

  function addItems(title) {
    initialId++

    setShoppingListItems([{ title, id: initialId }, ...shoppingListItems])
  }

  function swapItems(title) {
    const indexOfItemToRemove = shoppingListItems.findIndex(
      (item) => item === title
    )

    setShoppingListItems([
      ...shoppingListItems.slice(0, indexOfItemToRemove),
      ...shoppingListItems.slice(indexOfItemToRemove + 1),
    ])

    setSecondListItems([title, ...secondListItems])
  }

  function swapItemsBack(title) {
    const indexOfItemToRemove = secondListItems.findIndex(
      (item) => item === title
    )

    setSecondListItems([
      ...secondListItems.slice(0, indexOfItemToRemove),
      ...secondListItems.slice(indexOfItemToRemove + 1),
    ])

    setShoppingListItems([title, ...shoppingListItems])
  }
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
