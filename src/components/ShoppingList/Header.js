import React from 'react'
import styled from 'styled-components'
import ButtonS from '../Buttons'
import ListNameEdit0r from './ListNameEdit0r'

const Header = ({
  onSubmit,
  shoppingListItems,
  setShoppingListName,
  shoppingListName,
  isInitialized,
}) => {
  //TODO
  return (
    <Container>
      <ListNameEdit0r
        shoppingListItems={shoppingListItems}
        setShoppingListName={setShoppingListName}
        shoppingListName={shoppingListName}
        isInitialized={isInitialized}
      />
      {/* eigene component */}
      {/* TODO 
      snapshot*/}
      <StyledForm onSubmit={formSubmit}>
        <StyledInput
          maxLength="20"
          type="text"
          name="input"
          placeholder="I need.."
          required
        />
        <ButtonS text="add" fontSize="20px" />
      </StyledForm>
    </Container>
  )
  //stub
  function formSubmit(event) {
    event.preventDefault()
    const title = event.target.input.value
    onSubmit(title)
    event.target.reset()
  }
}

export default Header

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  background: var(--primary);
  min-height: 100px;
  top: 0;
  width: 100vw;
  box-shadow: 0 0 10px var(--primary);
`
const StyledInput = styled.input`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  background: var(--sand);
  outline: none;
  font-size: 20px;
`

const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
`
