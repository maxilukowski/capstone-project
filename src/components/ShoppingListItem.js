import React from 'react'
import styled from 'styled-components'

export default ({ listItem, onClick }) => {
  return (
    <Container>
      <div onClick={() => onClick(listItem)}>{listItem}</div>
      <input type='checkbox' />
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  padding: 7px;
  justify-content: space-between;
`
