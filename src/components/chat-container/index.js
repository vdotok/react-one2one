import React, { useState } from "react";
import CallModal from "components/call-modal";
import { uniqueString } from "utils";
import ChatContentContainer from "./chat-content-container";
import ChatFooter from "./chat-footer";
import ChatHeader from "./chat-header";

const messages = [
  {
    id: uniqueString(),
    position: "left",
    message: "Good Morning",
    name: "Doris Brown",
    imageUrl: "",
    time: "10:00",
  },
  {
    id: uniqueString(),
    position: "right",
    message: "Good morning, How are you? What about our next meeting?",
    name: "Patrick Hendricks",
    imageUrl: "",
    time: "10:02",
  },
  {
    id: uniqueString(),
    position: "left",
    message: "Yeah everything is fine",
    name: "Doris Brown",
    imageUrl: "",
    time: "10:05",
  },
  {
    id: uniqueString(),
    position: "left",
    message: "& Next meeting tomorrow 10.00AM",
    name: "Doris Brown",
    imageUrl: "",
    time: "10:05",
  },
  {
    id: uniqueString(),
    position: "left",
    message: "what the hell",
    name: "Doris Brown",
    imageUrl: "",
    time: "10:05",
  },
  {
    id: uniqueString(),
    position: "right",
    message: "Wow that's great",
    name: "Patrick Hendricks",
    imageUrl: "",
    time: "10:06",
  },

  {
    id: uniqueString(),
    position: "left",
    message:
      "please, save this pictures to your file and give it to me after you have done with editing!",
    name: "Doris Brown",
    imageUrl: "",
    time: "10:31",
  },
  {
    id: uniqueString(),
    position: "right",
    message: "okay sure😄👍",
    name: "Patrick Hendricks",
    imageUrl: "",
    time: "10:06",
  },
];

function ChatContainer() {
  const [showAudioCallModal, setShowAudioCallModal] = useState(false);
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);

  return (
    <div>
      <ChatHeader
        setShowAudioCallModal={setShowAudioCallModal}
        setShowVideoCallModal={setShowVideoCallModal}
      />
      <ChatContentContainer messages={messages} />
      <ChatFooter />
      {showAudioCallModal ? (
        <CallModal
          setShowModal={setShowAudioCallModal}
          msg="Start Audio Call"
          iconName="fillPhone"
          callType="audio"
        />
      ) : null}
      {showVideoCallModal ? (
        <CallModal
          setShowModal={setShowVideoCallModal}
          iconName="videoFillIcon"
          msg="Start Video Call"
          callType="video"
        />
      ) : null}
    </div>
  );
}

export default ChatContainer;
