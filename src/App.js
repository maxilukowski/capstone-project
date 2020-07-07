import React, { useState } from 'react'
import ShoppingListPage from './pages/ShoppingListPage'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
  const [shoppingListItems, setShoppingListItems] = useState([])

  return (
    <Container>
      <Header onSubmit={addItems} />
      <ShoppingListPage
        shoppingListItems={shoppingListItems}
        onClick={removeItems}
      />
    </Container>
  )

  function addItems(text) {
    setShoppingListItems([text, ...shoppingListItems])
  }

  function removeItems(title) {
    console.log(title)
    const index = shoppingListItems.findIndex((item) => item === title)
    setShoppingListItems([
      ...shoppingListItems.slice(0, index),
      ...shoppingListItems.slice(index + 1),
    ])
  }
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
