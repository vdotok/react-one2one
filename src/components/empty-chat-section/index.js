import React from "react";
import styled from "styled-components";
import GetIcon from "utils/getIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: gold; */
  height: 100vh;
  .chat_icon {
    font-size: 100px;
    color: ${({ theme }) => theme.chunkColor};
    color: ${({ theme }) => theme.image_bg};
  }
  .msg_text {
    font-size: 24px;
    font-weight: 600;
    margin: 26px 0;
    text-align: center;
    color: ${({ theme }) => theme.body_color};
  }
  .instruction_text {
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.body_color};
  }
`;

function EmptyChatSection() {
  return (
    <Container>
      <GetIcon iconName="emptyChat" className="chat_icon" />
      <p className="msg_text">It's nice to chat with someone</p>
      <p className="instruction_text">
        Pick a person from the left menu <br />
        and start your coversation
      </p>
    </Container>
  );
}

export default EmptyChatSection;
