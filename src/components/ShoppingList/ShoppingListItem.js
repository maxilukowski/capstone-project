import React from 'react'
import styled from 'styled-components'

const ShoppingListItem = ({ listItem, onClick }) => {
  return (
    <Container
      onClick={() => {
        onClick(listItem)
      }}
    >
      <div data-testid="shoppingListItem">{listItem.title}</div>
      <input type="checkbox" data-testid="shopping-list-item-checker" />
    </Container>
  )
}

export default ShoppingListItem

const Container = styled.div`
  display: flex;
  padding: 7px;
  justify-content: space-between;
`
