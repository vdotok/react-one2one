import React from "react";
import styled from "styled-components";
import GetIcon from "utils/getIcon";
const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.gray_200_color};
  padding: 14px 16px;
  border-radius: 7px;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  .search_icon {
    flex-shrink: 0;
    margin-right: 16px;
    color: ${({ theme }) => theme.body_color};
  }
`;
const Input = styled.input`
  border: none;
  background: none;
  outline: none;
  flex: 1;
  color: ${({ theme }) => theme.body_color};
  &::placeholder {
    color: ${({ theme }) => theme.body_color};
  }
`;
function SearchInput(props) {
  const { className, iconName, inputProps } = props;

  return (
    <InputContainer className={className}>
      {iconName ? (
        <GetIcon iconName={iconName} className="search_icon" />
      ) : null}
      <Input {...inputProps} />
    </InputContainer>
  );
}

export default SearchInput;
