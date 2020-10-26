import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import styled from 'styled-components'
import { DeleteButton } from '../Buttons'

let idSuffix = 0

// shoppingListName darf es nur 1x geben

const Index = () => {
  const [shoppingListName, setShoppingListName] = useState('shopping list')
  const [shoppingListItems, setShoppingListItems] = useState([])
  const uncheckedList = shoppingListItems.filter((item) => item.isActive)
  const checkedList = shoppingListItems.filter((item) => !item.isActive)
  const isInitialized = useRef(false) //useREF anschaun

  useEffect(() => {
    if (shoppingListName.length > 0)
      setShoppingListItems(JSON.parse(localStorage.getItem(shoppingListName)))
  }, [shoppingListName])

  useEffect(() => {
    if (isInitialized.current) {
      localStorage.setItem(shoppingListName, JSON.stringify(shoppingListItems))
    }
    isInitialized.current = true
  }, [shoppingListItems])

  return (
    <Container>
      <Header
        onSubmit={addItems}
        setShoppingListName={setShoppingListName}
        shoppingListName={shoppingListName}
        isInitialized={isInitialized}
      />
      <ShoppingList shoppingListItems={uncheckedList} onClick={onItemClick} />
      {checkedList.length < 1 ? null : <StyledDiv>recently checked</StyledDiv>}
      <ShoppingList
        opacity={0.7}
        shoppingListItems={checkedList}
        onClick={onItemClick}
      />
      <DeleteButton onClick={() => setShoppingListItems([])} text="delete" />
    </Container>
  )

  function onItemClick(listItem) {
    listItem.isActive = !listItem.isActive
    setShoppingListItems([...shoppingListItems])
  }

  function addItems(title) {
    idSuffix++

    setShoppingListItems([
      { title, id: `${Date.now()}_${idSuffix}`, isActive: true },
      ...shoppingListItems,
    ])
  }
}
export default Index
const StyledDiv = styled.div`
  text-align: center;
  color: var(--primary);
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
