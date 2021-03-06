import React from 'react'
import ShoppingListItem from './ShoppingListItem'
import styled from 'styled-components'

const ShoppingList = ({ shoppingListItems, onClick, opacity, testId }) => {
  return (
    <Container opacity={opacity}>
      {shoppingListItems.map((listItem) => (
        <ShoppingListItem
          key={listItem.id}
          listItem={listItem}
          onClick={onClick}
          testId={testId}
        />
      ))}
    </Container>
  )
}
export default ShoppingList

const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  opacity: ${(props) => props.opacity};
`
