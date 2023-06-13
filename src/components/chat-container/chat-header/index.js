import React, { useContext, useState } from "react";
import ImageStatus from "components/image-status";
import GetIcon from "utils/getIcon";
import { Container, UserInfo, Status, MoreOptionContainer } from "./styles";
import { UserContext } from "context/user";
import { CallContext } from "context/call";
import SwitchButton from "components/switch-button/index";

function ChatHeader(props) {
  const [message, setMessage] = useState("Hello World");
  const [toggle, setToggle] = useState(false);

  const { setShowAudioCallModal, setShowVideoCallModal } = props;
  const {
    state: { selectedUser },
  } = useContext(UserContext);
  const {
    state: { isP2PCall },
    dispatch: callDispatch,
  } = useContext(CallContext);

  const callHandler = (val) => {
    callDispatch({ type: "SET_VIDEO", payload: val });
  };
  const chooseMessage = (message) => {
    setMessage(message);
  };
  console.log("**** toggler:  \n\n", isP2PCall);

  const toggler = () => {
    callDispatch({ type: "SET_P2P_CALL", payload: !isP2PCall });
  };
  return (
    <Container>
      <UserInfo>
        <ImageStatus
          name={selectedUser.full_name}
          src={selectedUser.profile_pic}
          showStatus={false}
        />
        <p className="username">{selectedUser.full_name}</p>
        <Status status="away" />
      </UserInfo>

      <div style={{ display: "flex", alignItems: "center", margin: "5px" }}>
        <h4 style={{color:"#e1e9f1"}}>Media Server</h4>
        &nbsp;
          <SwitchButton onClick={toggler}  />
          &nbsp;
        {/* <Switch onClick={toggler} style={{ margin: "5px" }} /> */}
        <h4 style={{color:"#e1e9f1"}}>P2P Call</h4>
      </div>


      {/*
      <h1>{message}</h1>
      <ToggleBox chooseMessage={chooseMessage}/> */}

      <MoreOptionContainer>
        <GetIcon
          iconName="phone"
          className="option_icon"
          onClick={() => {
            callHandler(0);
            setShowAudioCallModal(true);
          }}
        />
        <GetIcon
          iconName="camera"
          className="option_icon"
          onClick={() => {
            callHandler(1);
            setShowVideoCallModal(true);
          }}
        />
        {/* <GetIcon iconName="user" className="option_icon" /> */}
      </MoreOptionContainer>
    </Container>
  );
}

export default ChatHeader;
