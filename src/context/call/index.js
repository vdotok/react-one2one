import React, { useState, createContext, useReducer, useRef } from "react";
export const CallContext = createContext();

const initialState = {
  callType: null,
  receivedCall: false,
  video: 0,
  audio: true,
  camera: true,
  videoStream: null,
  audioStream: null,
  chat: false,
  receivedRes: {},
  uuid: null,
  callMessage: "",
  reconnectCall: false,
  isSocketDrop: false,
  isP2PCall: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CALL_TYPE":
      return { ...state, callType: action.payload };
    case "SET_VIDEO":
      return { ...state, video: action.payload };
    case "SET_STREAMS":
      return {
        ...state,
        videoStream: action.payload.videoStream,
        audioStream: action.payload.audioStream,
      };
    case "SET_RECEIVED_CALL":
      return {
        ...state,
        receivedCall: action.payload,
      };
    case "GET_RECEIVED_RES":
      return {
        ...state,
        receivedRes: action.payload,
        uuid: action.payload.uuid,
      };
    case "SET_UUID":
      return {
        ...state,
        uuid: action.payload,
      };
    case "RESET_CALL_STATE":
      return {
        ...initialState,
      };
    case "SET_CALL_STATUS":
      return {
        ...state,
        audio: action.payload.audio,
        camera: action.payload.camera,
      };
    case "UPDATE_AUDIO":
      return { ...state, audio: action.payload };
    case "UPDATE_CAMERA":
      return { ...state, camera: action.payload };
    case "UPDATE_CHAT":
      return { ...state, chat: action.payload };
    case "CALL_MESSAGE":
      return { ...state, callMessage: action.payload };
    case "SOCKET_DROP":
      return { ...state, isSocketDrop: action.payload };
    case "RECONEECT_CALL_DATA":
      return { ...state, ...action.payload };
    //
    case "SET_P2P_CALL":
      return { ...state, isP2PCall: action.payload };
    //  
    default:
      return state;
  }
};

const CallContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const callTypeRef = useRef(state.callType);

  return (
    <CallContext.Provider value={{ state, dispatch, callTypeRef }}>
      {children}
    </CallContext.Provider>
  );
};

export default CallContextProvider;
