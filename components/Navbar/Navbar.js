import React from 'react';
import styled from 'styled-components';

let Yo = styled.h1`
  background: tomato;
`;

export function Navbar() {
  return (
    <nav>
      <Yo>This the navbar</Yo>
    </nav>
  )
}