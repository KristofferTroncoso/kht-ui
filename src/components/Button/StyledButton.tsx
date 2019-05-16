import styled, { css } from "styled-components";


export interface Props {
  variety?: "primary" | "danger" | "dashed";
  block?: boolean;
}

const StyledButton = styled.button<Props>`
  outline: 0;
  cursor: pointer;
  text-align: center;
  margin: 5px;
  height: 35px;
  width: 60px;
  border: 0;
  color: slategray;
  border-radius: 8px;
  transition: 0.2s all ease-in-out;
  ::selection {
    background: 0;
  }

  ${props => props.variety === "primary" && primaryStyle};
  ${props => props.variety === "danger" && dangerStyle};
  ${props => props.variety === "dashed" && dashedStyle};
  ${props => props.disabled && disabledStyle};
  ${props => props.block && blockStyle};
`;

export const primaryStyle = css`
  background: dodgerblue;
  color: white;
  border: 0;
  :hover {
    filter: brightness(1.2);
  }
`;

export const dangerStyle = css`
  background: lightgray;
  color: crimson;
  border: 1px solid darkgray;
  :hover {
    background: crimson;
    color: white;
    border: crimson;
  }
`;

export const dashedStyle = css`
  border: 1px dashed darkgray;
  :hover {
    color: dodgerblue;
    border: 1px dashed dodgerblue;
  }
`;

export const disabledStyle = css`
  background: lightgray;
  color: darkgray;
  border-color: darkgray;
  cursor: not-allowed;
  :hover {
    color: darkgray;
    border-color: darkgray;
    background: lightgray;
    filter: none;
  }
`;

export const blockStyle = css`
  width: 100%;
`;

export default StyledButton;
