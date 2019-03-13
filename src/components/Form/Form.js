import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.input`
  padding: 10px;
  margin: 5px;
  border: 0;
  box-shadow: 2px 2px 8px gray;
  border-radius: 5px;
  background: linear-gradient(to right, #f2709c, #ff9472);
  color: white;
  ::placeholder {
    color: white;
  }
  font-size: 20px;
  outline: 0;
`;

export function Form({...rest}) {
  return (
    <StyledForm type="text" {...rest} />
  )
}