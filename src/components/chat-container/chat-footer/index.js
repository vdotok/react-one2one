import React, { useState } from "react";
import SearchInput from "components/search-input";
import GetIcon from "utils/getIcon";
import { Container, MoreOptionContainer, Button } from "./styles";

function ChatFooter() {
  const [message, setMessage] = useState("");
  return (
    <Container>
      <SearchInput
        inputProps={{
          type: "text",
          name: "message",
          value: message,
          placeholder: "Enter Message...",
          onChange: (event) => setMessage(event.target.value),
        }}
      />
      <MoreOptionContainer>
        <GetIcon iconName="happyFace" className="option_icon" />
        <GetIcon iconName="image" className="option_icon" />
        <Button>
          <GetIcon iconName="play" className="button_icon" />
        </Button>
      </MoreOptionContainer>
    </Container>
  );
}

export default ChatFooter;
