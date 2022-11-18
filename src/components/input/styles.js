import styled from "styled-components";

export const Container = styled.div`
  margin: ${(props) => props.margin};
  /* background-color: #f5f7fb; */
`;

export const InputTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 6px;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
  overflow: hidden;
  padding-right: 16px;
  .input_icon_container {
    padding: 10px 14px;
    background-color: #f5f7fb;
    margin-right: 16px;
    .input_icon {
      color: #7a7f9a;
    }
  }
`;
export const InputBox = styled.input`
  all: unset;
  flex: 1;
  font-size: 14px;
  color: #495057;
  ::placeholder {
    color: #7a7f9a;
  }
`;
export const InputError = styled.p`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 500;
  color: #ef476f;
`;
