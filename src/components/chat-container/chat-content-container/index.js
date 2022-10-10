import React from "react";
import { Container, MessageContainer, TextMessageChunk } from "./styles";
import GetIcon from "utils/getIcon";
import ImageStatus from "components/image-status";

//set position "right" if user send the message

function ChatContentContainer(props) {
  const { messages } = props;
  return (
    <Container>
      {messages.map((message, index) => {
        const { id, name, imageUrl, position, message: msg, time } = message;
        const showUserName = name === messages[index + 1]?.name;
        // console.log({
        //   showUserName,
        //   length: messages.length,
        //   index,
        //   name: messages[index],
        //   nextName: messages[index + 1],
        // });
        return (
          <MessageContainer key={id} position={position}>
            <div className="message_content_container">
              {!showUserName ? (
                <ImageStatus
                  style={{ flexShrink: 0 }}
                  showStatus={false}
                  src={imageUrl}
                  name={name}
                />
              ) : (
                <div style={{ height: 34, width: 34 }}></div>
              )}
              <div className="message_chunk_container">
                <TextMessageChunk position={position}>
                  <p className="message_text">{msg}</p>
                  <div className="time_container">
                    <GetIcon iconName="clock" className="time_icon" />
                    <p className="time_text">{time}</p>
                  </div>
                </TextMessageChunk>
                <p className="username_text">{!showUserName ? name : ""}</p>
              </div>
            </div>
          </MessageContainer>
        );
      })}
    </Container>
  );
}

export default ChatContentContainer;
