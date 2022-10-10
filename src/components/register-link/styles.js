import styled from "styled-components";

export const Question = styled.p`
  color: ${(props) => props.questionColor || "#7a7f9a"};
  text-align: center;
  margin: ${(props) => props.margin};
  .question_title {
    color: ${(props) => props.titleColor || "#54c295"};
  }
`;
