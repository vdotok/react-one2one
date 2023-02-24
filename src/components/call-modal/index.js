import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
// import avatar from "assets/images/avatar.jpg";
import GetIcon from "utils/getIcon";
import ImageStatus from "components/image-status";
import { UserContext } from "context/user";
import { VdotokClientContext } from "context/vdotok-client";
import { CallContext } from "context/call";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 500px;
  max-width: 500px;
  background-color: ${({ theme }) => theme.modal_content_bg};
  border: 1px solid ${({ theme }) => theme.modal_content_border_color};
  border-radius: 4px;
  padding: 40px;
  .img_container {
    height: 96px;
    width: 96px;
    .img {
      height: 100%;
      width: 100%;
      padding: 5px;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.body_bd};
      .name_container {
        .name_text {
          font-size: 24px;
        }
      }
    }
  }
  .username_text {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.gray_700_color};
    margin: 20px 0 8px 0;
  }
  .call_info {
    font-size: 16px;
    color: ${({ theme }) => theme.text_muted};
  }
  .btn_container {
    margin-top: 40px;
    .close_btn {
      height: 48px;
      width: 48px;
      background-color: #ef476f;
      border: none;
      outline: none;
      border-radius: 100%;
      cursor: pointer;
      &:nth-child(1) {
        .icon {
          font-size: 22px;
        }
      }
      &:nth-child(2) {
        background-color: #06d6a0;
        margin-left: 32px;
      }
      .icon {
        font-size: 20px;
        color: #fff;
      }
    }
  }
`;

const callModal = document.getElementById("call_modal");
function CallModal(props) {
  const { setShowModal, iconName, msg, callType } = props;

  // const [findUser, setFindUser] = useState({});

  const {
    state: { selectedUser, usersList, getUser },
    dispatch: userDispatch,
  } = useContext(UserContext);

  const {
    state: { receivedRes },
    dispatch: callDispatch,
      callTypeRef
  } = useContext(CallContext);

  const { vdotokClient } = useContext(VdotokClientContext);

  // useEffect(() => {
  //   if (usersList.length && receivedRes.from) {
  //     const findUserObj = usersList.find(
  //       (res) => res.ref_id === receivedRes.from
  //     );
  //     setFindUser(findUserObj);
  //   }
  // }, []);

  const startAudioCall = () => {
    callDispatch({ type: "SET_CALL_TYPE", payload: "audio" });
      callTypeRef.current = "audio"
    setShowModal(false);
  };

  const startVideoCall = () => {
    callDispatch({ type: "SET_CALL_TYPE", payload: "video" });
      callTypeRef.current = "video"
    setShowModal(false);
  };

  const rejectCall = () => {
    vdotokClient.RejectCall();
    callDispatch({ type: "RESET_CALL_STATE" });
  };

  const acceptCall = () => {
    userDispatch({ type: "SELECT_USER", payload: getUser });
    callDispatch({ type: "SET_CALL_TYPE", payload: receivedRes.call_type });

      callTypeRef.current = receivedRes.call_type
    setShowModal(false);
  };

  const callTypeHandler = () => {
    if (callType === "audio") {
      return startAudioCall();
    } else if (callType === "video") {
      return startVideoCall();
    } else if (callType === "receiver") {
      return acceptCall();
    }
  };

  return createPortal(
    <Container
      onClick={(event) => {
        event.stopPropagation();
        if (callType !== "receiver") {
          setShowModal(false);
        }
      }}
    >
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <div className="img_container">
          <ImageStatus
            src={
              callType === "receiver"
                ? getUser.profile_pic
                : selectedUser.profile_pic
            }
            name={
              callType === "receiver"
                ? getUser.full_name
                : selectedUser.full_name
            }
            showStatus={false}
            alt="user profile"
            className="img"
          />
        </div>
        <p className="username_text">
          {callType === "receiver"
            ? getUser.full_name
            : selectedUser.full_name}
        </p>
        <p className="call_info">
          {callType === "receiver"
            ? `${getUser.full_name} is calling you`
            : msg}
        </p>
        <div className="btn_container">
          <button
            className="close_btn"
            onClick={(event) => {
              event.stopPropagation();
              callType === "receiver" ? rejectCall() : setShowModal(false);
            }}
          >
            <GetIcon iconName="close" className="icon" />
          </button>
          <button
            className="close_btn"
            onClick={(event) => {
              event.stopPropagation();
              callTypeHandler();
            }}
          >
            <GetIcon iconName={iconName} className="icon" />
          </button>
        </div>
      </ModalContainer>
    </Container>,
    callModal
  );
}

export default CallModal;
