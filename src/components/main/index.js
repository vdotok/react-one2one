/* eslint-disable */
import React, { useContext, useEffect, useMemo, useState, useRef } from "react";
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
import useUnload from "hooks/useUnload";
import { SnackbarContext } from "context/snackbar";
import SnackBar from "components/snack-bar";

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
  const [isReload, setIsReload] = useState(false);
  const rejectedCallsRef = useRef([]);
  const { isDisplayed, displayMsg } = useContext(SnackbarContext);
  const { vdotokClient, setVdotokClient, vdotokClientRef } =
    useContext(VdotokClientContext);
  const {
    state: { selectedUser, usersList },
    dispatch: userDispatch,
    usersListRef,
  } = useContext(UserContext);
  const {
    state: {
      receivedCall,
      callType,
      audio,
      camera,
      video,
      uuid,
      receivedRes,
      callMessage,
    },
    dispatch: callDispatch,
    callTypeRef,
  } = useContext(CallContext);
  const [user] = useLocalStorage("user", {});
  const [presistCallData, setPresistCallData] = useLocalStorage(
    "presistCallData",
    {}
  );
  const [currentUser] = useLocalStorage("currentUser", {});

  useEffect(() => {
    console.log("select_user currentUser", { currentUser });
    if (currentUser.ref_id) {
      userDispatch({ type: "SELECT_USER", payload: currentUser });
    }
  }, [currentUser.ref_id]);

  console.log("$$", { usersList });

  const callStatusHandler = (callStatusRes) => {
    const audioStream = callStatusRes.audio_status === 1;
    const videoStream = callStatusRes.video_status === 1;
    callDispatch({
      type: "SET_STREAMS",
      payload: { audioStream, videoStream },
    });
  };

  console.log("*** outside ", { callType });
  const receiverHandler = (receiverRes) => {
    console.log("*** ", { callType: callTypeRef.current, receiverRes });
    if (callTypeRef.current) {
      rejectedCallsRef.current = [
        ...rejectedCallsRef.current,
        receiverRes.uuid,
      ];
      vdotokClientRef.current.sendSessionBusy(receiverRes.from);
      //If user is already in call then rejecting new calls
      return;
    }
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
      receiverRes.callType === "audio" ||
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
    if (rejectRes.to) {
      const findUser = usersListRef.current.find((user) =>
        rejectRes.to.some((res) => res === user.ref_id)
      );
      console.log("## rejectCallHandler", {
        rejectRes,
        findUser,
      });
    }
    callDispatch({ type: "SET_CALL_TYPE", payload: null });
    callTypeRef.current = null;
    callDispatch({
      type: "CALL_MESSAGE",
      payload: "",
    });
    if (rejectRes.message) displayMsg(rejectRes.message, "error");
  };

  const endCallHandler = () => {
    callTypeRef.current = null;
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
    // //ABM
    // console.log("ABM");
    if (response.uuid && rejectedCallsRef.current.includes(response.uuid)) {
      console.log(
        "not processing response of a rejected call, ",
        response,
        rejectedCallsRef.current
      );
      //No need to process events of already rejected calls
      return;
    }
    switch (response.type) {
      case "CALL_RECEIVED": {
        console.log("ABM === Call received ");
        return receiverHandler(response);
      }

      case "CALL_REJECTED":
        return rejectCallHandler(response);

      case "CALL_STATUS":
        return callStatusHandler(response);

      case "CALL_ACCEPTED": {
        //ABM
        console.log("ABM === Call accepted");
      }
      case "TRYING":
      case "CONNECTING":
      case "ALERTING":
        return callMessageHandler(response);
      // case "CALL_STARTED":
      //   return callStatusHandler(response);
      //case "PARTICIPANT_LEFT":
      case "CALL_ENDED": {
        console.log("ABM === Call ended");
      }
      case "MISSED_CALL":
      case "SESSION_END":
      case "PARTICIPANT_UNAVAILABLE":
      case "INVALID_TARGET":
      case "BAD_REQUEST":
        //case "SOCKET_DROPPED":
        displayMsg(response.message, "error");
        return endCallHandler();
      case "SOCKET_DROPPED":
        displayMsg("Connection closed", "error");
        return callDispatch({ type: "SOCKET_DROP", payload: true });

      // case "PARTICIPANT_LEFT":
      //   return endCallHandler();
      default:
        return;
    }
  };

  useUnload((e) => {
    // console.log("hello");
    console.log("my log", callMessage);
    if (["Ringing", "Calling"].includes(callMessage)) {
      //if call is in ringing or alerting mode then no need to save call
      vdotokClient.EndCall();
      setPresistCallData({});
    } else {
      setPresistCallData({
        callType,
        audio,
        camera,
        video,
        uuid,
        receivedRes,
        callMessage,
        reconnectCall: uuid ? true : false,
      });
    }

    // alert("unload");
  });
  useEffect(() => {
    console.log("## RECONEECT_CALL_DATA", { vdotokClient, presistCallData });
    if (isReload && vdotokClient.projectId && presistCallData.uuid) {
      callDispatch({ type: "RECONEECT_CALL_DATA", payload: presistCallData });
    }
  }, [vdotokClient.projectId, presistCallData.uuid, isReload]);

  const initializeSDK = () => {
    if (window.parent) {
      window.addEventListener("message", (event) => {
        console.log("Inside React", event);
      });
      window.parent.postMessage("GetDOM", "*");
    }
    let Client = new CVDOTOK.Client({
      projectId: PROJECT_ID,
      host: `wss://r-stun2.vdotok.dev:8443/call`,
      //host: "wss://q-signalling.vdotok.dev:8443/call",
      stunServer: user.stun_server_map
        ? user.stun_server_map.complete_address
        : "",
    });
    Client.on("connected", (res) => {
      console.log("** vdotok SDK connected", { res });
      Client.Register(user.ref_id, user.authorization_token);
      displayMsg("Connection in progress ...", "info");
    });
    Client.on("register", (res) => {
      console.log("## register res", { res, uuid, presistCallData });
      setIsReload(true);
      callDispatch({ type: "SOCKET_DROP", payload: false });

      displayMsg("Socket connected", "success");
    });
    Client.on("call", (res) => {
      console.log("## Call res", { res });
      onCallResponseHandler(res);
    });
    vdotokClientRef.current = Client;
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
    <>
      {isDisplayed && <SnackBar />}
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
    </>
  );
}

export default Main;
