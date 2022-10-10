import styled from "styled-components";

export const ChatSearchContainer = styled.div`
  padding: 20px 20px 0 20px;
  .chat_text {
    color: ${({ theme }) => theme.gray_700_color};
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 20px;
  }
`;
