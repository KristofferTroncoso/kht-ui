import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 0;
  outline: 0;
  box-shadow: 1px 1px 4px #3a3a3a;
  background: linear-gradient(to right, #f2709c, #ff9472);
  color: white;
  cursor: pointer;

  :hover {
    filter: brightness(1.1);
  }
`;

export function Button({children="Default Button", ...rest}) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}