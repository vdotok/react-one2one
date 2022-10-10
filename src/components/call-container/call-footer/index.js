import React, { useContext, useEffect } from "react";
import { CallContext } from "context/call";
import { VdotokClientContext } from "context/vdotok-client";
import styled from "styled-components";
import GetIcon from "utils/getIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* border-top: 1px solid ${({ theme }) => theme.border_color}; */
  /* background-color: gold; */
`;

export const MoreOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  gap: 20px;
  .option_icon {
    font-size: 20px;
    color: ${({ theme }) => theme.gray_600_color};
    cursor: pointer;
    &:nth-child(2) {
      margin: 0 30px;
    }
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => (props.active ? "#36404a" : "#ef476f")};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  text-align: center;
  box-sizing: border-box;
  cursor: pointer;
  &.phone_button {
    background-color: #ef476f;
  }
  &.chat_button {
    background-color: ${(props) => (props.active ? "#36404a" : "#06d6a0")};
  }
  .button_icon {
    color: #fff;
    font-size: 17px;
    &.cam_icon {
      font-size: 20px;
    }
    &.phone_icon {
      font-size: 19px;
    }
    &.chat_icon {
      font-size: 19px;
    }
  }
`;

function CallFooter() {
  const {
    state: { callType, audio, camera, chat, uuid },
    dispatch: callDispatch,
  } = useContext(CallContext);
  const { vdotokClient } = useContext(VdotokClientContext);

  useEffect(() => {
    if (callType === "audio") {
      callDispatch({ type: "UPDATE_CAMERA", payload: false });
    }
  }, [callType]);

  const endCall = () => {
    vdotokClient.EndCall();
  };

  console.log("## call footer", { callType });

  const cameraHandler = () => {
    if (camera) {
      vdotokClient.SetCameraOff(uuid);
      return callDispatch({
        type: "UPDATE_CAMERA",
        payload: false,
      });
    }
    return vdotokClient
      .SetCameraOn(uuid)
      .then((cameraRes) => {
        console.log("## cameraOn res", { cameraRes });
        callDispatch({
          type: "UPDATE_CAMERA",
          payload: true,
        });
      })
      .catch((cameraErr) => console.log("## cameraOn err", { cameraErr }));
  };
  const micHandler = () => {
    if (audio) {
      vdotokClient.SetMicMute(uuid);
      return callDispatch({
        type: "UPDATE_AUDIO",
        payload: false,
      });
    }
    return vdotokClient
      .SetMicUnmute(uuid)
      .then((audioRes) => {
        console.log("## audioOn res", { audioRes });
        callDispatch({
          type: "UPDATE_AUDIO",
          payload: true,
        });
      })
      .catch((audioErr) => console.log("## audioOn err", { audioErr }));
  };

  return (
    <Container>
      <MoreOptionContainer>
        <Button onClick={() => micHandler()} active={audio}>
          <GetIcon
            iconName={audio ? "onmic" : "offmic"}
            className="button_icon audio_icon"
          />
        </Button>
        <Button onClick={() => cameraHandler()} active={camera}>
          <GetIcon
            iconName={camera ? "oncam" : "offcam"}
            className="button_icon cam_icon"
          />
        </Button>
        <Button className="phone_button" onClick={endCall}>
          <GetIcon iconName="phone" className="button_icon phone_icon" />
        </Button>
        <Button
          onClick={() =>
            callDispatch({
              type: "UPDATE_CHAT",
              payload: !chat,
            })
          }
          className="chat_button"
          active={!chat}
        >
          <GetIcon iconName="chat" className="button_icon chat_icon" />
        </Button>
      </MoreOptionContainer>
    </Container>
  );
}

export default CallFooter;
