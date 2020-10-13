import React from 'react'
import styled from 'styled-components'

export default function Button({ text, onClick, fontSize, mr }) {
  return (
    <ButtonStyled
      fontSize={fontSize}
      onClick={onClick}
      mr={mr}
      data-testid="button"
    >
      {text}
    </ButtonStyled>
  )
}

export const DeleteButton = ({ text, onClick }) => {
  return (
    <StyledDeleteButton onClick={onClick} data-testid="button">
      {text}
    </StyledDeleteButton>
  )
}

const ButtonStyled = styled.button`
  border-radius: 3px;
  background: var(--secondary);
  border: none;
  font-size: ${(props) => props.fontSize};
  outline: none;
  margin-right: ${(props) => props.mr};
`

const StyledDeleteButton = styled.button`
  border-radius: 3px;
  background: var(--secondary);
  border: none;
  font-size: ${(props) => props.fontSize};
  outline: none;
  font-size: 20px;
  width: 20%;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
`
