import React from 'react'
import styled from 'styled-components'

export default function Button({ text, onClick, fontSize }) {
  return (
    <ButtonStyled fontSize={fontSize} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  border-radius: 3px;
  background: var(--secondary);
  border: none;
  font-size: ${(props) => props.fontSize};
`
