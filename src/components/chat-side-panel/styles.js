import styled from "styled-components";

export const ChatPanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  .chat_text {
    color: ${({ theme }) => theme.gray_700_color};
    font-weight: 600;
    font-size: 24px;
  }
  .create_container {
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    .create_text {
      color: ${({ theme }) => theme.gray_700_color};
      font-weight: 600;
      font-size: 24px;
    }
    .add_icon {
      font-size: 26px;
      margin-left: 5px;
      color: ${({ theme }) => theme.gray_700_color};
    }
  }
`;
