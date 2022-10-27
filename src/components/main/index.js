/* eslint-disable */
import React, { useContext, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { VdotokClientContext } from "context/vdotok-client";
import SideMenu from "components/side-menu";
import ChatSidePanel from "components/chat-side-panel";
import ChatContainer from "components/chat-container";
import CallContainer from "components/call-container";
import { useLocalStorage } from "hooks/useLocalStorage";
import { PROJECT_ID } from "constants";
import EmptyChatSection from "components/empty-chat-section";
import { UserContext } from "context/user";
import { CallContext } from "context/call";
import CallModal from "components/call-modal";

const Container = styled.main`
  display: flex;
`;

const Panel = styled.div`
  max-width: 380px;
  min-width: 380px;
  background-color: ${({ theme }) => theme.sidebar_sub_bg};
  height: 100vh;
`;
const MainContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.card_bg};
  height: 100vh;
  box-shadow: 0 2px 4px rgb(15 34 58 / 12%);
`;

function Main(props) {
  const { children } = props;
  const { setVdotokClient } = useContext(VdotokClientContext);
  const {
    state: { selectedUser, usersList },
    dispatch: userDispatch,
    usersListRef,
  } = useContext(UserContext);
  const {
    state: { callType, receivedCall },
    dispatch: callDispatch,
  } = useContext(CallContext);
  const [user] = useLocalStorage("user", {});

  // const usersListRef = useRef(usersList);
  console.log("$$", { usersList });

  const callStatusHandler = (callStatusRes) => {
    const audioStream = callStatusRes.audio_status === 1;
    const videoStream = callStatusRes.video_status === 1;
    callDispatch({
      type: "SET_STREAMS",
      payload: { audioStream, videoStream },
    });
  };

  const receiverHandler = (receiverRes) => {
    const findUser = [...usersListRef.current].find(
      (user) => user.ref_id === receiverRes.from
    );
    console.log("## receiverHandler", {
      findUser,
      usersList,
      receiverRes,
      usersListRef: usersListRef.current,
    });
    callDispatch({ type: "SET_RECEIVED_CALL", payload: true });
    callDispatch({ type: "GET_RECEIVED_RES", payload: receiverRes });
    userDispatch({ type: "GET_USER", payload: findUser });
    if (
      receiverRes.call_type === "audio" ||
      !receiverRes?.data?.stateInfo.video
    ) {
      callDispatch({ type: "UPDATE_CAMERA", payload: false });
    }
    if ("video" in receiverRes?.data?.stateInfo) {
      const callStatus = {
        audio_status: receiverRes.data.stateInfo.audio,
        video_status: receiverRes.data.stateInfo.video,
      };
      callDispatch({
        type: "SET_VIDEO",
        payload: receiverRes.data.stateInfo.video,
      });
      callStatusHandler(callStatus);
    }
    // userDispatch({ type: "SELECT_USER", payload: findUser });
  };

  const rejectCallHandler = (rejectRes) => {
    const findUser = usersListRef.current.find((user) =>
      rejectRes.to.some((res) => res === user.ref_id)
    );
    console.log("## rejectCallHandler", {
      rejectRes,
      findUser,
    });
    callDispatch({ type: "SET_CALL_TYPE", payload: null });
    callDispatch({
      type: "CALL_MESSAGE",
      payload: "",
    });
  };

  const endCallHandler = () => {
    callDispatch({ type: "RESET_CALL_STATE" });
  };

  const callMessageHandler = (callMessageRes) => {
    if (
      callMessageRes.type === "TRYING" ||
      callMessageRes.type === "CONNECTING"
    ) {
      return callDispatch({
        type: "CALL_MESSAGE",
        payload: "Calling",
      });
    } else if (callMessageRes.type === "ALERTING") {
      return callDispatch({
        type: "CALL_MESSAGE",
        payload: "Ringing",
      });
    }
    return callDispatch({
      type: "CALL_MESSAGE",
      payload: "",
    });
  };

  const onCallResponseHandler = (response) => {
    switch (response.type) {
      case "CALL_RECEIVED":
        return receiverHandler(response);
      case "CALL_REJECTED":
        return rejectCallHandler(response);
      case "CALL_STATUS":
        return callStatusHandler(response);
      case "CALL_ACCEPTED":
      case "TRYING":
      case "CONNECTING":
      case "ALERTING":
        return callMessageHandler(response);
      // case "CALL_STARTED":
      //   return callStatusHandler(response);
      case "MISSED_CALL":
      case "PARTICIPANT_LEFT":
      case "CALL_ENDED":
      case "SOCKET_DROPPED":
        return endCallHandler();
      // case "SOCKET_DROPPED"  ndler(response);
      // case "PARTICIPANT_LEFT":
      //   return endCallHandler();
      default:
        return;
    }
  };

  const initializeSDK = () => {
    let Client = new CVDOTOK.Client({
        projectID: PROJECT_ID,
      // host: `${user.media_server_map.protocol}://${user.media_server_map.host}:${user.media_server_map.port}/${user.media_server_map.end_point}`,
        host: 'wss://r-signalling.vdotok.dev:8443/call',
        stunServer: user.stun_server_map ? user.stun_server_map.complete_address : ''
    });
    Client.on("connected", (res) => {
      console.log("** vdotok SDK connected", { res });
      Client.Register(user.ref_id, user.authorization_token);
    });
    Client.on("register", (res) => {
      console.log("## register res", { res });
    });
    Client.on("call", (res) => {
      console.log("## Call res", { res });
      onCallResponseHandler(res);
    });
    setVdotokClient(Client);
  };

  useEffect(() => {
    // initializeSDK();
    let Client = setTimeout(() => {
      console.log("** in timeout", { user });
      initializeSDK();
    }, 1000);

    return () => {
      console.log("claer");
      clearTimeout(Client);
    };
  }, []);

  const renderComponent = useMemo(() => {
    if (selectedUser.user_id) {
      return <ChatContainer />;
    }
    return <EmptyChatSection />;
  }, [selectedUser.user_id]);

  return (
    <Container>
      <SideMenu />
      <Panel>
        <ChatSidePanel />
      </Panel>
      <MainContainer>
        {/* <CallContainer /> */}
        {callType ? <CallContainer /> : renderComponent}
      </MainContainer>
      {children}
      {receivedCall ? (
        <CallModal
          setShowModal={(value) =>
            callDispatch({ type: "SET_RECEIVED_CALL", payload: value })
          }
          iconName="check"
          callType="receiver"
          msg="Start Video Call"
        />
      ) : null}
    </Container>
  );
}

export default Main;
