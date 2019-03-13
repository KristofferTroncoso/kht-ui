import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  background: tomato;
  color: white;

  :hover {
    background: hotpink;
  }
`;

export function Button({children="Default Button", ...rest}) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}