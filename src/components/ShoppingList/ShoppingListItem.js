import React from 'react'
import styled from 'styled-components'
import { MdCheck } from 'react-icons/md'

const ShoppingListItem = ({ listItem, onClick, testId }) => {
  return (
    <Container
      data-testid={testId}
      onClick={() => {
        onClick(listItem)
      }}
    >
      <div data-testid="shoppingListItem">{listItem.title}</div>
      <MdCheck color="var(--secondary)" />
    </Container>
  )
}

export default ShoppingListItem

const Container = styled.div`
  display: flex;
  padding: 7px;
  justify-content: space-between;
`
