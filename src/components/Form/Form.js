import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  background: #f1f1f1;
  color: #2d2d2d;
  font-size: 20px;
  outline: 0;
`;

export function Form({...rest}) {
  return (
    <StyledForm type="text" {...rest} />
  )
}