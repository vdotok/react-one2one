import React from "react";
import {
  Container,
  InputTitle,
  InputContainer,
  InputBox,
  InputError,
} from "./styles";
import Icons from "utils/icons";
function Input(props) {
  const { margin, title = "title", icon, inputProps, inputError } = props;

  const Icon = Icons[icon];

  return (
    <Container margin={margin}>
      <InputTitle>{title}</InputTitle>
      <InputContainer>
        {icon ? (
          <span className="input_icon_container">
            <Icon className="input_icon" />{" "}
          </span>
        ) : null}
        <InputBox {...inputProps} />
      </InputContainer>
      <InputError>{inputError}</InputError>
    </Container>
  );
}

export default Input;
