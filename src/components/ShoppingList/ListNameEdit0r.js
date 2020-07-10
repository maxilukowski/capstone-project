import React, { useState } from 'react'
import { Button } from '@blueprintjs/core'
import styled from 'styled-components'

export default () => {
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')

  return (
    <Container>
      {toggle ? (
        <StyledDiv>
          <h1 as='div'>{input || 'Shopping List'}</h1>
          <Button icon='edit' onClick={() => setToggle(!toggle)} />
        </StyledDiv>
      ) : (
        <div>
          <input
            onChange={(event) => setInput(event.target.value)}
            value={input}
            name='input'
            type='text'
            placeholder='e.g. supermarket'
            autoFocus
            required
          />

          <Button icon='edit' onClick={() => setToggle(!toggle)} />
        </div>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  h1 {
    text-align: center;

    color: var(--sand);
    font-size: 1.3rem;
    display: inline;
  }
  input {
    width: 250px;

    margin-right: 5px;
    border-radius: 3px;
    border: none;
    background: var(--sand);
    outline: none;
  }

  button {
    border-radius: 3px;
    background: none;
    color: #d9822b;
    border: none;
    margin: 14px 0;
  }
`
const StyledDiv = styled.div`
  display: flex;
`
