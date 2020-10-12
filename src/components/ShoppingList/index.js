import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import styled from 'styled-components'


let idSuffix = 0

//PRETTIER????

const Index = () => {
  const [shoppingListName, setShoppingListName] = useState("shopping list")
  const [shoppingListItems, setShoppingListItems] = useState([])
  const activeList = shoppingListItems.filter((item) => item.isActive)
  const secondaryList = shoppingListItems.filter((item) => !item.isActive)
  const isInitialized = useRef(false) //useREF anschaun
  /**
   * useEffect superpraktisch um zu terminieren wann eine funktion ausgeführt werden soll
   */
 useEffect(()=>{
  setShoppingListItems(JSON.parse(localStorage.getItem(shoppingListName)))
 },[shoppingListName])

 useEffect(()=>{
  if( isInitialized.current){
    localStorage.setItem(shoppingListName, JSON.stringify(shoppingListItems))
  }
  isInitialized.current = true
},[shoppingListItems])
  


  return (
    <>
      <Header
        onSubmit={addItems}
        onClickDelete={setShoppingListItems}
        shoppingListItems={shoppingListItems}
        onListNameChange={setShoppingListName}
        shoppingListName={shoppingListName}
        isInitialized={isInitialized}
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
