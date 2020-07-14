import React, { useState, useEffect } from 'react'
import Header from './Header'
import ShoppingList from './ShoppingList'
import styled from 'styled-components'

let idSuffix = 0

export default () => {
  const [shoppingListItems, setShoppingListItems] = useState(
    JSON.parse(localStorage.getItem('shoppingListItems')) || []
  )
  const activeList = shoppingListItems.filter((item) => item.isActive)
  const secondaryList = shoppingListItems.filter((item) => !item.isActive)

  useEffect(() => {
    localStorage.setItem('shoppingListItems', JSON.stringify(shoppingListItems))
    console.log(shoppingListItems)
  }, [shoppingListItems])

  return (
    <>
      <Header onSubmit={addItems} onClickDelete={clearPage} />
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
    console.log(listItem.id)
  }

  function addItems(title) {
    idSuffix++

    setShoppingListItems([
      { title, id: `${Date.now()}_${idSuffix}`, isActive: true },
      ...shoppingListItems,
    ])
  }

  function clearPage() {
    setShoppingListItems([])
  }
}

const StyledDiv = styled.div`
  text-align: center;
  color: var(--primary);
`
