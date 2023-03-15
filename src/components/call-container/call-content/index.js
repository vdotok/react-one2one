import React, { useContext, useEffect, useMemo } from "react";
import Video from "assets/background_video.mp4";
import CallFooter from "../call-footer";
import { VdotokClientContext } from "context/vdotok-client";
import { UserContext } from "context/user";
import { CallContext } from "context/call";
import GetIcon from "utils/getIcon";
import ImageStatus from "components/image-status";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Container } from "./styles";

function CallContent() {
  const {
    state: { selectedUser },
  } = useContext(UserContext);
  const {
    state: {
      audio,
      camera,
      video,
      uuid,
      receivedRes,
      videoStream,
      audioStream,
      callMessage,
      reconnectCall,
      callType,
    },
    dispatch: callDispatch,
  } = useContext(CallContext);
  const { vdotokClient } = useContext(VdotokClientContext);
  const [user] = useLocalStorage("user", {});
  console.log("## cal res CallContent", {
    uuid,
    videoStream,
    video,
    audio,
    audioStream,
    receivedRes,
  });

  // const acceptCallHandler = () => {
  //   vdotokClient.AcceptCall(
  //     document.getElementById("localVideo"),
  //     document.getElementById("remoteVideo"),
  //     uuid
  //   );
  // };

  const acceptCallHandler = () => {
    vdotokClient.AcceptCall({
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      sessionUUID: uuid,
      video,
      audio: true,
    });
  };

  const callHandler = () => {
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      video,
      audio,
      videoType: video ? "camera" : "audio",
      to: [selectedUser.ref_id],
    };

    if (reconnectCall) {
      params.ref_id = user.ref_id;
      params.re_invite = 1;
      params.sessionUUID = uuid
    }
    console.log("## call params", { video });
    vdotokClient
      .Call(params)
      .then((res) => {
        console.log("## VideoCall res", res);
        callDispatch({ type: "SET_UUID", payload: res });
      })
      .catch((err) => {
          console.log("## VideoCall Err", err);
          alert(err.error ? err.error.message : err.message.message ? err.message.message : err.message);
          callDispatch({ type: "RESET_CALL_STATE" });
      });
  };

  useEffect(() => {
    console.log("## call res receivedRes", { receivedRes, video, reconnectCall });
    let call = setTimeout(() => {
      if (receivedRes.type === "CALL_RECEIVED" && !reconnectCall) {
        return acceptCallHandler();
      }
      return callHandler();
    }, 2000);

    return () => {
      console.log("claer");
      clearTimeout(call);
    };
  }, []);

  const showRemoteAudioStreamIcon = useMemo(() => {
    if (audioStream === false) {
      return (
        <div className="icon_container">
          <GetIcon iconName="offmic" className="mic_off_icon" />
        </div>
      );
    }
  }, [audioStream]);

  const showLocalAudioStreamIcon = useMemo(() => {
    if (!audio) {
      return (
        <div className="icon_container">
          <GetIcon iconName="offmic" className="mic_off_icon" />
        </div>
      );
    }
  }, [audio]);

  const showRemoteVideoStreamIcon = useMemo(() => {
    if (videoStream === false) {
      return (
        <div className="no_video_container">
          <div className="img_container">
            <ImageStatus
              src={selectedUser.profile_pic}
              name={selectedUser.full_name}
              showStatus={false}
              alt="user profile"
              className="img"
            />
          </div>
        </div>
      );
    }
  }, [videoStream]);

  const showLocalVideoStreamIcon = useMemo(() => {
    if (!camera) {
      return (
        <div className="no_video_container">
          <div className="img_container local_img_container">
            <ImageStatus
              src={user.profile_pic}
              name={user.full_name}
              showStatus={false}
              alt="user profile"
              className="img"
            />
          </div>
        </div>
      );
    }
  }, [camera]);

  const callMessageShow = useMemo(() => {
    if (callMessage) {
      return (
        <div className="calling_message_container">
          <div className="img_container">
            <ImageStatus
              src={selectedUser.profile_pic}
              name={selectedUser.full_name}
              showStatus={false}
              alt="user profile"
              className="img"
            />
          </div>
          <p className="selected_username_text">{selectedUser.full_name}</p>
          <p className="call_message_text">{callMessage}</p>
        </div>
      );
    }
  }, [callMessage]);

  return (
    <Container
      videoStream={videoStream}
      camera={camera}
      callMessage={callMessage}
    >
      <div className="inner_container">
        <div className="remote_video_container">
          {showRemoteAudioStreamIcon}
            {callType === "video" ?
                <video id="remoteVideo" className="video remote_video" autoPlay playsInline={true}>
                    <source type="video/mp4" />
                </video>
                :
                <audio id="remoteVideo" className="video remote_video" autoPlay playsInline={true}>
                    <source type="audio/opus" />
                </audio>
            }
          {showRemoteVideoStreamIcon}
          <p className="username_text">{selectedUser.full_name}</p>
        </div>
        <div className="local_video_container">
          {showLocalAudioStreamIcon}
          <video id="localVideo" className="video local_video" autoPlay playsInline={true}>
            <source type="video/mp4" />
          </video>
          {showLocalVideoStreamIcon}
          <p className="username_text">You</p>
        </div>
        {callMessageShow}
      </div>

      <CallFooter />
    </Container>
  );
}

export default CallContent;
