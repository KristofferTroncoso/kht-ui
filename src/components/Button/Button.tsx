import React from "react";
import StyledButton from "./StyledButton";

export interface Props {
  variety?: "primary" | "danger" | "dashed";
  block?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children = "Button",
  variety = "primary",
  block = false,
  disabled = false,
  ...rest
}) => {
  return (
    <StyledButton variety={variety} block={block} disabled={disabled} {...rest}>
      {children}
    </StyledButton>
  );
};


export default Button;
