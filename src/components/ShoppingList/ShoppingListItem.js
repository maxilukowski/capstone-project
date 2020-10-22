import React from 'react'
import styled from 'styled-components'

export default ({ listItem, onClick }) => {
  return (
    <Container
      onClick={() => {
        onClick(listItem)
      }}
    >
      <div>{listItem.title}</div>
      <input type="checkbox" data-testid="shopping-list-item-checker" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 7px;
  justify-content: space-between;
`
