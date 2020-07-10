import React from 'react'

import styled from 'styled-components'
import Index from './components/ShoppingList/index'

function App() {
  return (
    <Container>
      <Index />
    </Container>
  )
}
export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--primary);
`
