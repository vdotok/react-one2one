import styled from "styled-components";

export const ButtonBox = styled.button`
  all: unset;
  background-color: ${(props) => props.backgroundColor || "#54c295"};
  color: ${(props) => props.color || "#fff"};
  margin: ${(props) => props.margin};
  font-weight: 500;
  width: 100%;
  border-radius: 4px;
  padding: 10px 16px;
  text-align: center;
  box-sizing: border-box;
  &:not(:disabled) {
    cursor: pointer;
  }
`;
