import React from 'react'
import styled from 'styled-components'

const DropDownListNames = ({ listNames, onListNameChange }) => {
  return (
    <StyledSelect onChange={(event) => onListNameChange(event.target.value)}>
      {listNames.map((listName, index) => (
        <option key={index}>{listName}</option>
      ))}
      {/* useRef für initial */}
    </StyledSelect>
  )
}

export default DropDownListNames

const StyledSelect = styled.select`
  width: 275px;
  margin-right: 10px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 20px;
  background: var(--sand);
`
