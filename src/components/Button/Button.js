import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  outline: 0;
  background: tomato;
  color: white;
`;

export function Button({children="Default Button", ...rest}) {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}