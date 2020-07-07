import React from 'react'
import styled from 'styled-components'
import Button from './Button'

export default ({ onSubmit }) => {
  return (
    <Container>
      <div>My first shopping list</div>
      <form onSubmit={formSubmit}>
        <input type='text' name='input' placeholder='I need..' required />
        <Button text='add' />
      </form>
    </Container>
  )
  function formSubmit(event) {
    event.preventDefault()
    const text = event.target.input.value

    onSubmit(text)
    event.target.reset()
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary);
  min-height: 100px;
  top: 0;

  width: 100vw;

  box-shadow: 0 0 10px var(--primary);

  input {
    width: 250px;
    margin-top: 15px;
    margin-right: 5px;
    border-radius: 3px;
    border: none;
  }
  div {
    color: var(--sand);
  }
`
