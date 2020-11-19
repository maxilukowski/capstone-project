import React from 'react'
import styled from 'styled-components'
import { MdDeleteForever, MdAdd, MdDeleteSweep } from 'react-icons/md'

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
      <MdDeleteSweep />
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
