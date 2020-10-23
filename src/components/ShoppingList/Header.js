import React from 'react'
import styled from 'styled-components'
import ListNameEdit0r from './ListNameEdit0r'
import ShoppingListItemForm from './ShoppingListItemForm'

const Header = ({
  onSubmit,
  shoppingListItems,
  setShoppingListName,
  shoppingListName,
  isInitialized,
}) => {
  //TODO
  return (
    <Container>
      <ListNameEdit0r
        shoppingListItems={shoppingListItems}
        setShoppingListName={setShoppingListName}
        shoppingListName={shoppingListName}
        isInitialized={isInitialized}
      />
      {/* TODO 
      snapshot*/}
      <ShoppingListItemForm onSubmit={onSubmit} />
    </Container>
  )
  //stub
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  background: var(--primary);
  min-height: 100px;
  top: 0;
  width: 100vw;
  box-shadow: 0 0 10px var(--primary);
`
