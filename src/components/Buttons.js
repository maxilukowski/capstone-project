import React from 'react'
import styled from 'styled-components'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { MdDeleteForever, MdAdd } from 'react-icons/md'

export default function Button({ text, onClick, fontSize, mr, dataTestid }) {
  return (
    <ButtonStyled
      fontSize={fontSize}
      onClick={onClick}
      mr={mr}
      data-testid={dataTestid}
    >
      {text}
    </ButtonStyled>
  )
}
export const DeleteListNameButton = ({ onClick, dataTestid }) => {
  return (
    <StyledEditListNameButton onClick={onClick} data-testid={dataTestid}>
      <MdDeleteForever />
    </StyledEditListNameButton>
  )
}

export const AddListNameButton = ({ onClick, dataTestid }) => {
  return (
    <StyledEditListNameButton onClick={onClick} data-testid={dataTestid}>
      <MdAdd />
    </StyledEditListNameButton>
  )
}

export const DeleteListItemsButton = ({ onClick, dataTestid }) => {
  return (
    <StyledDeleteListItemsButton onClick={onClick} data-testid={dataTestid}>
      <RiDeleteBack2Fill />
    </StyledDeleteListItemsButton>
  )
}

const StyledEditListNameButton = styled.button`
  background: var(--primary);
  color: var(--secondary);
  border: none;
  font-size: 30px;
  outline: none;
  margin-right: 15px;
  padding: 0;
`

const ButtonStyled = styled.button`
  border-radius: 3px;
  background: var(--secondary);
  border: none;
  font-size: ${(props) => props.fontSize};
  outline: none;
  margin-right: ${(props) => props.mr};
`

const StyledDeleteListItemsButton = styled.button`
  border: none;
  background: var(--sand);
  outline: none;
  font-size: 40px;
  color: var(--secondary);
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
`
