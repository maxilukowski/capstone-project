import React, { useState } from 'react'
import ShoppingList from './components/ShoppingList'
import Header from './components/Header'
import styled from 'styled-components'

let initialId = 0

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])
  const [checkedListItems, setcheckedListItems] = useState([])

  console.log(initialId)
  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingList shoppingListItems={shoppingListItems} onClick={swapItems} />
      {checkedListItems.length < 1 ? null : <p>recently checked</p>}
      <ShoppingList
        shoppingListItems={checkedListItems}
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

    setcheckedListItems([title, ...checkedListItems])
  }

  function swapItemsBack(title) {
    const indexOfItemToRemove = checkedListItems.findIndex(
      (item) => item === title
    )

    setcheckedListItems([
      ...checkedListItems.slice(0, indexOfItemToRemove),
      ...checkedListItems.slice(indexOfItemToRemove + 1),
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
