import React, { useState, createContext, useReducer } from "react";
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
    case "RECONEECT_CALL_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const CallContextProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CallContext.Provider value={{ state, dispatch }}>
      {children}
    </CallContext.Provider>
  );
};

export default CallContextProvider;
