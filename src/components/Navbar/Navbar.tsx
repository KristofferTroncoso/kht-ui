import * as React from 'react';
import styled from 'styled-components';

let StyledDiv = styled.div`
  font-family: sans-serif;
  background: linear-gradient(to right, #f2709c, #ff9472);
  box-shadow: 1px 1px 4px #3a3a3a;
  color: white;
  padding: 0 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export function Navbar({children="Default Navbar"}) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}