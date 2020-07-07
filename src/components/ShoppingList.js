import React from 'react'

import ShoppingListItem from './ShoppingListItem'
import styled from 'styled-components'

export default ({ shoppingListItems, onClick }) => {
  return (
    <Container>
      {shoppingListItems.map((listItem) => {
        return (
          <ShoppingListItem
            key={listItem.id}
            listItem={listItem}
            onClick={onClick}
          />
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
`
