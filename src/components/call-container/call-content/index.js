import React, { useContext, useEffect, useMemo } from "react";
import styled from "styled-components";
import Video from "assets/background_video.mp4";
import CallFooter from "../call-footer";
import { VdotokClientContext } from "context/vdotok-client";
import { UserContext } from "context/user";
import { CallContext } from "context/call";
import GetIcon from "utils/getIcon";
import ImageStatus from "components/image-status";
import { useLocalStorage } from "hooks/useLocalStorage";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  /* background-color: pink; */
  padding: 40px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .inner_container {
    position: relative;
    flex: 1;
    /* background-color: brown; */
    .local_video_container {
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 234px;
      height: 132px;
      overflow: hidden;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.gray_200_color};
      .local_video {
        display: ${(props) => (props.camera ? "block" : "none")};
        /* background-color: gold; */
      }
    }
    .remote_video_container {
      position: relative;
      width: 100%;
      height: 100%;
      .remote_video {
        display: ${(props) => (props.videoStream ? "block" : "none")};
        /* background-color: gold; */
      }
    }
    .video {
      width: calc(100% + 2px);
      height: calc(100% + 2px);
      object-fit: contain;
      display: none;
      /* background-color: pink; */
      /* border-radius: 10px; */
    }
    .icon_container {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 26px;
      width: 26px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.image_bg};
      text-align: center;
      .mic_off_icon {
        vertical-align: middle;
        font-size: 16px;
        color: #7269ef;
      }
    }
    .no_video_container {
      /* background-color: gold; */
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .img_container {
        height: 140px;
        width: 140px;
        &.local_img_container {
          height: 80px;
          width: 80px;
          .img {
            .name_container {
              .name_text {
                font-size: 40px;
              }
            }
          }
        }
        .img {
          height: 100%;
          width: 100%;
          padding: 5px;
          border-radius: 100%;
          .name_container {
            .name_text {
              font-size: 60px;
            }
          }
        }
      }
    }
    .username_text {
      position: absolute;
      bottom: 10px;
      left: 10px;
      font-weight: 500;
      color: #7269ef;
    }
  }
`;

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
    },
    dispatch: callDispatch,
  } = useContext(CallContext);
  const { vdotokClient } = useContext(VdotokClientContext);
  const [user] = useLocalStorage("user", {});
  console.log("## cal res CallContent", { uuid });

  const acceptCallHandler = () => {
    vdotokClient.AcceptCall(
      document.getElementById("localVideo"),
      document.getElementById("remoteVideo"),
      uuid
    );
  };

  const callHandler = () => {
    const params = {
      localVideo: document.getElementById("localVideo"),
      remoteVideo: document.getElementById("remoteVideo"),
      video,
      audio: 1,
      videoType: "camera",
      to: [selectedUser.ref_id],
    };

    console.log("## call params", { video });
    vdotokClient
      .Call(params)
      .then((res) => {
        console.log("## VideoCall res", res);
        callDispatch({ type: "SET_UUID", payload: res });
      })
      .catch((err) => console.log("## VideoCall Err", err));
  };

  useEffect(() => {
    console.log("## call res receivedRes", { receivedRes, video });
    let call = setTimeout(() => {
      if (receivedRes.type === "CALL_RECEIVED") {
        return acceptCallHandler();
      }
      return callHandler();
    }, 1000);

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

  return (
    <Container videoStream={videoStream} camera={camera}>
      <div className="inner_container">
        <div className="remote_video_container">
          {showRemoteAudioStreamIcon}
          <video id="remoteVideo" className="video remote_video" autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
          {showRemoteVideoStreamIcon}
          <p className="username_text">{selectedUser.full_name}</p>
        </div>
        <div className="local_video_container">
          {showLocalAudioStreamIcon}
          <video id="localVideo" className="video local_video" autoPlay>
            <source src={Video} type="video/mp4" />
          </video>
          {showLocalVideoStreamIcon}
          <p className="username_text">You</p>
        </div>
      </div>
      <CallFooter />
    </Container>
  );
}

export default CallContent;
