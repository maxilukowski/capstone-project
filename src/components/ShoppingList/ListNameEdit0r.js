import React, { useState } from 'react'

import styled from 'styled-components'
import Button from './../Button'

export default () => {
  const [toggle, setToggle] = useState(true)
  const [input, setInput] = useState('')

  return (
    <Container>
      {toggle ? (
        <Spacer>
          <div>{input || 'Shopping List'}</div>
          <Button fontSize='20px' text='c' onClick={() => setToggle(!toggle)} />
        </Spacer>
      ) : (
        <Spacer>
          <StyledInput
            onChange={(event) => setInput(event.target.value)}
            value={input}
            type='text'
            placeholder='e.g. supermarket'
            autoFocus
            required
            maxLength='20'
          />
          <Button fontSize='20px' text='c' onClick={() => setToggle(!toggle)} />
        </Spacer>
      )}
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 10px;

  div {
    color: var(--sand);
    font-size: 1.3rem;
  }

  Button {
    width: 45px;
  }
`

const StyledInput = styled.input`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 20px;
  color: var(--sand);
`

const Spacer = styled.div`
  display: flex;
  justify-content: space-between;
`
