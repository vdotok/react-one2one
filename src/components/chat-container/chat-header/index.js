import React, { useContext } from "react";
import ImageStatus from "components/image-status";
import GetIcon from "utils/getIcon";
import { Container, UserInfo, Status, MoreOptionContainer } from "./styles";
import { UserContext } from "context/user";
import { CallContext } from "context/call";

function ChatHeader(props) {
  const { setShowAudioCallModal, setShowVideoCallModal } = props;
  const {
    state: {
      selectedUser: { ref_id, full_name, profile_pic },
    },
  } = useContext(UserContext);
  const { dispatch: callDispatch } = useContext(CallContext);

  const callHandler = (val) => {
    callDispatch({ type: "SET_VIDEO", payload: val });
  };

  return (
    <Container>
      <UserInfo>
        <ImageStatus name={full_name} src={profile_pic} showStatus={false} />
        <p className="username">{full_name}</p>
        <Status status="away" />
      </UserInfo>
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
