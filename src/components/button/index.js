import React from "react";
import { ButtonBox } from "./styles";

function Button(props) {
  const { children, buttonProps, backgroundColor, margin, color } = props;
  return (
    <ButtonBox
      {...buttonProps}
      backgroundColor={backgroundColor}
      margin={margin}
      color={color}
    >
      {children}
    </ButtonBox>
  );
}

export default Button;
