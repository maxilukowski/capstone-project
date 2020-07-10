import React, { useState } from 'react'
import { Button } from '@blueprintjs/core'
import styled from 'styled-components'

export default () => {
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')

  return (
    <Container>
      {toggle ? (
        <>
          <h1>{input || 'Shopping List'}</h1>
          <Button icon='edit' onClick={() => setToggle(!toggle)} />
        </>
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;

  h1 {
    text-align: center;
    width: 250px;
    color: var(--sand);
    font-size: 1rem;
  }
  input {
    width: 250px;
    margin-top: 15px;
    margin-right: 5px;
    border-radius: 3px;
    border: none;
    background: var(--sand);
    outline: none;
  }

  button {
    border-radius: 3px;
    background: var(--secondary);
    border: none;
  }
`
