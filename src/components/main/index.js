/* eslint-disable */
import React, { useContext, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { SDKContext } from "context/sdk-client";
import SideMenu from "components/side-menu";
import ChatSidePanel from "components/chat-side-panel";
import ChatContainer from "components/chat-container";
import CallContainer from "components/call-container";
import { useLocalStorage } from "hooks/useLocalStorage";
import { PROJECT_ID, SECRET_KEY } from "constants";
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
  const { setVdotokClient, setMessageClient } = useContext(SDKContext);
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

  const initializeCallingSDK = () => {
    let CallingClient = new CVDOTOK.Client({
      projectID: PROJECT_ID,
      host: `${user.media_server_map.protocol}://${user.media_server_map.host}:${user.media_server_map.port}/${user.media_server_map.end_point}`,
    });
    CallingClient.on("connected", (res) => {
      console.log("** CallingClient SDK connected", { res });
      CallingClient.Register(user.ref_id, user.authorization_token);
    });
    CallingClient.on("register", (res) => {
      console.log("## CallingClient register res", { res });
    });
    CallingClient.on("call", (res) => {
      console.log("## CallingClient Call res", { res });
      onCallResponseHandler(res);
    });
    setVdotokClient(CallingClient);
  };

  const initializeMessagingSDK = () => {
    let MessagingClient = new MVDOTOK.Client({
      projectID: PROJECT_ID,
      secret: SECRET_KEY,
      host: `${user.messaging_server_map.protocol}://${user.messaging_server_map.host}:${user.messaging_server_map.port}`,
    });

    console.log("MessagingClient initializing==>", { MessagingClient });
    MessagingClient.Register(user.ref_id, user.authorization_token);
    MessagingClient.on("connect", (res) => {
      console.log("** MessagingClient SDK connected", { res });
    });
    setMessageClient(MessagingClient);
  };

  useEffect(() => {
    // initializeCallingSDK();
    let ClientTimeout = setTimeout(() => {
      console.log("** in timeout", { user });
      initializeCallingSDK();
      // initializeMessagingSDK();
    }, 1000);

    return () => {
      console.log("claer");
      clearTimeout(ClientTimeout);
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
