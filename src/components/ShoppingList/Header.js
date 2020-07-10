import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import ListNameEdit0r from './ListNameEdit0r'

export default ({ onSubmit }) => {
  return (
    <Container>
      <ListNameEdit0r />
      <form onSubmit={formSubmit}>
        <input type='text' name='input' placeholder='I need..' required />
        <Button text='add' fontSize='20px' />
      </form>
    </Container>
  )
  function formSubmit(event) {
    event.preventDefault()
    const title = event.target.input.value
    onSubmit(title)
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
    width: 275px;

    margin-right: 10px;
    border-radius: 3px;
    border: none;
    background: var(--sand);
    outline: none;
    font-size: 20px;
  }
`
