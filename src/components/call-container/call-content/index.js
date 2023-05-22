import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Video from "assets/background_video.mp4";
import CallFooter from "../call-footer";
import { VdotokClientContext } from "context/vdotok-client";
import { UserContext } from "context/user";
import { CallContext } from "context/call";
import GetIcon from "utils/getIcon";
import ImageStatus from "components/image-status";
import { useLocalStorage } from "hooks/useLocalStorage";
import AvatarModal from "components/avatar";
import { Container, AvatarContainer } from "./styles";

function CallContent() {
  const videoRef = useRef(null);
  const {
    state: { selectedUser, getUser },
    dispatch: userDispatch,
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
      avatarStream,
      callType,
    },
    dispatch: callDispatch,
  } = useContext(CallContext);
  const { vdotokClient } = useContext(VdotokClientContext);
  const [user] = useLocalStorage("user", {});
  // console.log("## cal res CallContent", {
  //   uuid,
  //   videoStream,
  //   video,
  //   audio,
  //   audioStream,
  //   receivedRes,
  // });
  const [isActive, setIsActive] = useState(false);
  const [callTime, setCallTime] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setCallTime((prev) => prev + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
        // setIsActive(false);
      };
    }
  }, [isActive]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const remainingSeconds = seconds - hours * 3600 - minutes * 60;

    if (hours) {
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
    }

    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

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
      sessionUuid: uuid,
      video,
      audio: true,
    });
  };
  // console.log("**** ", { selectedUser, getUser });
  const callHandler = () => {
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      video,
      audio,
      videoType: video ? "camera" : "audio",
      to: [selectedUser.ref_id],
      timeout: 40,
      isPeer: 1,
    };

    if (reconnectCall) {
      params.refId = user.ref_id;
      params.reInvite = 1;
      params.sessionUuid = uuid;
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
        alert(
          err.error
            ? err.error.message
            : err.message.message
            ? err.message.message
            : err.message
        );
        callDispatch({ type: "RESET_CALL_STATE" });
      });
  };

  useEffect(() => {
    console.log("## call res receivedRes", {
      receivedRes,
      video,
      reconnectCall,
    });
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

  const showRemoteVideoStreamIcon = useMemo(() => {
    // console.log("showRemoteVideoStreamIcon\n\n", videoStream);
    if (videoStream === true || videoStream === false) {
      setIsActive(true);
    }

    if (videoStream === false) {
      return (
        <>
          {/* <div className="call_time">
            <h1>{formatTime(callTime)}</h1>
          </div> */}

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
        </>
      );
    }
    clearInterval(0);
  }, [videoStream, callTime]);

  const showLocalAudioStreamIcon = useMemo(() => {
    if (!audio) {
      return (
        <div className="local_icon_container">
          <GetIcon iconName="offmic" className="mic_off_icon" />
        </div>
      );
    }
  }, [audio]);

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
          {/* <h1>{formatTime(callTime)}</h1> */}
          <div className="call_time_container">
            <div className="call_time">
              <h1>hhh</h1>
            </div>
            {isActive === true ? (
              <div className="call_time">
                <h1>{formatTime(callTime)}</h1>
              </div>
            ) : null}
            {showRemoteAudioStreamIcon}
          </div>
          {/* <AvatarContainer display={true}>
            <AvatarModal />
          </AvatarContainer> */}
          {callType === "video" ? (
            <>
              {avatarStream ? (
                <AvatarContainer display={avatarStream}>
                  <AvatarModal audioStream={audioStream} />
                </AvatarContainer>
              ) : null}
              <video
                id="remoteVideo"
                className="video remote_video"
                autoPlay
                playsInline={true}
                ref={videoRef}
              >
                <source type="video/mp4" />
              </video>
            </>
          ) : (
            <audio
              id="remoteVideo"
              className="video remote_video"
              autoPlay
              playsInline={true}
            >
              <source type="audio/opus" />
            </audio>
          )}
          {avatarStream ? null : showRemoteVideoStreamIcon}
          <p className="username_text">{selectedUser.full_name}</p>
        </div>

        <div className="local_video_container">
          {showLocalAudioStreamIcon}
          <video
            id="localVideo"
            muted
            className="video local_video"
            autoPlay
            playsInline={true}
          >
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
