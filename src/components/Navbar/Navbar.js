import React from 'react';
import styled from 'styled-components';

let StyledDiv = styled.div`
  font-family: sans-serif;
  background: tomato;
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