import styled, { css } from "styled-components";

export const Container = styled.div`
  /* background-color: #ffc0cb11; */
  padding: 20px;
  height: calc(100vh - 160px);
  overflow-y: auto;
  scrollbar-color: ${({ theme }) => theme.scrollbar_color} transparent;
  scrollbar-width: thin;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar_color};
    border-radius: 4px;
  }
`;
export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  /* background-color: gold; */
  justify-content: ${(props) => props.position === "right" && "flex-end"};
  margin-bottom: 24px;
  .message_content_container {
    display: flex;
    align-items: flex-end;
    flex-direction: ${(props) => props.position === "right" && "row-reverse"};
    .message_chunk_container {
      display: flex;
      flex-direction: column;
      align-items: ${(props) =>
        props.position === "right" ? "flex-end" : "flex-start"};
      ${(props) =>
        props.position === "right"
          ? css`
              margin-right: 16px;
            `
          : css`
              margin-left: 16px;
            `}

      .username_text {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.body_color};
        margin-top: 10px;
      }
    }
  }
`;

export const TextMessageChunk = styled.div`
  position: relative;
  padding: 12px 20px;
  background-color: ${({ position, theme }) =>
    position === "right" ? theme.chat_secondary_bg : theme.chat_primary_bg};
  border-radius: ${(props) =>
    props.position === "right" ? "8px 8px 0 8px" : "8px 8px 8px 0"};
  &::before {
    content: "";
    top: 100%;
    position: absolute;
    border-width: 5px;
    border-style: solid;
    ${(props) =>
      props.position === "right"
        ? css`
            border-color: ${({ theme }) => theme.chat_secondary_bg}
              ${({ theme }) => theme.chat_secondary_bg} transparent transparent;
            right: 0;
          `
        : css`
            border-color: ${({ theme }) => theme.chat_primary_bg} transparent
              transparent ${({ theme }) => theme.chat_primary_bg};
            left: 0;
          `}
  }
  .message_text {
    color: ${(props) =>
      props.position === "right" ? props.theme.dark : "#fff"};
    word-break: break-all;
  }
  .time_container {
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.position !== "right" && "flex-end"};
    color: ${(props) =>
      props.position === "right"
        ? props.theme.gray_600_color
        : "hsla(0, 0%, 100%, 0.5)"};
    margin-top: 4px;
    .time_icon {
      font-size: 12px;
      font-weight: 500;
      margin-right: 5px;
    }
    .time_text {
      font-size: 12px;
      font-weight: 500;
    }
  }
`;
