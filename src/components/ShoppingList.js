import React from 'react'

import ShoppingListItem from './ShoppingListItem'
import styled from 'styled-components'

export default ({ shoppingListItems, onClick }) => {
  return (
    <Container>
      {shoppingListItems.map((listItem, index) => (
        <ShoppingListItem
          key={index + listItem}
          listItem={listItem}
          onClick={onClick}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
`
