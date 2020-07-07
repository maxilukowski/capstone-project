import React from 'react'
import styled from 'styled-components'

export default function Button({ text, onClick }) {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
}

const ButtonStyled = styled.button`
  border-radius: 3px;
  background: var(--secondary);
  border: none;
`
