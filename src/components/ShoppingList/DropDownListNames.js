import React from 'react'
import styled from 'styled-components'

const DropDownListNames = ({ listNames, onListNameChange }) => {
  return (
    <StyledSelect
     onChange={(event) => onListNameChange(event.target.value)}>
      {listNames.map((listName, index) => (
        <option key={index}>{listName}</option>
      ))}
      {/* useRef für initial */}
    </StyledSelect>
  )
}

export default DropDownListNames

const StyledSelect = styled.select`
  max-width: 100%;
  background: hotpink;
  margin-right: 15px;
`
