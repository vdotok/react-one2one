/*!
 * 
 *  VdoTok Call version 0.17.1
 */
window["CVDOTOK"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PhantomHelper = exports.ScreenSharingMobile = exports.Broadcast = exports.ManyToMany = exports.Confrence = exports.Client = exports.version = exports.name = void 0;
/* eslint-disable prettier/prettier */
// Helpful name and version exports
const version_1 = __webpack_require__(1);
const version = version_1.LIBRARY_VERSION;
exports.version = version;
const name = "vdotok-call";
exports.name = name;
// Export namespaced web
const index_jsonrpc_1 = __webpack_require__(2);
exports.Client = index_jsonrpc_1.default;
const Conference_1 = __webpack_require__(27);
exports.Confrence = Conference_1.default;
const ManyToMany_1 = __webpack_require__(28);
exports.ManyToMany = ManyToMany_1.default;
const broadcast_1 = __webpack_require__(29);
exports.Broadcast = broadcast_1.default;
const ScreenSharingMobile_1 = __webpack_require__(14);
exports.ScreenSharingMobile = ScreenSharingMobile_1.default;
const PhantomHelper_1 = __webpack_require__(15);
exports.PhantomHelper = PhantomHelper_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LIBRARY_VERSION = void 0;
exports.LIBRARY_VERSION = "0.0.1";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const StreamHelper_1 = __webpack_require__(13);
const ScreenSharingMobile_1 = __webpack_require__(14);
const WebRtcPeerHelper_1 = __webpack_require__(16);
class Client extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.localVideos = [];
        this.webRtcPeers = [];
        this.isEmptyVideoStarted = [];
        this.isEmptyAudioStarted = [];
        this.reInviteTimeout = [];
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = [];
        this.audioStatus = [];
        this.sessionInfo = [];
        this.isManyToMany = false;
        this.manyToMany = {};
        this.participantsInCall = [];
        this.streamHelper = null;
        this.nativeScreenShare = [];
        this.htmlNormalizationCode = null;
        this.socketCloseCheck = null;
        this.reconnectCheckInterval = [];
        this.pingSessionStopped = [];
        this.screenSharingMobile = null;
        this.turnConfigs = null;
        this.stunServer = null;
        this.socketState = "disconnected";
        this.reconnectCount = [];
        this.selfClose = false;
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        this.stunServer = _Credentials.stunServer;
        if (!this.stunServer) {
            EventHandler_1.default.OnAuthError("Please provide STUN server address!", this);
            return;
        }
        if (!this.projectID) {
            EventHandler_1.default.OnAuthError("Please provide your Project ID!", this);
            return;
        }
        if (!this.stunServer) {
            EventHandler_1.default.OnAuthError("Please provide your Project secret!", this);
            return;
        }
        this.Authentication(_Credentials);
        window.addEventListener('online', this.onOnline.bind(this));
        window.addEventListener('offline', this.onOffline.bind(this));
        setInterval(() => {
            for (var uUID in this.webRtcPeers) {
                if (this.webRtcPeers.hasOwnProperty(uUID)) {
                    console.log(this.webRtcPeers[uUID].peerConnection.connectionState);
                }
            }
        }, 3000);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        if (credentials.host) {
            this.Connect(credentials.host);
        }
        else {
            Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
                console.log("===Authorization-outer===", response);
                if (response && response.status == 200) {
                    let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                    this.Connect(host);
                    console.log("===Authorization===", response);
                }
                else
                    EventHandler_1.default.OnAuthError(response.message, this);
            });
        }
    }
    async onOnline() {
        this.reconnectCount = [];
        this.afterOnlineProcess();
    }
    async onOffline() {
        //closing socket immediately once offline event received
        this.socketState = "disconnected";
        this.ws.close(1001, "Internet disconnected");
        console.info("You are offline!");
    }
    afterOnlineProcess() {
        let socketCheckInterval = setInterval(async () => {
            if (this.socketState === "registered") {
                clearInterval(socketCheckInterval);
                console.log("Current call session count", this.sessionInfo.length);
                if (this.sessionInfo && Object.keys(this.sessionInfo).length >= 1) {
                    for (let UUID in this.sessionInfo) {
                        console.log("Currently trying auto reconnect for  call session", UUID);
                        let result = await this.autoReconnectCall(UUID);
                        console.log("Reconnect result -> ", result);
                    }
                }
            }
            else {
                console.log("Socket is not registered yet! Current socket state -> ", this.socketState);
            }
        }, 1500);
    }
    Connect(mediaServer, selfReconnect = false) {
        this.socketState = "connecting";
        this.ws = new WebSocket(mediaServer);
        this.mediaServer = mediaServer;
        this.ws.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    if (messageData.responseCode == 200) {
                        this.McToken = messageData.mcToken;
                        this.socketState = "registered";
                        this.selfClose = false;
                    }
                    else {
                        this.socketState = "fail_registration";
                    }
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    if (selfReconnect) {
                        this.afterOnlineProcess(); //check socket state and reconnect all sessions
                    }
                    this.registerPingWorker();
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    console.log("Wait for Ice received and try to reconnect!");
                    this.reconnectCheckInterval[messageData.sessionUUID] = setTimeout(() => {
                        console.log("Ice not received, reconnecting...!");
                        let result = this.autoReconnectCall(messageData.sessionUUID);
                        console.log(result);
                    }, 1600);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUUID;
                    this.UUIDSessionTypes[messageData.sessionUUID] = messageData.call_type;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.media_type;
                    this.mediaType = messageData.media_type;
                    this.isManyToMany = (messageData.call_type == "many_to_many");
                    console.log('incomingCall case: ', message);
                    let isVideoCall = (messageData.call_type === "video" || messageData.media_type === "video");
                    this.sessionInfo[messageData.sessionUUID] =
                        {
                            incomingCallData: messageData,
                            call_type: isVideoCall ? "video" : "audio",
                            isPeer: messageData.isPeer,
                            isSDPAnswerSend: 0,
                            isInitiator: 0
                        };
                    if (!(messageData.data && messageData.data.stateInfo)) {
                        if (!messageData.data) {
                            messageData.data = {};
                        }
                        messageData.data.stateInfo = { audio: 1, video: isVideoCall };
                    }
                    if (messageData.turn_credentials) {
                        this.turnConfigs = messageData.turn_credentials;
                        this.turnConfigs.status = true;
                    }
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    this.StopSession(messageData);
                    break;
                case 'iceCandidate':
                    if (this.reconnectCheckInterval[messageData.sessionUUID]) {
                        console.log("Ice received no need to reconnect!");
                        clearTimeout(this.reconnectCheckInterval[messageData.sessionUUID]);
                    }
                    if (this.sessionInfo[messageData.sessionUUID] && this.sessionInfo[messageData.sessionUUID].isInitiator) {
                        this.AddCandidate(messageData);
                    }
                    else {
                        if (this.sessionInfo[messageData.sessionUUID] && this.sessionInfo[messageData.sessionUUID].isSDPAnswerSend) {
                            this.AddCandidate(messageData);
                        }
                        else {
                            if (!this.sessionInfo[messageData.sessionUUID].receivedRemoteCandidates) {
                                this.sessionInfo[messageData.sessionUUID].receivedRemoteCandidates = [];
                            }
                            this.sessionInfo[messageData.sessionUUID].receivedRemoteCandidates.push(messageData);
                            if (!this.sessionInfo[messageData.sessionUUID].isSDPAnswerSendInterval) {
                                this.sessionInfo[messageData.sessionUUID].isSDPAnswerSendInterval = setInterval(() => {
                                    if (this.sessionInfo[messageData.sessionUUID] && this.sessionInfo[messageData.sessionUUID].isSDPAnswerSend) {
                                        clearInterval(this.sessionInfo[messageData.sessionUUID].isSDPAnswerSendInterval);
                                        this.sessionInfo[messageData.sessionUUID].isSDPAnswerSendInterval = null;
                                        console.log("Processing stored ice candidates!");
                                        for (let i = 0; i < this.sessionInfo[messageData.sessionUUID].receivedRemoteCandidates.length; i++) {
                                            this.AddCandidate(this.sessionInfo[messageData.sessionUUID].receivedRemoteCandidates[i]);
                                        }
                                    }
                                }, 500);
                            }
                        }
                    }
                    break;
                case 'session_init':
                    if (messageData.responseCode == 200 && messageData.turn_credentials) {
                        this.turnConfigs = messageData.turn_credentials;
                        this.turnConfigs.status = true;
                        this.turnConfigs.receiver_status = messageData.receiver_status[0]; //TODO first participant is used for one to one call, in cass of many to many need different logic
                    }
                    else {
                        this.turnConfigs = { status: false };
                    }
                    break;
                case 'session_invite':
                case 're_invite':
                    this.SessionInvite(messageData);
                    break;
                case 'p2p_reInvite':
                    this.PeerToPeerReInvite(messageData);
                    break;
                case 'session_cancel':
                    this.SessionCancel(messageData);
                    break;
                case 'session_break':
                    EventHandler_1.default.SessionBreak(messageData, this);
                    //this.SessionCancel(messageData, 'break');
                    //this.DisposeWebrtc(true);
                    break;
                case 'session_busy':
                    EventHandler_1.default.SessionBusy(messageData, this);
                    //this.SessionCancel(messageData, 'break');
                    //this.DisposeWebrtc(true);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.SetCallerStatus(messageData);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                ///////////////////////////////////////////////////
                ////////////////// public url events
                case 'publicURL':
                    console.log("===publicURL", messageData, new Date().toLocaleTimeString());
                    if (!selfReconnect) {
                        this.OnPublicURL(messageData);
                    }
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                case 'custom_rpc':
                case 'vh_info':
                    console.log("===custom_rpc", messageData, new Date().toLocaleTimeString());
                    if (messageData.data) {
                        this.OnCustomRPC(messageData);
                    }
                    break;
                case 'onIceCandidate':
                    if (messageData.responseCode == 400) {
                        EventHandler_1.default.OnAddCandidate(messageData.message, this);
                    }
                    else {
                        console.error("Unhandled Ice event", messageData);
                    }
                    break;
                case 'session_pong':
                case 'session_ping':
                    if (messageData.responseCode == 200) {
                        console.log('sdk session pong', messageData);
                    }
                    else if (messageData.responseCode == 400) {
                        console.log("SDK session ended in pong", messageData);
                        this.pingSessionStopped[messageData.sessionUUID] = true;
                        this.emit("call", {
                            type: "SESSION_SUSPENSION",
                            message: "Show has suspended by VDOTOK",
                            uuid: messageData.sessionUUID
                        });
                    }
                    else if (messageData.responseCode == 407) {
                        console.log("SDK invalid authentication or invalid mcToken in pong", messageData);
                        EventHandler_1.default.OnAuthError(messageData.message, this);
                    }
                    break;
                /////////////////////////////////////////////////
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        this.ws.onclose = (res) => {
            this.socketState = "disconnected";
            //EventHandler.OnDisconnection(res,this);
            console.log("OnClose socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUUID });
            if (this.socketCloseCheck) {
                clearInterval(this.socketCloseCheck);
            }
            if (this.selfClose) {
                return;
            }
            this.socketCloseCheck = setInterval(() => {
                console.log("Auto reconnecting..... count -> ", this.reconnectCount.length);
                if (this.reconnectCount.length > 5) {
                    //clearInterval(this.socketCloseCheck);
                    console.log("Unable to reconnect socket automatically!");
                    this.pingWorker.postMessage({ method: 'clearPingInterval' });
                    return;
                }
                if (this.socketState == "disconnected" || this.socketState == "fail_registration") {
                    let currentDate = (new Date()).getTime();
                    let seconds = this.reconnectCount && this.reconnectCount.length ? (Math.abs((currentDate - this.reconnectCount[this.reconnectCount.length - 1])) / 1000) : 0;
                    //console.log("current difference in seconds ->", seconds, "current date -> ", currentDate, "reconnect history -> ", this.reconnectCount)
                    if (seconds === 0 || seconds >= 3) {
                        this.Connect(mediaServer, true);
                        this.reconnectCount.push((new Date()).getTime());
                    }
                    else {
                        console.log("Not reconnecting socket as time is less then 3 seconds!");
                    }
                }
            }, 2000);
        };
        this.ws.onopen = (res) => {
            if (this.socketCloseCheck) {
                clearInterval(this.socketCloseCheck);
            }
            if (selfReconnect) {
                this.Register(this.currentUser, this.authorizationToken, 1);
            }
            else {
                EventHandler_1.default.OnConnection(res, this);
            }
            console.log("OnOpen socket==", res);
        };
        //   this.ws.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        this.ws.onerror = (res) => {
            this.socketState = "disconnected";
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUUID });
        };
    }
    OnCustomRPC(data) {
        EventHandler_1.default.OnCustomRPC(data, this);
    }
    CheckSocketConnection() {
        let socket = this.ws;
        return socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING;
    }
    autoReconnectCall(uUID, params = null) {
        var _a, _b, _c, _d;
        params = params || (this.sessionInfo[uUID] && this.sessionInfo[uUID].currentCallParams ? this.sessionInfo[uUID].currentCallParams : null);
        if (params) {
            if (params.videoType === 'screen' && this.localVideos[uUID]) {
                this.localVideos[uUID].srcObject.getAudioTracks()[0].stop();
            }
            params.video = this.videoStatus[uUID] || ((_a = params.video) !== null && _a !== void 0 ? _a : 1);
            params.audio = this.audioStatus[uUID] || ((_b = params.audio) !== null && _b !== void 0 ? _b : 1);
            params.re_invite = 1;
            params.ref_id = this.currentUser || params.ref_id;
            params.sessionUUID = uUID;
            params.isPeer = this.sessionInfo[uUID] ? this.sessionInfo[uUID].isPeer : ((_c = params.isPeer) !== null && _c !== void 0 ? _c : 1);
            params.call_type = this.sessionInfo[uUID] ? this.sessionInfo[uUID].call_type : ((_d = params.call_type) !== null && _d !== void 0 ? _d : "one_to_one");
            params.data = params.data || {};
            if (params.call_type === 'one_to_many') {
                return this.PulicBroadCast(params);
            }
            else if (["audio", "video", "one_to_one"].includes(params.call_type)) {
                if (params.isPeer) {
                    console.log("Peer to Peer call");
                    if (this.webRtcPeers[uUID]) {
                        this.webRtcPeers[uUID].generateOffer((error, offerSdp) => {
                            this.onOfferCall(error, offerSdp, this.mediaType, uUID, params);
                            console.log("Call autoConnected successfully", uUID);
                        }, { iceRestart: true });
                    }
                    else {
                        console.log("creating peer connection to generate offer");
                        return this.Call(params);
                    }
                }
                else {
                    console.log("Non peer call, this.Call is called with params", params);
                    return this.Call(params);
                }
            }
            else {
                //TODO handle other call types
                return { message: "Auto reconnect logic not available for call type -> " + params.call_type, status: false };
            }
        }
        else {
            return {
                message: "Unable to auto reconnect call, Session Info not available for this session -> " + uUID,
                status: false
            };
        }
    }
    PeerToPeerReInvite(messageData) {
        if (messageData.sdp_type === "sdpAnswer") {
            try {
                if (this.webRtcPeers[messageData.sessionUUID]) {
                    if (messageData.sdp) {
                        this.webRtcPeers[messageData.sessionUUID].processAnswer(messageData.sdp, (error) => {
                            if (error) {
                                EventHandler_1.default.SessionSDP(error, this);
                                return console.error(error);
                            }
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            console.log("Peer to Peer call is connected successfully!");
            return;
        }
        let uUID = messageData.sessionUUID;
        let sdp = messageData.sdp ? messageData.sdp : messageData.sdpOffer;
        if (this.sessionInfo && this.sessionInfo[uUID] && this.sessionInfo[uUID].lastReinviteTime && messageData.timestamp < this.sessionInfo[uUID].lastReinviteTime) {
            console.log("Conflict! No need to process Answer, As this peer just send a latest reInvite and answer will be processed on other peer side");
            return;
        }
        if (messageData.call_type === "one_to_one") {
            if (this.webRtcPeers[uUID]) {
                this.webRtcPeers[uUID].processOffer(sdp, (error, answerSdp) => {
                    if (error) {
                        EventHandler_1.default.SessionSDP(error, this);
                        return console.error(error);
                    }
                    this.onOfferIncomingCall(error, answerSdp, null, uUID, messageData.isPeer);
                    return uUID;
                });
            }
            else {
                this.sessionInfo[uUID] = {
                    incomingCallData: { isPeer: 1, callerSDP: sdp },
                    isPeer: 1,
                    callerSDP: sdp,
                    sessionUUID: uUID,
                    isInitiator: 0,
                    isSDPAnswerSend: 0,
                };
                //TODO create peerConnection if not exist
            }
        }
    }
    ///////////////////////////////////////////////
    ///////////////////// one to one call
    async Call(params) {
        return new Promise(async (resolve, rejects) => {
            if (this.socketState !== "registered") {
                rejects({ message: "Not registered with vdotok! Current state -> " + this.socketState, status: false });
                return;
            }
            let uUID = (params.hasOwnProperty("sessionUUID")) ? params["sessionUUID"] : new Date().getTime().toString();
            this.videoStatus[uUID] = (params.video ? 1 : 0);
            this.isEmptyVideoStarted[uUID] = !this.videoStatus[uUID];
            this.audioStatus[uUID] = (params.audio ? 1 : 0);
            this.isEmptyAudioStarted[uUID] = !this.audioStatus[uUID];
            params.sessionUUID = params.uUID = uUID;
            this.mediaType = "video";
            this.to = Array.isArray(params.to) ? params.to : [params.to];
            this.currentFromUser = this.currentUser;
            params.isPeer = params.isPeer || 1;
            this.sessionInfo[uUID] = { call_type: "one_to_one", isPeer: params.isPeer, isInitiator: 1 };
            if (!params.data) {
                params.data = {};
            }
            params.data.stateInfo = { video: params.video, audio: params.audio };
            this.sessionInfo[uUID].currentCallParams = params;
            let options = {};
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, error: e });
            }
            if (options.localVideo) {
                this.localVideos[uUID] = options.localVideo;
            }
            this.webRtcPeers[uUID] = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                if (error) {
                    rejects(error);
                    this.onErrorHandler();
                    return console.error(error);
                }
                this.webRtcPeers[uUID].generateOffer((error, offerSdp) => {
                    this.onOfferCall(error, offerSdp, this.mediaType, uUID, params);
                    resolve(uUID);
                });
            });
        });
    }
    AudioCall(params) {
        return new Promise(async (resolve, rejects) => {
            let uUID = (params.hasOwnProperty("sessionUUID")) ? params["sessionUUID"] : new Date().getTime().toString();
            this.videoStatus[uUID] = 0;
            this.isEmptyVideoStarted[uUID] = !this.videoStatus[uUID];
            this.audioStatus[uUID] = 1;
            this.isEmptyAudioStarted[uUID] = !this.audioStatus[uUID];
            params.sessionUUID = params.uUID = uUID;
            params.isPeer = params.isPeer || 1;
            this.sessionInfo[uUID] = { call_type: "one_to_one", isPeer: params.isPeer, isInitiator: 1 };
            this.mediaType = "audio";
            this.to = Array.isArray(params.to) ? params.to : [params.to];
            this.currentFromUser = this.currentUser;
            this.localVideos[uUID] = params.localVideo;
            if (!params.data) {
                params.data = {};
            }
            params.data.stateInfo = { video: 0, audio: params.audio };
            this.sessionInfo[uUID].currentCallParams = params;
            let options = {};
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, error: e });
            }
            this.webRtcPeers[uUID] = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                if (error) {
                    rejects(error);
                    this.onErrorHandler();
                    return console.error(error);
                }
                this.webRtcPeers[uUID].generateOffer((error, offerSdp) => {
                    this.onOfferCall(error, offerSdp, "audio", uUID, params);
                    resolve(uUID);
                });
            });
        });
    }
    //////////////////// end one to one call
    ///////////////////////////////////////////////////
    OnPublicURL(messageData) {
        EventHandler_1.default.PublicURL(messageData, this);
    }
    OnExistingParticipants(messageData) {
        if (messageData.total_participants) {
            this.participantsInCall[messageData.sessionUUID] = messageData.total_participants ? (messageData.total_participants) : (this.participantsInCall[messageData.sessionUUID] + 1);
            this.sendCustomRPC({
                type: "Viewer_Count",
                message: "Viewers count updated.",
                uuid: messageData.sessionUUID,
                count: this.participantsInCall[messageData.sessionUUID] - 1
            }, messageData.sessionUUID);
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnExistingParticipants(messageData);
        }
    }
    OnNewParticipant(messageData) {
        EventHandler_1.default.OnNewParticipant(messageData, this);
        this.participantsInCall[messageData.sessionUUID] = messageData.total_participants ? (messageData.total_participants) : (this.participantsInCall[messageData.sessionUUID] + 1);
        this.sendCustomRPC({
            type: "Viewer_Count",
            message: "Viewers count updated.",
            uuid: messageData.sessionUUID,
            count: this.participantsInCall[messageData.sessionUUID] - 1
        }, messageData.sessionUUID);
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnNewParticipant(messageData);
        }
    }
    OnParticipantLeft(messageData) {
        this.participantsInCall[messageData.sessionUUID] = messageData.total_participants ? (messageData.total_participants) : (this.participantsInCall[messageData.sessionUUID] - 1);
        this.sendCustomRPC({
            type: "Viewer_Count",
            message: "Viewers count updated.",
            uuid: messageData.sessionUUID,
            count: this.participantsInCall[messageData.sessionUUID] - 1
        }, messageData.sessionUUID);
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnParticipantLeft(messageData);
        }
    }
    getParticipantsCount(uuid) {
        if (this.participantsInCall[uuid] < 0) {
            this.participantsInCall[uuid] = 0;
        }
        return this.participantsInCall[uuid] - 1;
    }
    StopSession(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionEnd(messageData, this);
        this.DisposeWebrtc(true);
    }
    SessionInvite(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionInvite(messageData, this);
    }
    SessionCancel(messageData, type = 'cancel') {
        console.log("SessionCancel messageData", { messageData });
        if (type != 'break') {
            this.participantsInCall[messageData.sessionUUID] = messageData.total_participants ? (messageData.total_participants) : (this.participantsInCall[messageData.sessionUUID] - 1);
            this.sendCustomRPC({
                type: "Viewer_Count",
                message: "Viewers count updated.",
                uuid: messageData.sessionUUID,
                count: this.participantsInCall[messageData.sessionUUID] - 1
            }, messageData.sessionUUID);
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnSessionCancel(messageData);
            return;
        }
        EventHandler_1.default.SessionCancel(messageData, this);
    }
    SetCallerStatus(messageData) {
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.SetParticipantStatus(messageData);
            return;
        }
        EventHandler_1.default.SetCallerStatus(messageData, this);
    }
    async AddCandidate(message) {
        if (this.rtcPears) {
            await this.rtcPears.addIceCandidate(message.candidate);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.AddCandidate(message);
            return;
        }
        if (this.webRtcPeers[message.sessionUUID]) {
            this.webRtcPeers[message.sessionUUID].addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else if (this.webRtcPeer) {
            this.webRtcPeer.addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else {
            EventHandler_1.default.OnAddCandidate("No Peer connection found!", this);
            return console.error('Error adding candidate: ' + "No Peer connection found!");
        }
    }
    CallResponse(response) {
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: response.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.CallResponse(response);
            return;
        }
        EventHandler_1.default.OnCallResponse(response, this);
        console.info('CallResponse', this.webRtcPeers[response.sessionUUID], response);
        if (response.response == 'accepted') {
            this.webRtcPeers[response.sessionUUID].processAnswer(response.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: message.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.SessionStart(message);
            return;
        }
        EventHandler_1.default.SessionStart(message, this);
        if (this.webRtcPeers[message.sessionUUID]) {
            if (message.sdpAnswer) {
                this.webRtcPeers[message.sessionUUID].processAnswer(message.sdpAnswer, (error) => {
                    if (error) {
                        EventHandler_1.default.SessionSDP(error, this);
                        return console.error(error);
                    }
                });
            }
            else {
                console.log("This is peer to peer call no need to process Answer on receiver side.");
            }
        }
        else if (this.webRtcPeer) {
            this.webRtcPeer.processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
        else {
            EventHandler_1.default.SessionSDP("Peer connection not found!", this);
            return console.error("Peer connection not found!");
        }
    }
    async AcceptCall(params) {
        return new Promise(async (resolve, rejects) => {
            var _a, _b, _c;
            this.localVideo = params.localVideo;
            let from = this.currentFromUser;
            let uUID = params.uUID = params.sessionUUID;
            this.videoStatus[uUID] = (params.video ? 1 : 0);
            this.isEmptyVideoStarted[uUID] = !this.videoStatus[uUID];
            this.audioStatus[uUID] = (params.audio ? 1 : 0);
            this.isEmptyAudioStarted[uUID] = !this.audioStatus[uUID];
            this.UUIDSessions[from] = (_a = this.UUIDSessions[from]) !== null && _a !== void 0 ? _a : uUID;
            this.UUIDSessionTypes[uUID] = (_b = this.UUIDSessionTypes[uUID]) !== null && _b !== void 0 ? _b : "one_to_one";
            this.UUIDSessionMediaTypes[from] = (_c = this.UUIDSessionMediaTypes[from]) !== null && _c !== void 0 ? _c : (!params.video ? 'audio' : 'video');
            let options = {};
            params.to = [this.currentUser];
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, error: e });
            }
            if (options.localVideo) {
                this.localVideos[uUID] = options.localVideo;
            }
            if (uUID) {
                if (!this.sessionInfo[uUID]) {
                    this.sessionInfo[uUID] = { call_type: "one_to_one", isPeer: params.isPeer | 1, isInitiator: 0 };
                }
                this.sessionInfo[uUID].currentCallParams = params;
                this.webRtcPeers[uUID] = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                    if (error) {
                        this.onErrorHandler();
                        rejects(error);
                    }
                    let isPeer = params.isPeer || (this.sessionInfo[uUID] && this.sessionInfo[uUID].incomingCallData ? this.sessionInfo[uUID].incomingCallData.isPeer : 0);
                    let sdp = params.sdp || (this.sessionInfo[uUID] && this.sessionInfo[uUID].incomingCallData ? this.sessionInfo[uUID].incomingCallData.callerSDP : "");
                    if (isPeer) {
                        //This is peer to peer call
                        this.webRtcPeers[uUID].processOffer(sdp, (error, answerSdp) => {
                            if (error) {
                                EventHandler_1.default.SessionSDP(error, this);
                                return console.error(error);
                            }
                            this.onOfferIncomingCall(error, answerSdp, from, uUID);
                            resolve(uUID);
                        });
                    }
                    else {
                        //this is call through server
                        this.webRtcPeers[uUID].generateOffer((error, offerSdp) => {
                            this.onOfferIncomingCall(error, offerSdp, from, uUID);
                            resolve(uUID);
                        });
                    }
                });
            }
            else {
                rejects("Please provide session id of call you want to join!");
            }
        });
    }
    RejectCall(from = null, uuid = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (!uuid) {
            uuid = this.UUIDSessions[from];
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'reject',
        // 	message : 'user declined'
        // };
        let response = {
            "requestType": "session_invite",
            "type": "response",
            "from": from,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": uuid,
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false, from, uuid);
    }
    sendSessionBusy(from = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        let response = {
            "requestType": "session_busy",
            "referenceID": this.currentUser,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
    }
    onOfferIncomingCall(error, answerSdp, from, uUID = null, isPeer = 0) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        if (!uUID && from) {
            uUID = this.UUIDSessions[from];
        }
        let response = {
            "type": "response",
            "requestType": "session_invite",
            "sdpOffer": answerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": uUID,
            "responseCode": 200,
            "mcToken": this.mcToken,
            "referenceID": this.currentUser,
            "responseMessage": "accepted"
        };
        if (isPeer) {
            delete response.sdpOffer;
            response.sdp = answerSdp;
            response.sdp_type = 'sdpAnswer';
            response.requestType = 'p2p_reInvite';
        }
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {});
        this.sessionInfo[uUID].isSDPAnswerSend = 1;
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken, reConnect = 0) {
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        this.streamHelper.getNatType(this.stunServer).then((data) => {
            this.currentUser = referenceID;
            this.authorizationToken = authorizationToken;
            let regMessage = new RegisterModel_1.default();
            if (data.natType && data.publicIPs) {
                regMessage.natType = data.natType;
                regMessage.publicIPs = data.publicIPs;
            }
            regMessage.requestID = new Date().getTime().toString();
            regMessage.projectID = this.projectID;
            regMessage.tenantID = this.projectID;
            regMessage.referenceID = referenceID;
            regMessage.authorizationToken = authorizationToken;
            if (reConnect) {
                regMessage.reConnect = 1;
            }
            regMessage.SendRegisterRequest(this.ws);
        });
    }
    /************************************************************************
     *
     * Call one to many Broadcasting
     *
     */
    PulicBroadCast(params) {
        params["broadcastType"] = 1;
        params["to"] = [];
        return this.Broadcasting(params);
    }
    async createOptions(params) {
        let isInitiator = false;
        if (this.sessionInfo && this.sessionInfo[params.uUID]) {
            isInitiator = this.sessionInfo[params.uUID].isInitiator;
            params.isPeer = this.sessionInfo[params.uUID].isPeer;
        }
        let vidContraints = {
            mandatory: {
                maxFrameRate: 30,
                minFrameRate: 15,
                /*minWidth: 1080,
                maxWidth: 1080,
                minHeight: 1920,
                maxHeight: 1920*/
            }
        };
        if (!params.video)
            vidContraints = false;
        var constraints = {
            audio: params.audio,
            video: vidContraints
        };
        (0, CommonHelper_1.SetPlaysInline)(params.localVideo);
        var options = {
            mediaConstraints: constraints,
            onicecandidate: (candidate) => this.onIceCandidate(candidate, this.sessionInfo[params.uUID].isInitiator ? this.currentUser : this.currentFromUser),
            onerror: this.onError,
            status: true
        };
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (params.videoType == "screen" || params.videoType == "desktop") {
            params.videoType = "screen";
        }
        if (params.videoType == "camera" || params.videoType == "cam" || params.videoType == "user" || params.videoType == "webcam") {
            params.videoType = "camera";
        }
        if (params.videoType != "camera" && params.videoType != "screen") {
            console.info("Valid options are camera or screen, choosing camera");
            params.videoType = "camera";
        }
        let streams = await this.streamHelper.getStream(params.audio, params.video, params.videoType);
        if (params.video && !streams.video) {
            return { status: false, message: "Unable to get video stream" };
        }
        if (streams.video && streams.audio) {
            options.videoStream = streams.combine;
        }
        else if (streams.audio) {
            options.audioStream = streams.audio;
        }
        if (params.localVideo) {
            options.localVideo = params.localVideo;
        }
        else if (streams.combine) {
            options.localVideo = this.getTempVideo(streams.combine);
        }
        if (params.remoteVideo) {
            options.remoteVideo = params.remoteVideo;
        }
        if (streams.video && params.videoType === "screen") {
            streams.video.getVideoTracks()[0].onended = () => {
                this.screenStreamStopped(params.uUID);
            };
        }
        this.nativeScreenShare[params.uUID] = streams.nativeScreenShare;
        if (params.isPeer) {
            if (isInitiator) {
                return new Promise((resolve, rejects) => {
                    this.sendStateRPC({}, -1, 0, 'session_init', {
                        to: params.to,
                        from: this.currentFromUser,
                        media_type: (!params.video ? 'audio' : 'video'),
                        session_type: "call",
                        call_type: "one_to_one"
                    });
                    let initInterval = setInterval(() => {
                        if (this.turnConfigs && this.turnConfigs.receiver_status && !this.turnConfigs.receiver_status.status) {
                            this.onErrorHandler();
                            rejects({ status: false, message: "User is offline!" });
                        }
                        if (this.turnConfigs) {
                            clearInterval(initInterval);
                            options = this.setStunTurn(options);
                            resolve(options);
                        }
                    }, 100);
                });
            }
            else {
                options = this.setStunTurn(options);
            }
        }
        return options;
    }
    setStunTurn(options) {
        if (this.turnConfigs.status) {
            options.configuration = {
                iceServers: [{
                        urls: [
                            "stun:" + this.stunServer,
                        ]
                    }, {
                        username: this.turnConfigs.username,
                        credential: this.turnConfigs.credential,
                        urls: this.turnConfigs.url
                    }]
            };
        }
        this.turnConfigs = null;
        return options;
    }
    async startScreenShare(uUID, extraData = null) {
        if (!this.screenSharingMobile) {
            this.screenSharingMobile = new ScreenSharingMobile_1.default(this, uUID);
        }
        let result = await this.screenSharingMobile.getScreenShareStream(false, true);
        if (extraData) {
            extraData.image_screen = true;
        }
        this.sendStateRPC({ status: 1 }, uUID, 0, "custom_billing");
        this.sendStateInformation(1, 0, uUID, extraData);
        return result;
    }
    pauseScreenShare(uUID, extraData = null) {
        if (this.screenSharingMobile) {
            this.screenSharingMobile.pauseScreenCapture = true;
            if (extraData) {
                extraData.image_screen = true;
            }
            this.sendStateRPC({ status: 0 }, uUID, 0, "custom_billing");
            this.sendStateInformation(0, 0, uUID, extraData);
            return true;
        }
        return false;
    }
    resumeScreenShare(uUID, extraData = null) {
        if (this.screenSharingMobile) {
            this.screenSharingMobile.pauseScreenCapture = false;
            if (extraData) {
                extraData.image_screen = true;
            }
            this.sendStateRPC({ status: 1 }, uUID, 0, "custom_billing");
            this.sendStateInformation(1, 0, uUID, extraData);
            return true;
        }
        return false;
    }
    async takeScreenImage() {
        if (this.screenSharingMobile) {
            return await this.screenSharingMobile.startToGeeCaptureScreen();
        }
        return false;
    }
    getTempVideo(stream) {
        const video = document.createElement("video");
        this.setSrcObject(stream, video);
        video.className = 'vdotok-temp-video';
        video.muted = true;
        video.volume = 0;
        video.width = stream.width || 640;
        video.height = stream.height || 480;
        return video;
    }
    setSrcObject(stream, element) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const URL = window.URL || window.webkitURL;
        if ("srcObject" in element) {
            element.srcObject = stream;
        }
        else if ("mozSrcObject" in element) {
            element.mozSrcObject = stream;
        }
        else if ("createObjectURL" in URL) {
            element.src = URL.createObjectURL(stream);
        }
        else {
            console.log("createObjectURL/srcObject both are not supported.");
        }
    }
    async Broadcasting(params) {
        return new Promise(async (resolve, rejects) => {
            let uUID = (params.hasOwnProperty("sessionUUID")) ? params["sessionUUID"] : new Date().getTime().toString();
            this.mediaType = params.video ? "video" : "audio";
            this.videoStatus[uUID] = (params.video ? 1 : 0);
            this.isEmptyVideoStarted[uUID] = !this.videoStatus[uUID];
            this.audioStatus[uUID] = (params.audio ? 1 : 0);
            this.isEmptyAudioStarted[uUID] = !this.audioStatus[uUID];
            params.sessionUUID = params.uUID = uUID;
            this.to = params.to;
            this.currentFromUser = this.currentUser;
            this.sessionInfo[uUID] = { call_type: "one_to_many", isInitiator: 1 };
            let assUUID = (params.hasOwnProperty("associatedSessionUUID")) ? params["associatedSessionUUID"] : "";
            let isPublic = (params.hasOwnProperty("broadcastType")) ? params["broadcastType"] : 0;
            this.localVideos[uUID] = params.localVideo;
            let session_type = "call";
            this.sessionInfo[uUID].currentCallParams = params;
            let options = {};
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    this.onErrorHandler();
                    rejects(options);
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, error: e });
            }
            if (options.localVideo) {
                this.localVideos[uUID] = options.localVideo;
            }
            this.webRtcPeers[uUID] = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
                if (error) {
                    rejects(error);
                    return console.error(error);
                }
                this.webRtcPeers[uUID].generateOffer((error, offerSdp) => {
                    this.onOfferOneToManyCall(error, offerSdp, uUID, assUUID, isPublic, session_type, params.re_invite, params.ref_id, params.isRecord);
                    resolve([this.streamHelper, uUID]);
                });
            });
        });
    }
    onErrorHandler() {
        if (this.streamHelper) {
            this.streamHelper.removeAllStreams();
        }
    }
    onOfferOneToManyCall(error, offerSdp, uUID, assUUID, isPublic, session_type, re_invite = 0, ref_id = 0, isRecord = 0) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.session_type = session_type;
        //////////////////////////////////////////
        ///////for public url/group
        callRequest.custom_field("broadcastType", isPublic);
        callRequest.custom_field("associatedSessionUUID", assUUID);
        if (re_invite && ref_id) {
            callRequest.requestType = 're_invite';
            callRequest.referenceID = ref_id;
        }
        else {
            callRequest.requestType = 'session_invite';
            delete callRequest.referenceID;
        }
        if (isRecord) {
            callRequest.isRecord = 1;
        }
        else {
            callRequest.isRecord = 0;
        }
        ///////////////////////////////////////////
        ///////////////////////////////////////////
        callRequest.SendCallRequest(this.ws);
        if (this.webRtcPeers && this.webRtcPeers[uUID] && this.webRtcPeers[uUID].peerConnection) {
            //@ts-ignore
            this.webRtcPeers[uUID].peerConnection.addEventListener("iceconnectionstatechange", this.onIceError.bind(this, uUID), false);
        }
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {
            fromVideo: true,
            reInvite: re_invite
        });
    }
    onIceError(uUID, ev) {
        let states = ['closed', 'failed', 'disconnected'];
        if (this.webRtcPeers && this.webRtcPeers[uUID] && this.webRtcPeers[uUID].peerConnection && this.webRtcPeers[uUID].peerConnection.iceConnectionState && states.includes(this.webRtcPeers[uUID].peerConnection.iceConnectionState)) { //it will come for all ice
            if (this.reInviteTimeout[uUID]) {
                clearTimeout(this.reInviteTimeout[uUID]);
            }
            console.log("SDK iceconnectionstatechange", ev);
            this.reInviteTimeout[uUID] = setTimeout(() => {
                console.log("Re_inviting because ice state = ", this.webRtcPeers[uUID].peerConnection.iceConnectionState);
                try {
                    let result = this.autoReconnectCall(uUID);
                    console.log(result);
                }
                catch (e) {
                    console.log("failed to reinvite on ice fail", e);
                }
            }, 1000);
        }
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @param media_type
     * @param uUID
     * @param params
     * @returns
     */
    onOfferCall(error, offerSdp, media_type, uUID, params) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = new Date().getTime().toString();
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.isPeer = params.isPeer; //For peer to peer call
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.type = 'request';
        if (params.data && Object.keys(params.data).length) {
            callRequest.data = params.data;
        }
        else {
            callRequest.data = {};
        }
        if (params.with_ai) {
            callRequest.call_type = "one_to_one_with_ai";
        }
        else {
            callRequest.call_type = "one_to_one";
        }
        if (params.re_invite && params.ref_id) {
            callRequest.referenceID = params.ref_id;
            callRequest.requestType = 're_invite';
            if (callRequest.isPeer) {
                callRequest.requestType = 'p2p_reInvite';
                callRequest.sdp = offerSdp;
                callRequest.sdp_type = "sdpOffer";
                this.sessionInfo[uUID].lastReinviteTime = callRequest.timestamp = new Date().getTime().toString();
            }
            callRequest.custom_field("fromUser", this.currentUser);
            callRequest.deleteKey('from');
            callRequest.deleteKey('to');
        }
        else {
            callRequest.requestType = 'session_invite';
            delete callRequest.referenceID;
        }
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {});
        if (params.re_invite) {
            EventHandler_1.default.SetCallerStatus({
                videoInformation: this.videoStatus[uUID],
                audioInformation: this.audioStatus[uUID],
                sessionUUID: uUID,
                referenceID: params.ref_id,
                data: {}
            }, this);
        }
    }
    DisposeWebrtc(status, from = null, onlyUUID = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (this.webRtcPeers) {
            for (var uUID in this.webRtcPeers) {
                if (!onlyUUID || (onlyUUID && onlyUUID == uUID)) //only a single session get deleted or all sessions
                 {
                    if (this.webRtcPeers.hasOwnProperty(uUID)) {
                        this.webRtcPeers[uUID].dispose();
                        if (status) {
                            this.sendDisposePacket(uUID);
                        }
                        if (this.webRtcPeers[uUID] && this.webRtcPeers[uUID].peerConnection) {
                            this.webRtcPeers[uUID].peerConnection.removeEventListener("iceconnectionstatechange", this.onIceError, false);
                        }
                        delete this.webRtcPeers[uUID];
                        delete this.sessionInfo[uUID];
                    }
                }
            }
        }
        if (this.webRtcPeer) {
            this.webRtcPeer.dispose();
            this.webRtcPeer = null;
        }
        if (status) {
            this.sendDisposePacket(this.UUIDSessions[from]);
        }
        let session = this.UUIDSessions[from];
        delete this.UUIDSessionTypes[session];
        delete this.UUIDSessions[from];
        /*if(this.pingWorker)
        {
          this.pingWorker.postMessage({method: 'clearPingInterval'});
        }*/
    }
    sendDisposePacket(uUID) {
        var messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": uUID,
            "mcToken": this.mcToken
        };
        this.SendPacket(messageStop);
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.UUIDSessions[referenceID]
        };
        console.log("Local candidate Msg", message);
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage, this.ws.readyState);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall(from) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (this.localVideo) {
            this.localVideos.push(this.localVideo);
        }
        for (let UUID in this.localVideos) {
            let video = this.localVideos[UUID];
            if (video && video.srcObject) {
                video.srcObject.getTracks().forEach((track) => {
                    track.stop();
                });
            }
        }
        if (this.streamHelper) {
            this.streamHelper.removeAllStreams();
        }
        this.DisposeWebrtc(true);
        if (this.socketCloseCheck) {
            clearInterval(this.socketCloseCheck);
        }
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    sendStateInformation(video = 0, audio = 0, uUID = null, data = null) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        this.audioStatus[session] = audio;
        this.videoStatus[session] = video;
        let state = {
            "requestType": "state_information",
            "type": "request",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": session,
            "mcToken": this.McToken,
            "referenceID": this.currentUser,
            "audioInformation": audio,
            "videoInformation": video
        };
        if (data) {
            state.data = data;
        }
        this.SendPacket(state);
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute(uUID) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        if (this.localVideos[session] && this.localVideos[session] != undefined) {
            let video = (this.videoStatus[session] == 1) ? 1 : 0;
            this.audioStatus[session] = 0;
            this.sendStateInformation(video, 0, session, { fromAudio: true });
            let localVideo = this.localVideos[session];
            if (localVideo.srcObject != null && localVideo.srcObject.getAudioTracks() && localVideo.srcObject.getAudioTracks()[0])
                localVideo.srcObject.getAudioTracks()[0].stop();
            if (localVideo.localName == "audio" && localVideo.audioTracks && localVideo.audioTracks[0]) {
                localVideo.audioTracks[0].stop();
            }
        }
    }
    async replaceStreamTracks(stream, uuid, type = 'video') {
        let replaced = false;
        let senders = this.webRtcPeers[uuid].peerConnection.getSenders();
        for (const sender of senders) {
            if (sender && sender.track && sender.track.kind === type) {
                let t = (stream.getTracks().filter((track) => track.kind === type))[0];
                replaced = await sender.replaceTrack(t);
            }
        }
        return replaced;
    }
    /**
     * SetMicMute
     */
    async SetMicUnmute(uUID) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (this.localVideos[session] && this.localVideos[session] != undefined) {
            let video = (this.videoStatus[session] == 1) ? 1 : 0;
            this.audioStatus[session] = 1;
            let audioStream = null;
            let finalStream = null;
            let localVideo = this.localVideos[session];
            if (this.isEmptyAudioStarted[uUID] || true) {
                try {
                    audioStream = (await this.streamHelper.getStream(1, 0, 'audio')).audio;
                    if (localVideo && localVideo.srcObject && localVideo.srcObject.getAudioTracks() && localVideo.srcObject.getAudioTracks()[0])
                        localVideo.srcObject.getAudioTracks()[0].stop();
                    let replaced = await this.replaceStreamTracks(audioStream, uUID, 'audio');
                    this.isEmptyAudioStarted[uUID] = 0;
                }
                catch (e) {
                    console.log(e);
                    return { status: false, error: e };
                }
            }
            this.sendStateInformation(video, 1, session, { fromAudio: true });
            if (audioStream) {
                finalStream = new MediaStream();
                audioStream.getAudioTracks().forEach((t) => {
                    finalStream.addTrack(t);
                });
            }
            if (localVideo && localVideo.srcObject) {
                if (finalStream) {
                    if (localVideo.srcObject.getVideoTracks() && localVideo.srcObject.getVideoTracks()[0]) {
                        localVideo.srcObject.getVideoTracks().forEach((t) => {
                            finalStream.addTrack(t);
                        });
                    }
                    localVideo.srcObject = finalStream;
                }
                localVideo.srcObject.getAudioTracks()[0].enabled = true;
            }
            else if (localVideo.localName == "audio") {
                if (finalStream) {
                    if (localVideo.videoTracks && localVideo.videoTracks[0]) {
                        finalStream.addTrack(localVideo.videoTracks[0]);
                    }
                    localVideo.srcObject = finalStream;
                }
                localVideo.audioTracks[0].enabled = true;
            }
            return { status: true, error: false };
        }
    }
    /**
     * SetCameraOn
     */
    async SetCameraOn(uUID, facingMode = 'user', extraData = null) {
        if (!(this.webRtcPeers[uUID] && this.webRtcPeers[uUID].peerConnection)) {
            return { status: false, error: "Peer Connection not found!", tryNewCall: true };
        }
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        let videoStream = null;
        let finalStream = null;
        let done = 0;
        this.videoStatus[session] = 1;
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (this.isEmptyVideoStarted[uUID] || true) {
            try {
                if ((facingMode === "environment" && (await this.streamHelper.getBackCameraId())) || facingMode !== "environment") {
                    if (this.localVideos[session] && this.localVideos[session].srcObject && this.localVideos[session].srcObject.getVideoTracks()[0])
                        this.localVideos[session].srcObject.getVideoTracks()[0].stop();
                    let vResults = (await this.streamHelper.getStream(0, 1, (facingMode == 'screen' ? 'screen' : 'camera'), facingMode));
                    videoStream = vResults.video;
                    if (!videoStream) {
                        return { status: false, error: "Unable to get Video Stream!" };
                    }
                    if (videoStream && facingMode == 'screen') {
                        videoStream.getVideoTracks()[0].onended = () => {
                            this.screenStreamStopped(session);
                        };
                    }
                    this.nativeScreenShare[session] = vResults.nativeScreenShare;
                    let replaced = await this.replaceStreamTracks(videoStream, uUID, 'video');
                    this.isEmptyVideoStarted[uUID] = 0;
                    done = 1;
                }
                else {
                    return { status: false, error: { message: 'Back Camera not found!' } };
                }
            }
            catch (e) {
                this.videoStatus[session] = 0;
                console.log("Error", e);
                return { status: false, error: e };
            }
        }
        if (done && this.localVideos[session] && this.localVideos[session] != undefined) {
            let localVideo = this.localVideos[session];
            this.sendStateInformation(1, this.audioStatus[session], session, extraData);
            if (videoStream) {
                finalStream = new MediaStream();
                videoStream.getVideoTracks().forEach((t) => {
                    finalStream.addTrack(t);
                });
            }
            if (localVideo && localVideo.srcObject) {
                if (finalStream) {
                    if (localVideo.srcObject.getAudioTracks()[0]) {
                        localVideo.srcObject.getAudioTracks().forEach((t) => {
                            finalStream.addTrack(t);
                        });
                    }
                    localVideo.srcObject = finalStream;
                }
                this.localVideos[session].srcObject.getVideoTracks()[0].enabled = true;
            }
            return { status: true, error: false };
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff(uUID, extraData = null) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        try {
            if (this.localVideos[session] && this.localVideos[session] != undefined) {
                this.videoStatus[session] = 0;
                if (this.localVideos[session].srcObject && this.localVideos[session].srcObject.getVideoTracks()[0]) {
                    this.localVideos[session].srcObject.getVideoTracks()[0].stop();
                    this.localVideos[session].srcObject.getVideoTracks()[0].onended = null;
                }
                this.sendStateInformation(0, this.audioStatus[session], session, extraData);
                return true;
            }
        }
        catch (e) {
            console.log("Error while turning off video", e);
            return false;
        }
    }
    sendCustomRPC(data, uUID) {
        let request = {};
        request.requestType = 'custom_rpc';
        request.type = 'request';
        request.requestID = new Date().getTime().toString();
        request.sessionUUID = uUID ? uUID : this.UUIDSessions[this.currentUser];
        request.mcToken = this.McToken;
        request.referenceID = this.currentUser;
        request.data = data;
        this.ws.send(JSON.stringify(request));
    }
    sendStateRPC(data, uUID, store = 1, requestType = 'hv_info', extraParams = {}) {
        let request = {};
        request.requestType = requestType;
        //hv_info --> Host to All viewers Communication
        request.type = 'request';
        request.requestID = new Date().getTime().toString();
        if (uUID === -1) {
            delete request.sessionUUID;
        }
        else {
            request.sessionUUID = uUID ? uUID : this.UUIDSessions[this.currentUser];
        }
        request.mcToken = this.McToken;
        request.referenceID = this.currentUser;
        request.data = data;
        request.store = store; //This information should be save or not for new viewers
        if (extraParams && Object.keys(extraParams).length) {
            request = Object.assign(Object.assign({}, request), extraParams);
        }
        this.ws.send(JSON.stringify(request));
    }
    screenStreamStopped(uuid) {
        EventHandler_1.default.screenOffByUser({ sessionUUID: uuid }, this);
    }
    registerPingWorker() {
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    clearPingInterval();
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            }
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing) {
                    this.sendPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 5000 });
        }
    }
    sendPing() {
        try {
            let pingCount = 0;
            /*for (var uUID in this.webRtcPeers) {
              if(this.pingSessionStopped[uUID])
              {
                console.log("SDK not sending Ping session already stopped from server with 400 pong for: ", uUID);
              }
              else
              {
                pingCount++;
                this.sendStateRPC({}, uUID, 0, 'session_ping')
                console.log("SDK Ping sent for: ", uUID);
              }
            }*/
            if (!pingCount || true) {
                this.sendStateRPC({}, -1, 0, 'ping');
                console.log("SDK Ping sent!");
            }
        }
        catch (e) {
            console.log("Error while sending ping to server.", e);
        }
    }
    updateBandwidthRestriction(sdp, bandwidth) {
        let modifier = 'AS';
        // @ts-ignore
        if (adapter.browserDetails.browser === 'firefox') {
            bandwidth = (bandwidth >>> 0) * 1000;
            modifier = 'TIAS';
        }
        if (sdp.indexOf('b=' + modifier + ':') === -1) {
            // insert b= after c= line.
            sdp = sdp.replace(/c=IN (.*)\r\n/, 'c=IN $1\r\nb=' + modifier + ':' + bandwidth + '\r\n');
        }
        else {
            sdp = sdp.replace(new RegExp('b=' + modifier + ':.*\r\n'), 'b=' + modifier + ':' + bandwidth + '\r\n');
        }
        return sdp;
    }
    removeBandwidthRestriction(sdp) {
        return sdp.replace(/b=AS:.*\r\n/, '').replace(/b=TIAS:.*\r\n/, '');
    }
    Disconnect() {
        if (this.pingWorker) {
            this.pingWorker.postMessage({ method: 'clearPingInterval' });
        }
        if (this.reconnectCheckInterval) {
            clearInterval(this.reconnectCheckInterval);
        }
        if (this.socketCloseCheck) {
            clearInterval(this.socketCloseCheck);
        }
        this.selfClose = true;
        if (this.ws) {
            this.ws.close(1000, "Work complete");
        }
        this.webRtcPeers = [];
        this.sessionInfo = [];
    }
}
exports.default = Client;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
const CommonHelper_1 = __webpack_require__(5);
class EventHandlerService {
    constructor() {
    }
    OnAuthError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "Your credentials for vidtok are invalid." + error });
    }
    OnAuthInitialError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "You are not connected with vidtok server." + error });
    }
    OnConnection(res, instance) {
        instance.emit("connected", { type: "Success", message: "Vidtok server is connected successfully" });
    }
    OnDisconnection(err, instance) {
        instance.emit("disconnected", { type: "Error", message: "Vidtok server is disconnected." + err });
    }
    OnRegister(res, instance) {
        let socResponse = res.response;
        let status = socResponse.trim();
        if (status == "accepted") {
            instance.emit("register", { type: "REGISTER_ACCEPTED", message: "User is registered successfully" });
        }
        else {
            let message = socResponse.split(":")[1];
            message = message.trim();
            instance.emit("error", { type: "REGISTER_REJECTED", message: message });
        }
    }
    OnCallResponse(res, instance) {
        let status = res.response;
        let from = res.from;
        if (status == "accepted") {
            let resObject = {
                type: "CALL_ACCEPTED",
                message: "Call is accepted by receiver",
                from: from,
                call_type: "one_to_one",
                uuid: res.sessionUUID,
                data: res.data
            };
            if (res["call_type"])
                resObject["call_type"] = res["call_type"];
            instance.emit("call", resObject);
        }
        else {
            let resObject = {
                type: "CALL_REJECTED",
                message: "Call is rejected by receiver",
                from: from,
                call_type: "one_to_one",
                uuid: res.sessionUUID,
                data: res.data
            };
            if (res["call_type"])
                resObject["call_type"] = res["call_type"];
            instance.emit("call", resObject);
            instance.DisposeWebrtc(true);
        }
    }
    OnIncomingCall(res, instance) {
        let from = res.from;
        let callType = (res["call_type"] != undefined) ? res["call_type"] : "one_to_one";
        if (callType == "many_to_many") {
            instance.emit("groupCall", {
                type: "CALL_RECEIVED",
                message: "Received a call",
                from: from,
                call_type: res.media_type,
                session: callType,
                data: res.data
            });
            // instance.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
        }
        else
            instance.emit("call", {
                type: "CALL_RECEIVED",
                message: "Received a call",
                from: from,
                call_type: res.media_type,
                session: callType,
                uuid: res.sessionUUID,
                data: res.data
            });
    }
    OnIncomingGroupCall(res, instance) {
        let from = res.from;
        let callType = res["call_type"];
        instance.emit("groupCall", {
            type: "CALL_RECEIVED",
            message: "Received a call",
            from: from,
            call_type: res.media_type,
            session: callType,
            uuid: res.sessionUUID,
            data: res.data,
            to: res.participants
        });
    }
    SessionStart(res, instance) {
        instance.emit("call", { type: "CALL_STARTED", message: "Call is being started" });
    }
    GroupSessionStart(res, instance) {
        instance.emit("groupCall", { type: "CALL_STARTED", message: "Call is being started" });
    }
    SessionSDP(res, instance) {
        instance.emit("error", { type: "PROCESS_ANSWER", message: "Unable to process remote SDP." });
    }
    SessionBreak(res, instance) {
        instance.emit("call", {
            type: "SESSION_BREAK",
            message: "Current Call Session break with other user.",
            data: res.data,
            uuid: res.sessionUUID
        });
    }
    OnAddCandidate(error, instance) {
        instance.emit("error", { type: "CALL_ADDCANDIDATE", message: "Unable to add ice candidate." });
    }
    OnOfferIncomingCall(error, instance) {
        instance.emit("error", { type: "CALL_OFFERGENERATING", message: "Unable to add generate incoming call offer." });
    }
    OnCustomRPC(res, instance) {
        instance.emit("call", {
            type: "Custom_RPC",
            message: "A Custom Data Packet received.",
            data: res.data,
            uuid: res.sessionUUID
        });
    }
    OnRTCPeer(error, instance) {
        instance.emit("error", { type: "CALL_RTCPEER", message: "Unable to add to create webrtc peer." + error });
    }
    SessionEnd(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUUID);
        let callType = (res["call_type"] != undefined) ? res["call_type"] : "one_to_one";
        if (res["responseCode"] != undefined && res["responseCode"] == 487) {
            instance.emit("call", {
                type: "MISSED_CALL",
                message: "Session canceled/Missed Call",
                from: session,
                call_type: res.media_type,
                session: callType,
                data: res.data
            });
        }
        else {
            instance.emit("call", {
                type: "CALL_ENDED",
                message: "Call is being ended",
                from: session,
                call_type: callType,
                uuid: res.sessionUUID,
                data: res.data
            });
        }
    }
    SessionInvite(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUUID);
        //let callType=(res["call_type"]!=undefined)?res["call_type"]:"one_to_one";
        let callType = instance.UUIDSessionTypes[res.sessionUUID];
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 100:
                    instance.emit("call", {
                        type: "TRYING",
                        message: "Trying to find the receiver",
                        to: instance.to,
                        call_type: callType
                    });
                    break;
                case 180:
                    instance.emit("call", {
                        type: "CONNECTING",
                        message: "Trying to connect the receiver",
                        to: instance.to,
                        call_type: callType
                    });
                    break;
                case 183:
                    instance.emit("call", {
                        type: "ALERTING",
                        message: "Alerting the receiver",
                        to: instance.to,
                        call_type: callType
                    });
                    break;
                case 200:
                    if (res.responseMessage == "no session exist against this URL") {
                        instance.emit("call", {
                            type: "SESSION_END",
                            message: "No Session exist or Call ended.",
                            to: instance.to,
                            call_type: callType,
                            uuid: res.sessionUUID
                        });
                    }
                    else {
                        instance.emit("call", {
                            type: "CALL_ACCEPTED",
                            message: "Call is accepted by receiver",
                            to: instance.to,
                            call_type: callType,
                            data: res.data
                        });
                    }
                    break;
                case 402:
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", { type: "INSUFFICIENT_FUNDS", message: res.responseMessage, uuid: res.sessionUUID });
                    break;
                case 404:
                    if (res.responseMessage == "invalid target") {
                        instance.emit("call", {
                            type: "INVALID_TARGET",
                            message: "Receiver is not found",
                            to: instance.to,
                            call_type: callType
                        });
                    }
                    else {
                        instance.emit("call", {
                            type: "SESSION_END",
                            message: "No Session exist or Call ended.",
                            to: instance.to,
                            call_type: callType,
                            uuid: res.sessionUUID
                        });
                    }
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    break;
                default:
                    if (res.responseCode === 400 && res.responseMessage == "bad request") {
                        instance.emit("call", {
                            type: "BAD_REQUEST",
                            message: "Please check your last RPC it is not correct!",
                            to: instance.to,
                            call_type: callType,
                            uuid: res.sessionUUID,
                            data: res.data
                        });
                        return;
                    }
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", {
                        type: "CALL_REJECTED",
                        message: "Receiver has rejected the call",
                        to: instance.to,
                        call_type: callType,
                        uuid: res.sessionUUID,
                        data: res.data
                    });
            }
        }
    }
    SessionBusy(res, instance) {
        if (res.responseCode === 486) {
            let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUUID);
            instance.emit("call", {
                type: "CALL_REJECTED",
                message: "User is Busy",
                from: session,
                call_type: res.call_type,
                uuid: res.sessionUUID
            });
        }
        else {
            console.log(res.responseMessage);
        }
    }
    SessionCancel(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUUID);
        let callType = instance.UUIDSessionTypes[res.sessionUUID];
        // let callType=(res["call_type"]!=undefined)?res["call_type"]:"one_to_one";
        // if(res["responseCode"]!=undefined && res["responseCode"]==487){
        //     instance.emit("call",{type:"MISSED_CALL",message:"Session canceled/Missed Call",from:session,call_type:callType});
        // }
        // else{
        //     instance.emit("call",{type:"CALL_ENDED",message:"Call is being ended",from:session,call_type:callType});
        // }
        // //410
        // //if(callType=="one_to_one")
        // let flag=(callType=="one_to_one");
        // instance.DisposeWebrtc(flag);
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 487:
                    instance.emit("call", {
                        type: "MISSED_CALL",
                        message: "Session canceled/Missed Call",
                        from: session,
                        call_type: callType
                    });
                    break;
                case 480:
                    instance.emit("call", {
                        type: "PARTICIPANT_UNAVAILABLE",
                        message: "User is Unavailable",
                        from: session,
                        call_type: callType
                    });
                    break;
                case 410:
                    instance.emit("call", {
                        type: "PARTICIPANT_LEFT",
                        message: "Participant has left the call",
                        from: res.referenceID,
                        call_type: callType
                    });
                    break;
                case 401:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", {
                        type: "SESSION_BLOCKED",
                        message: "Show has blocked by provider",
                        uuid: res.sessionUUID
                    });
                    break;
                case 402:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", { type: "INSUFFICIENT_FUNDS", message: res.responseMessage, uuid: res.sessionUUID });
                    break;
                case 403:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", {
                        type: "SESSION_SUSPENSION",
                        message: "Show has suspended by provider",
                        uuid: res.sessionUUID
                    });
                    break;
                default:
                    // if(callType=="one_to_one")
                    instance.DisposeWebrtc(false);
                    instance.emit("call", {
                        type: "CALL_ENDED",
                        message: "Call is being ended",
                        to: instance.to,
                        call_type: callType,
                        uuid: res.sessionUUID,
                        data: res.data
                    });
            }
        }
    }
    SetCallerStatus(res, instance) {
        instance.emit("call", {
            type: "CALL_STATUS",
            message: "Call Status",
            video_status: res.videoInformation,
            audio_status: res.audioInformation,
            uuid: res.sessionUUID,
            from: res.referenceID,
            data: res.data
        });
    }
    PublicURL(res, instance) {
        instance.emit("call", {
            type: "PUBLIC_URL",
            message: "Public URL Available for Broadcast!",
            url: res.url,
            uuid: res.sessionUUID
        });
    }
    OnNewParticipant(res, instance) {
        instance.emit("call", {
            type: "NEW_PARTICIPANT",
            message: "New participant arrived.",
            participant: res.referenceID,
            uuid: res.sessionUUID
        });
    }
    screenOffByUser(res, instance) {
        instance.emit("call", { type: "SCREEN_OFF", message: "User turned off screen", uuid: res.sessionUUID });
    }
    sdkError(res, instance) {
        instance.emit("call", { type: "SDK_ERROR", message: res.message, uuid: res.sessionUUID });
    }
    /**
     *
     * MANY TO MANY EVENTS
     *
     */
    SetExistingParticipants(res, instance) {
        instance.emit("groupCall", {
            type: "PARTICIPANT_LIST",
            message: "Participant List is available",
            participant_list: res.referenceIDs
        });
    }
    SetParticipantStatus(res, instance) {
        instance.emit("groupCall", {
            type: "PARTICIPANT_STATUS",
            message: "Participant Status",
            participant: res.referenceID,
            video_status: res.videoInformation,
            audio_status: res.audioInformation
        });
    }
}
const EventHandler = new EventHandlerService();
exports.default = EventHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidGenerator = exports.SetPlaysInline = exports.IsDOM = exports.GetKeyByValue = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
function GetKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
exports.GetKeyByValue = GetKeyByValue;
function IsDOM(Obj) {
    return Obj instanceof Element;
}
exports.IsDOM = IsDOM;
function SetPlaysInline(element) {
    if (IsDOM(element))
        element.setAttribute('playsinline', true);
}
exports.SetPlaysInline = SetPlaysInline;
function UuidGenerator() {
    let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        const ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);
    return (idstr);
}
exports.UuidGenerator = UuidGenerator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(7);
class AuthService {
    constructor() { }
    /////////////////////////////////////
    ///////// Authentication with server
    async Authorization(cId, cSec) {
        let clientData = {
            project_id: cId,
            auth_token: cSec
        };
        // console.log("====clientData====",clientData);
        return fetch(`${Constants_1.SERVER}/AuthenticateSDK`, {
            method: 'POST',
            body: JSON.stringify(clientData),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
            .then((data) => data.json())
            .then((resp) => {
            return resp;
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const Auth = new AuthService();
exports.default = Auth;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = void 0;
exports.SERVER = "https://vtkapi.vdotok.dev/API/v0";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RegisterSchema_1 = __webpack_require__(9);
class RegisterModel {
    constructor() {
        this.RegPacket = RegisterSchema_1.default;
    }
    set id(id) {
        this.RegPacket.id = id;
    }
    get id() {
        return this.RegPacket.id;
    }
    set type(type) {
        this.RegPacket.type = type;
    }
    get type() {
        return this.RegPacket.type;
    }
    set requestType(requestType) {
        this.RegPacket.requestType = requestType;
    }
    get requestType() {
        return this.RegPacket.requestType;
    }
    set requestID(requestID) {
        this.RegPacket.requestID = requestID;
    }
    get requestID() {
        return this.RegPacket.requestID;
    }
    set tenantID(tenantID) {
        this.RegPacket.tenantID = tenantID;
    }
    get tenantID() {
        return this.RegPacket.tenantID;
    }
    set projectID(tenantID) {
        this.RegPacket.projectID = tenantID;
    }
    get projectID() {
        return this.RegPacket.projectID;
    }
    set referenceID(referenceID) {
        this.RegPacket.referenceID = referenceID;
    }
    get referenceID() {
        return this.RegPacket.referenceID;
    }
    set authorizationToken(authorizationToken) {
        this.RegPacket.authorizationToken = authorizationToken;
    }
    get authorizationToken() {
        return this.RegPacket.authorizationToken;
    }
    set socketType(socketType) {
        this.RegPacket.socketType = socketType;
    }
    get socketType() {
        return this.RegPacket.socketType;
    }
    set natType(natType) {
        this.RegPacket.natType = natType;
    }
    get natType() {
        return this.RegPacket.natType;
    }
    set publicIPs(publicIPs) {
        this.RegPacket.publicIPs = publicIPs;
    }
    get publicIPs() {
        return this.RegPacket.publicIPs;
    }
    set reConnect(reConnect) {
        this.RegPacket.reConnect = reConnect;
    }
    get reConnect() {
        return this.RegPacket.reConnect;
    }
    /**
     * name
     */
    SendRegisterRequest(server) {
        const regMessage = JSON.stringify(this.RegPacket);
        console.log("Send===RegisterRequest", regMessage);
        server.send(regMessage);
    }
}
exports.default = RegisterModel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // "id":"register",
    // "name":"client2",
    "requestType": "register",
    "type": "request",
    "requestID": "YX9BLHSS0WLCI6ESCS2D29T5UW2YFJSY",
    "tenantID": "12345",
    "projectID": "12345",
    "referenceID": "0d00e363ef75c8cc76d1ee79e950b30c",
    "authorizationToken": "e2a10ce93bb2affbe767e843c0bfc76c",
    "socketType": 0
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @RegisterEventHandlerService is the class used for handling register events
 *
 */
class RegisterEventHandlerService {
    constructor() { }
    SetRegisterResponse(resMessage, instance) {
        switch (resMessage.responseCode) {
            case 200:
                instance.McToken = resMessage.mcToken;
                instance.emit("register", { type: "Success", message: "You are registered successfully with vidtok server." });
                break;
            default:
                instance.emit("error", { type: "Register", message: "You are not registered with vidtok server." + resMessage.responseMessage });
        }
    }
}
const RegisterEventHandler = new RegisterEventHandlerService();
exports.default = RegisterEventHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prettier/prettier */
const CallRequestSchema_1 = __webpack_require__(12);
class CallRequestModel {
    constructor() {
        this.ReqPacket = CallRequestSchema_1.default;
    }
    // set id(id:any){
    // this.ReqPacket.id=id;
    //         }
    // get id(){
    //     return this.ReqPacket.id;
    //         }
    set from(from) {
        this.ReqPacket.from = from;
    }
    get from() {
        return this.ReqPacket.from;
    }
    set timestamp(timestamp) {
        this.ReqPacket.timestamp = timestamp;
    }
    get timestamp() {
        return this.ReqPacket.timestamp;
    }
    set to(to) {
        this.ReqPacket.to = to;
    }
    get to() {
        return this.ReqPacket.to;
    }
    set type(type) {
        this.ReqPacket.type = type;
    }
    get type() {
        return this.ReqPacket.type;
    }
    set requestType(requestType) {
        this.ReqPacket.requestType = requestType;
    }
    get requestType() {
        return this.ReqPacket.requestType;
    }
    set session_type(session_type) {
        this.ReqPacket.session_type = session_type;
    }
    get session_type() {
        return this.ReqPacket.session_type;
    }
    set requestID(requestID) {
        this.ReqPacket.requestID = requestID;
    }
    get requestID() {
        return this.ReqPacket.requestID;
    }
    set sessionUUID(sessionUUID) {
        this.ReqPacket.sessionUUID = sessionUUID;
    }
    get sessionUUID() {
        return this.ReqPacket.sessionUUID;
    }
    set mcToken(mcToken) {
        this.ReqPacket.mcToken = mcToken;
    }
    get mcToken() {
        return this.ReqPacket.mcToken;
    }
    set sdpOffer(sdpOffer) {
        this.ReqPacket.sdpOffer = sdpOffer;
    }
    get sdpOffer() {
        return this.ReqPacket.sdpOffer;
    }
    set sdp(sdp) {
        this.ReqPacket.sdp = sdp;
    }
    get sdp() {
        return this.ReqPacket.sdp;
    }
    set sdp_type(sdp_type) {
        this.ReqPacket.sdp_type = sdp_type;
    }
    get sdp_type() {
        return this.ReqPacket.sdp_type;
    }
    set call_type(type) {
        this.ReqPacket.call_type = type;
    }
    get call_type() {
        return this.ReqPacket.call_type;
    }
    set data(type) {
        this.ReqPacket.data = type;
    }
    get data() {
        return this.ReqPacket.data;
    }
    set media_type(media_type) {
        this.ReqPacket.media_type = media_type;
    }
    get media_type() {
        return this.ReqPacket.media_type;
    }
    get referenceID() {
        return this.ReqPacket.referenceID;
    }
    set referenceID(referenceID) {
        this.ReqPacket.referenceID = referenceID;
    }
    set isRecord(isRecord) {
        this.ReqPacket.isRecord = isRecord;
    }
    get isRecord() {
        return this.ReqPacket.isRecord;
    }
    set isPeer(isPeer) {
        this.ReqPacket.isPeer = isPeer;
    }
    get isPeer() {
        return this.ReqPacket.isPeer;
    }
    custom_field(field, value) {
        this.ReqPacket[field] = value;
    }
    deleteKey(key) {
        if (this.ReqPacket[key]) {
            delete this.ReqPacket[key];
        }
    }
    /**
     * @method for sending a call request
     */
    SendCallRequest(server) {
        let reqMessage = JSON.stringify(this.ReqPacket);
        console.log("Send===CallRequest", reqMessage);
        server.send(reqMessage);
    }
}
exports.default = CallRequestModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    //"id":"call",
    "from": "User-A",
    "to": "User-B",
    "type": "request",
    "requestType": "session_invite",
    "session_type": "call",
    "call_type": "one_to_one",
    "media_type": "video",
    "requestID": "UUID",
    "sessionUUID": "sgdjkfgskjdgfs6876868",
    "mcToken": "",
    "sdpOffer": "",
    "data": {},
    "timestamp": "",
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ScreenSharingMobile_1 = __webpack_require__(14);
class SingleStreamHelper {
    constructor(emitter = null, showId = null) {
        this.audioStream = null;
        this.videoStream = null;
        this.aStream = null;
        this.audioContext = null;
        this.audioContextDest = null;
        this.createdFromContext = 0;
        this.emptyStreamInterval = null;
        this.publicIps = [];
        this.checkOnlineStatus = async () => {
            try {
                const online = await fetch("/1pixel.png");
                return online.status >= 200 && online.status < 300; // either true or false
            }
            catch (err) {
                return false; // definitely offline
            }
        };
        this.emitter = emitter;
        this.showId = showId;
    }
    async getBackCameraId() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        let deviceId = null;
        let isAndroid = false;
        //For android phones
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].kind === "videoinput") {
                if (devices[i].label.includes("0")) {
                    deviceId = devices[i].deviceId;
                    isAndroid = true;
                    break;
                }
            }
        }
        //For Iphones
        if (!isAndroid) {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].kind === "videoinput") {
                    if (devices[i].label &&
                        devices[i].label.toLowerCase().includes("back")) {
                        deviceId = devices[i].deviceId;
                        break;
                    }
                }
            }
        }
        return deviceId;
    }
    delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    async getStream(audio = true, video = true, type = "camera", facingMode = "user") {
        if (video && type == "screen") {
            this.screenSharingMobile = new ScreenSharingMobile_1.default(this.emitter);
            this.videoStream = await this.screenSharingMobile.getScreenShareStream(false);
        }
        const options = { audio: false, video: false };
        if (audio) {
            options.audio = {
                echoCancellation: true,
                noiseSuppression: true,
            };
        }
        if (video && type == "camera") {
            if (this.aStream) {
                this.aStream
                    .getVideoTracks()
                    .forEach(function (track) {
                    track.stop();
                });
                await this.delay(1000); //Wait for camera to properly close on some mobile devices
            }
            options.video = {
                width: { ideal: 1024 },
                height: { ideal: 768 },
                frameRate: { ideal: 18 },
                aspectRatio: { ideal: 1.7777777778 },
            };
            if (facingMode === "environment") {
                const deviceId = await this.getBackCameraId();
                if (deviceId) {
                    options.video.deviceId = { exact: deviceId };
                }
                else {
                    options.video.facingMode = { exact: facingMode };
                }
            }
            else if (this.detectMob()) {
                options.video.facingMode = { exact: "user" };
            }
        }
        this.aStream = new MediaStream();
        if (options.audio || options.video) {
            try {
                this.aStream = await navigator.mediaDevices.getUserMedia(options);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (options.audio && this.aStream) {
            this.audioStream = new MediaStream(this.aStream.getAudioTracks());
        }
        else {
            this.audioStream = new MediaStream([this.silence()]);
            this.createdFromContext = 1;
        }
        if (options.video && this.aStream) {
            this.videoStream = new MediaStream(this.aStream.getVideoTracks());
        }
        else if (type != "audio" && !(video && type == "screen")) {
            this.videoStream = new MediaStream([
                this.black({ width: 640, height: 480 }),
            ]);
        }
        const combine = [];
        if (this.videoStream) {
            /*try {
              const constraints = {
                width: { min: 640, ideal: 1280 },
                height: { min: 480, ideal: 720 },
                advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
              };
              await this.videoStream
                .getVideoTracks()[0]
                .applyConstraints(constraints);
            } catch (e) {
              // eslint-disable-next-line no-console
              console.log("Failed to set constraints", e);
            }*/
            combine.push(this.videoStream.getVideoTracks()[0]);
        }
        if (this.audioStream) {
            combine.push(this.audioStream.getAudioTracks()[0]);
        }
        const finalResults = {
            video: this.videoStream,
            audio: this.audioStream,
            combine: new MediaStream(combine),
        };
        if (this.screenSharingMobile && video && type == "screen") {
            finalResults.nativeScreenShare = this.screenSharingMobile.nativeScreenShare;
        }
        return finalResults;
    }
    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];
        return toMatch.some((toMatchItem) => {
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            return navigator.userAgent.match(toMatchItem);
        });
    }
    removeAllStreams() {
        if (this.aStream) {
            this.aStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.audioStream) {
            this.audioStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.audioContext) {
            this.audioContext.close();
        }
        if (this.screenSharingMobile &&
            this.screenSharingMobile.onceAutoScrollDone) {
            clearInterval(this.screenSharingMobile.onceAutoScrollDone);
        }
        if (this.emptyStreamInterval) {
            clearInterval(this.emptyStreamInterval);
        }
    }
    silence() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
        this.audioContext = new AudioContext();
        const ctx = new AudioContext(), oscillator = ctx.createOscillator();
        const dst = oscillator.connect(ctx.createMediaStreamDestination());
        oscillator.start();
        return Object.assign(dst.stream.getAudioTracks()[0], { enabled: false });
    }
    black({ width = 640, height = 480 } = {}) {
        const canvas = Object.assign(document.createElement("canvas"), {
            width,
            height,
        });
        const ctx = canvas.getContext("2d");
        let logic = 1;
        /*const pat = ctx.createPattern(
            document.getElementById("girl_image"),
            "repeat"
        );*/
        this.emptyStreamInterval = setInterval(() => {
            ctx.fillRect(0, 0, width, height);
            if (logic) {
                ctx.fillStyle = "rgba(0,0,0,0.93)"; // pat; // set the fill style
                logic = 0;
            }
            else {
                ctx.fillStyle = "#000"; // set the fill style
                logic = 1;
            }
            ctx.rect(0, 0, width, height); // create a rectangle
            ctx.fill(); // fill it with the pattern.
        }, 1000);
        const stream = canvas.captureStream(30);
        stream.getVideoTracks()[0].enabled = false;
        return stream.getVideoTracks()[0];
    }
    blackSilence(...args) {
        return new MediaStream([this.black(...args), this.silence()]);
    }
    getNatType(stunServer) {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve, rejects) => {
            // parseCandidate from https://github.com/fippo/sdp
            function parseCandidate(line) {
                let parts;
                // Parse both variants.
                if (line.indexOf("a=candidate:") === 0) {
                    parts = line.substring(12).split(" ");
                }
                else {
                    parts = line.substring(10).split(" ");
                }
                const candidate = {
                    foundation: parts[0],
                    component: parts[1],
                    protocol: parts[2].toLowerCase(),
                    priority: parseInt(parts[3], 10),
                    ip: parts[4],
                    port: parseInt(parts[5], 10),
                    // skip parts[6] == 'typ'
                    type: parts[7],
                };
                for (let i = 8; i < parts.length; i += 2) {
                    switch (parts[i]) {
                        case "raddr":
                            candidate.relatedAddress = parts[i + 1];
                            break;
                        case "rport":
                            candidate.relatedPort = parseInt(parts[i + 1], 10);
                            break;
                        case "tcptype":
                            candidate.tcpType = parts[i + 1];
                            break;
                        default:
                            // Unknown extensions are silently ignored.
                            break;
                    }
                }
                return candidate;
            }
            const candidates = [];
            const pc = new RTCPeerConnection({
                iceServers: [{ urls: "stun:" + stunServer }],
            });
            const dc = pc.createDataChannel("foo");
            dc.onopen = (ev) => {
                const obj = {
                    message: "hello world!",
                    timestamp: new Date(),
                };
                dc.send(JSON.stringify(obj));
            };
            dc.onerror = (ev) => {
                rejects(ev);
            };
            dc.onclose = (ev) => {
                //console.log("channel state close", ev);
            };
            pc.onicecandidate = (e) => {
                // eslint-disable-next-line no-console
                console.log("cand", e.candidate);
                if (e.candidate && e.candidate.candidate.includes("srflx")) {
                    const cand = parseCandidate(e.candidate.candidate);
                    //console.log(JSON.stringify(cand));
                    if (!candidates[cand.relatedPort]) {
                        candidates[cand.relatedPort] = [];
                    }
                    candidates[cand.relatedPort].push(cand);
                    this.publicIps.push(cand.ip + ":" + cand.port);
                }
                else if (!e.candidate) {
                    if (Object.keys(candidates).length === 1) {
                        const ports = candidates[Object.keys(candidates)[0]];
                        const NatType = ports.length === 1 ? "normal" : "symmetric";
                        resolve({ natType: NatType, publicIPs: this.publicIps });
                        // eslint-disable-next-line no-console
                        console.log("candidates", candidates, ports, this.publicIps, NatType);
                        pc.close();
                    }
                }
            };
            pc.createOffer().then((offer) => pc.setLocalDescription(offer));
        });
    }
}
exports.default = SingleStreamHelper;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import * as html2canvas from "html2canvas";
const PhantomHelper_1 = __webpack_require__(15);
class ScreenSharingMobile {
    constructor(instance = null, showId = null) {
        this.nativeScreenShare = false;
        this.pauseScreenCapture = false;
        this.useServerSideRendering = false;
        this.oldBlob = null;
        this.socketInstance = null;
        this.showId = null;
        // eslint-disable-next-line @typescript-eslint/member-ordering,tree-shaking/no-side-effects-in-initialization
        this.toGeeScreenDebounce = ScreenSharingMobile.toGeeDebounce(
        // eslint-disable-next-line @typescript-eslint/unbound-method,tree-shaking/no-side-effects-in-initialization
        this.startToGeeCaptureScreen.bind(this), 1000, 0);
        // eslint-disable-next-line @typescript-eslint/member-ordering,tree-shaking/no-side-effects-in-initialization
        this.toGeeScreenDebounceShort = ScreenSharingMobile.toGeeDebounce(
        // eslint-disable-next-line @typescript-eslint/unbound-method,tree-shaking/no-side-effects-in-initialization
        this.startToGeeCaptureScreen.bind(this), 300, 0);
        this.socketInstance = instance;
        this.showId = showId;
        this.phantomHelper = new PhantomHelper_1.default();
        if (this.socketInstance) {
            this.phantomHelper.refId = this.socketInstance.currentUser;
            this.phantomHelper.token = this.socketInstance.authorizationToken;
            this.phantomHelper.htmlNormalizationCode = this.socketInstance.htmlNormalizationCode;
        }
        this.useServerSideRendering = this.detectMob() ? 2 : 0;
    }
    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];
        return toMatch.some((toMatchItem) => {
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            return navigator.userAgent.match(toMatchItem);
        });
    }
    async getScreenShareStream(withAudio = true, imageLogic = null) {
        let stream = null;
        if (imageLogic) {
            this.useServerSideRendering = 2;
        }
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && !imageLogic) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                stream = await navigator.mediaDevices.getDisplayMedia({
                    video: {
                        width: { ideal: 1920 },
                        height: { ideal: 1080 },
                        frameRate: { ideal: 18 },
                        aspectRatio: { ideal: 1.7777777778 },
                    },
                    audio: withAudio /*{
                          cursor: 'always' ,//| 'motion' | 'never'
                          displaySurface:  'browser' //| 'application' | 'monitor' | 'window'
                      }*/,
                });
                this.nativeScreenShare = true;
            }
            else {
                stream = await this.getCustomScreen();
            }
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            if (e.message === "Permission denied") {
                return null; //user cancelled screen sharing
            }
            stream = await this.getCustomScreen();
        }
        return stream;
    }
    imageSrcToBase64(img) {
        // adds CORS headers to the proxied request
        // https://github.com/Rob--W/cors-anywhere
        const proxyUrl = "http://proxy.vdotok.dev:8888/";
        const isBase64 = /^data:image\/(png|jpeg);base64,/.test(img.src);
        if (isBase64) {
            return;
        }
        //const agent = new HttpsProxyAgent("http://proxy.vdotok.dev:8888");
        return fetch(img.src, {
            headers: {
                "X-User-Agent": "agent",
            },
        })
            .then((res) => res.blob())
            .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        }))
            .then((dataURL) => {
            img.src = dataURL;
        });
    }
    toDataURL(img) {
        const isBase64 = /^data:image\/(png|jpeg);base64,/.test(img.src);
        if (isBase64) {
            return;
        }
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onerror = reject;
                reader.onloadend = function () {
                    img.src = reader.result;
                    resolve(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open("GET", img.src, true);
            xhr.responseType = "blob";
            xhr.send();
        });
    }
    async getCustomScreen() {
        /*const imgs = document.querySelectorAll("img");
        return Promise.all(
          [].slice.call(imgs).map((img) => this.toDataURL(img))
        ).then(async () => {*/
        this.pauseScreenCapture = false;
        if (this.useServerSideRendering === 2) {
            const startedAdding = await this.startToGeeCaptureScreen();
            this.toGeeListenToScreenChanges();
            return startedAdding;
        }
        else {
            let stream = null;
            this.nativeScreenShare = false;
            const canvas = ScreenSharingMobile.getTogeeScreenCanvas(); //create a canvas in dom if not exist and store in window.tooGeeStreamCanvas
            if (canvas) {
                const startedAdding = await this.startToGeeCaptureScreen();
                stream = canvas.captureStream(30);
                this.toGeeListenToScreenChanges();
            }
            return stream;
        }
        /*});*/
    }
    toGeeListenToScreenChanges() {
        const userActions = ["keydown", "touchend", "orientationchange"];
        for (const action of userActions) {
            window.addEventListener(action, this.toGeeScreenDebounce.bind(this));
        }
        document.addEventListener("touchmove", this.toGeeScreenDebounceShort.bind(this)); // for mobile
        window.onscroll = (e // for web
        ) => {
            this.startToGeeCaptureScreen(e);
        };
        this.toGeeListenToDomChanges();
    }
    toGeeListenToDomChanges() {
        // Select the node that will be observed for mutations
        const targetNode = document.body;
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        // Callback function to execute when mutations are observed
        const callback = (mutationsList, observer) => {
            // Use traditional 'for loops' for IE 11
            let createNewPic = 0;
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    for (const addedNodes of mutation.addedNodes) {
                        if (addedNodes.className &&
                            !addedNodes.className.includes("html2canvas")) {
                            createNewPic = 1;
                            break;
                        }
                    }
                    for (const removedNode of mutation.removedNodes) {
                        if (removedNode.className &&
                            !removedNode.className.includes("html2canvas")) {
                            createNewPic = 1;
                            break;
                        }
                    }
                    //console.log('A child node has been added or removed.');
                }
                /*else if (mutation.type === 'attributes') {
                                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                                }*/
            }
            if (createNewPic) {
                this.toGeeScreenDebounce();
            }
        };
        // Create an observer instance linked to the callback function
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.toGeeScreenObserver = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.toGeeScreenObserver.observe(targetNode, config);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static getTogeeScreenCanvas() {
        let toGeeCanvas = document.getElementById("toGee_screen_share_canvas");
        if (!toGeeCanvas) {
            toGeeCanvas = document.createElement("canvas");
            document.body.appendChild(toGeeCanvas);
            toGeeCanvas.id = "toGee_screen_share_canvas";
            toGeeCanvas.setAttribute("data-html2canvas-ignore", "");
            toGeeCanvas.width = window.innerWidth;
            toGeeCanvas.height = window.innerHeight;
            //toGeeCanvas.style.display = "none";
            toGeeCanvas.style.opacity = 0;
            toGeeCanvas.style.position = "absolute";
            toGeeCanvas.style.zIndex = -1;
            toGeeCanvas.style.top = "-1000em";
            toGeeCanvas.style.left = "-1000em";
        }
        /*toGeeCanvas.width = window.innerWidth+5;
                toGeeCanvas.height = window.outerHeight+5;
                window.tooGeeStreamCanvas = toGeeCanvas;
                window.tooGeeStreamCanvasCTX = toGeeCanvas.getContext('2d');*/
        return toGeeCanvas;
    }
    async startToGeeCaptureScreen(e = null) {
        if (this.pauseScreenCapture) {
            // eslint-disable-next-line no-console
            console.log("Screen sharing is pause!");
            return;
        }
        if (!this.phantomHelper) {
            this.phantomHelper = new PhantomHelper_1.default();
            if (this.socketInstance) {
                this.phantomHelper.refId = this.socketInstance.currentUser;
                this.phantomHelper.token = this.socketInstance.authorizationToken;
                this.phantomHelper.htmlNormalizationCode = this.socketInstance.htmlNormalizationCode;
            }
        }
        // eslint-disable-next-line no-console
        //console.trace();
        let innerCanvas;
        let createdNew = false;
        let useExisting = 0;
        if (e && (e.type == "scroll" || e.type == "touchmove")) {
            // eslint-disable-next-line no-console
            console.log(window.scrollY, window.scrollX, window.innerWidth);
            useExisting = 1;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (useExisting && window.toGeeScreenInnerCanvas) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            innerCanvas = window.toGeeScreenInnerCanvas;
        }
        else {
            if (!this.useServerSideRendering) {
                ScreenSharingMobile.toGeePrepareVideos(); //html2canvas library not support video tags capturing so i am taking current frame pictures and setting video background according to that
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                window.toGeeScreenInnerCanvas = innerCanvas = await html2canvas(document.body, {
                    onclone: (cloned) => {
                        //console.log(cloned);
                    },
                    backgroundColor: "#ffffff",
                    scale: 1,
                    /*dpi:300,
                      async : true, // setting it to false may slow the generation a bit down
                      allowTaint : true,
                      foreignObjectRendering : true,*/
                    imageTimeout: 8200,
                    logging: true,
                    removeContainer: false,
                    proxy: "https://host.togee.io/html2canvasproxy.php",
                });
            }
            else if (this.useServerSideRendering === 1) {
                const apiResults = await this.phantomHelper.getScreenShotServer();
                if (apiResults) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    window.toGeeScreenInnerCanvas = innerCanvas = apiResults;
                    createdNew = true;
                }
            }
            else if (this.useServerSideRendering === 2) {
                const apiResults = await this.phantomHelper.getScreenShotServer(null, null, null, null, this.showId, true);
                if (apiResults) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    window.toGeeScreenInnerCanvas = innerCanvas = apiResults;
                    createdNew = true;
                }
            }
        }
        if (this.useServerSideRendering === 1) {
            const image = new Image();
            image.onload = () => {
                this.drawOnCanvas(image);
            };
            if (createdNew) {
                if (this.oldBlob) {
                    URL.revokeObjectURL(this.oldBlob);
                }
                this.oldBlob = URL.createObjectURL(innerCanvas);
            }
            image.src = this.oldBlob;
        }
        else if (!this.useServerSideRendering) {
            this.drawOnCanvas(innerCanvas);
        }
        else if (this.useServerSideRendering === 2) {
            this.drawOnCanvas(innerCanvas, true, createdNew);
        }
        if (!ScreenSharingMobile.onceAutoScrollDone &&
            this.useServerSideRendering !== 2) {
            ScreenSharingMobile.onceAutoScrollDone = setInterval(() => {
                this.startToGeeCaptureScreen({ type: "scroll" });
            }, 300);
        }
        return true;
    }
    drawOnCanvas(image, sendSocket = false, isNew = false) {
        const sHeight = window.scrollY < 0
            ? 0
            : window.scrollY >
                document.documentElement.scrollHeight -
                    document.documentElement.clientHeight
                ? document.documentElement.scrollHeight -
                    document.documentElement.clientHeight
                : window.scrollY;
        if (sendSocket) {
            if (this.socketInstance) {
                if (!isNew) {
                    this.socketInstance.sendCustomRPC({
                        type: "S_S_I",
                        x: window.scrollX < 0 ? 0 : window.scrollX,
                        y: sHeight,
                        w: window.innerWidth,
                        h: window.innerHeight,
                        t: Date.now(),
                    }, this.showId);
                }
                else {
                    this.socketInstance.sendStateRPC({
                        type: "N_S_I",
                        image: image,
                        x: window.scrollX < 0 ? 0 : window.scrollX,
                        y: sHeight,
                        w: window.innerWidth,
                        h: window.innerHeight,
                        page_url: window.location.href,
                        t: Date.now(),
                    }, this.showId);
                    this.socketInstance.emit("call", {
                        type: "New_Image_Sent",
                        message: "new image sent to viewers",
                        showId: this.showId,
                    });
                }
            }
            return;
        }
        const canvas = ScreenSharingMobile.getTogeeScreenCanvas();
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, window.scrollX < 0 ? 0 : window.scrollX, sHeight, window.innerWidth, window.innerHeight, // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static toGeePrepareVideos() {
        let canvas;
        let ctx;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (window.tooGeeVideosHackCanvas) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            canvas = window.tooGeeVideosHackCanvas;
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ctx = window.tooGeeVideosHackCanvasCTX;
        }
        else {
            canvas = document.createElement("canvas"); // create a canvas element
            canvas.setAttribute("id", "tooGeeVideosHackCanvas");
            ctx = canvas.getContext("2d");
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            window.tooGeeVideosHackCanvasCTX = ctx;
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            window.tooGeeVideosHackCanvas = canvas;
        }
        const videos = document.querySelectorAll("video");
        let w, h;
        for (let i = 0, len = videos.length; i < len; i++) {
            const v = videos[i];
            if (!v.src)
                //continue // no video here
                try {
                    w = v.videoWidth;
                    h = v.videoHeight;
                    canvas.width = w;
                    canvas.height = h;
                    ctx.fillRect(0, 0, w, h);
                    ctx.drawImage(v, 0, 0, w, h);
                    v.style.backgroundImage = `url(${canvas.toDataURL()})`; // here is the magic
                    v.style.backgroundSize = "contain";
                    ctx.clearRect(0, 0, w, h); // clean the canvas
                }
                catch (e) {
                    continue;
                }
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static toGeeDebounce(func, wait, immediate) {
        let timeout;
        return function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const context = this, 
            // eslint-disable-next-line prefer-rest-params
            args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/explicit-function-return-type
    static getScreenShot(height, width = null, url = null, refId = null, token = null, htmlNormalizationCode = null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const phantomHelper = new PhantomHelper_1.default();
        if (refId && token) {
            phantomHelper.refId = refId;
            phantomHelper.token = token;
        }
        if (htmlNormalizationCode) {
            phantomHelper.htmlNormalizationCode = htmlNormalizationCode;
        }
        return phantomHelper.getScreenShotServer(height, width, ".jpg", null, null, false, url);
        /*return html2canvas(document.\body, {
          onclone: (cloned: any) => {
            //console.log(cloned);
          },
          backgroundColor: "#ffffff",
          scale: 1, // I am not sure whether it helped or not but I remember setting it // it depends on the browser used whether it is allowed or not
          height,
          /!*dpi:300,
                async : true, // setting it to false may slow the generation a bit down
                allowTaint : true,
                foreignObjectRendering : true,*!/
    
          imageTimeout: 800, // this further delays loading, however this solved a no images in captured screenshot issue
          logging: false,
        });*/
    }
}
exports.default = ScreenSharingMobile;
//_toGee Code Start//
ScreenSharingMobile.onceAutoScrollDone = false;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import * as JSZip from "jszip";
Object.defineProperty(exports, "__esModule", { value: true });
class PhantomHelper {
    constructor() {
        this.pendingCalls = 0;
        this.latestParams = null;
        this.refId = null;
        this.token = null;
        this.htmlNormalizationCode = null;
    }
    async getZip(data) {
        /*const zip = new JSZip();
        zip.file("Hello.txt", data);
        const content = await zip.generateAsync({ type: "base64" });
        //console.log("blob content", content)
        return content;*/
    }
    getHtml(tag) {
        document.querySelectorAll("canvas").forEach((canvas) => {
            if (!canvas.hasAttribute("id") || !canvas.getAttribute("id")) {
                canvas.setAttribute("id", "dynamic_canvas_" + Math.round(Math.random() * 100));
            }
        });
        let html = document.getElementsByTagName(tag)[0];
        if (html) {
            html = html.innerHTML.trim();
        }
        else {
            return "";
        }
        const template = document.createElement("template");
        template.innerHTML = html;
        document.querySelectorAll("canvas").forEach((canvas) => {
            const img = new Image();
            for (let index = canvas.attributes.length - 1; index > -1; --index) {
                const attribute = canvas.attributes[index];
                img.setAttribute(attribute.name, attribute.value);
            }
            img.src = canvas.toDataURL();
            const canvas2 = template.content.querySelector("#" + canvas.id);
            if (canvas2.classList.contains("togee_doddle_canvas")) {
                img.style.top = window.scrollY + "px";
            }
            canvas2.parentNode.replaceChild(img, canvas2);
        });
        const realHtml = document.querySelector("html");
        const tempHtml = document.createElement("html");
        if (realHtml) {
            for (let index = realHtml.attributes.length - 1; index > -1; --index) {
                const attribute = realHtml.attributes[index];
                tempHtml.setAttribute(attribute.name, attribute.value);
            }
        }
        const realBody = document.querySelector("body");
        const tempBody = document.createElement("body");
        if (realBody) {
            for (let index = realBody.attributes.length - 1; index > -1; --index) {
                const attribute = realBody.attributes[index];
                tempBody.setAttribute(attribute.name, attribute.value);
            }
        }
        // @ts-ignore
        tempHtml.appendChild(document.querySelector("head").cloneNode(true));
        tempBody.innerHTML = template.innerHTML;
        tempHtml.appendChild(tempBody);
        Array.prototype.forEach.call(tempHtml.querySelectorAll("*[data-html2canvas-ignore],*[data-togee-ignore], script"), function (node) {
            node.parentNode.removeChild(node);
        });
        if (this.htmlNormalizationCode) {
            const tempDom = document.createElement("span");
            tempDom.innerHTML = this.htmlNormalizationCode;
            tempHtml.appendChild(tempDom);
        }
        return tempHtml.outerHTML.trim();
    }
    makeFixedElementsVisible(tempHtml) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const fixedElements = [...tempHtml.querySelectorAll("*")].filter((x) => getComputedStyle(x, null).getPropertyValue("position") === "fixed" &&
            !x.classList.contains("togee_chat_bot_container") &&
            !x.classList.contains("togee_snakbar") &&
            !x.classList.contains("togee_video_container") &&
            x.getBoundingClientRect().width);
        console.log(fixedElements);
    }
    async waitUntil() {
        return await new Promise((resolve) => {
            const interval = setInterval(() => {
                if (!PhantomHelper.screenShotInProgress) {
                    resolve("foo");
                    clearInterval(interval);
                }
            }, 1000);
        });
    }
    async getScreenShotServer(height = null, width = null, ext = null, client = null, showId = null, onlySave = false, url = null) {
        try {
            height = height ? height : document.body.scrollHeight;
            width = width ? width : window.outerWidth;
            ext = ext ? ext : ".webp";
            client = client ? client : window.location.hostname;
            showId = showId ? showId : +new Date();
            //const content = await this.getZip(this.getHtml("html"));
            const content = url ? url : this.getHtml("body");
            const body = {
                html: content,
                host: window.location.href,
                width: width,
                height: height,
                viewportHeight: window.innerHeight,
                extension: ext,
                type: url ? "url" : "html",
                env: "q",
                showId,
                client,
                onlySave,
            };
            if (PhantomHelper.screenShotInProgress) {
                this.pendingCalls++;
                this.latestParams = body;
                // eslint-disable-next-line no-console
                console.log("SDK API Latest PArams", this.latestParams);
                await this.waitUntil();
            }
            else {
                this.pendingCalls = 1;
            }
            let response = null;
            if (this.pendingCalls == 1) {
                this.pendingCalls = 0;
                response = await this.hitAPI(body);
            }
            else {
                this.pendingCalls--;
            }
            // console.log("res ",response);
            return response;
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            PhantomHelper.screenShotInProgress = 0;
            return null;
        }
    }
    async hitAPI(body) {
        var _a, _b;
        body.html = body.type == "url" ? body.html : this.getHtml("body"); //latest html content
        body.ref_id = (_a = this.refId) !== null && _a !== void 0 ? _a : "123123";
        body.token = (_b = this.token) !== null && _b !== void 0 ? _b : "123456";
        PhantomHelper.screenShotInProgress = 1;
        //const apiUrl = `https://d-host.togee.io:4600`;
        //Screen share service dev env : https://screen-share-service.vdotok.dev:443
        const apiUrl = `https://screen-share-service.vdotok.com:443/CreateScreenShot`;
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            PhantomHelper.screenShotInProgress = 0;
            if (body.onlySave) {
                return response.json();
            }
            else {
                return response.blob();
            }
        })
            .catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            PhantomHelper.screenShotInProgress = 0;
            return null;
        });
        return response;
    }
}
exports.default = PhantomHelper;
// eslint-disable-next-line @typescript-eslint/no-empty-function
PhantomHelper.screenShotInProgress = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRtcPeerHelper = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
const UAParser = __webpack_require__(17);
const events_1 = __webpack_require__(3);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const sdpTranslator = __webpack_require__(19);
const logger = console;
// Somehow, the UAParser constructor gets an empty window object.
// We need to pass the user agent string in order to get information
const ua = typeof window !== "undefined" && window.navigator
    ? window.navigator.userAgent
    : "";
const parser = new UAParser(ua);
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
const browser = parser.getBrowser();
let usePlanB = false;
if (browser.name === "Chrome" || browser.name === "Chromium") {
    // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
    logger.debug(browser.name + ": using SDP PlanB");
    usePlanB = true;
}
/**
 * Wrapper object of an RTCPeerConnection. This object is aimed to simplify the
 * development of WebRTC-based applications.
 *
 * @constructor module:WebRtcPeer
 *
 * @param {String} mode Mode in which the PeerConnection will be configured.
 *  Valid values are: 'recvonly', 'sendonly', and 'sendrecv'
 * @param localVideo Video tag for the local stream
 * @param remoteVideo Video tag for the remote stream
 * @param {MediaStream} videoStream Stream to be used as primary source
 *  (typically video and audio, or only video if combined with audioStream) for
 *  localVideo and to be added as stream to the RTCPeerConnection
 * @param {MediaStream} audioStream Stream to be used as second source
 *  (typically for audio) for localVideo and to be added as stream to the
 *  RTCPeerConnection
 */
class WebRtcPeer extends events_1.EventEmitter {
    constructor(mode, options, callback) {
        super();
        this.candidatesQueueOut = [];
        this.candidategatheringdone = false;
        options = options || {};
        callback = (callback || this.noop).bind(this);
        this.mode = mode;
        this.options = options;
        this.callback = callback;
        this.id = options.id || btoa(new Date().toLocaleTimeString());
        this.init();
    }
    noop(error) {
        if (error)
            logger.error(error);
    }
    getCurrentFrame() {
        // [ToDo] Find solution when we have a remote stream but we didn't set
        // a remoteVideo tag
        if (!this.remoteVideo)
            return;
        if (this.remoteVideo.readyState < this.remoteVideo.HAVE_CURRENT_DATA)
            throw new Error("No video stream data available");
        const canvas = document.createElement("canvas");
        canvas.width = this.remoteVideo.videoWidth;
        canvas.height = this.remoteVideo.videoHeight;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        canvas.getContext("2d").drawImage(this.remoteVideo, 0, 0);
        return canvas;
    }
    init() {
        this.localVideo = this.options.localVideo;
        this.remoteVideo = this.options.remoteVideo;
        this.videoStream = this.options.videoStream;
        this.audioStream = this.options.audioStream;
        this.mediaConstraints = this.options.mediaConstraints;
        this.peerConnection = this.options.peerConnection;
        const sendSource = this.options.sendSource || "webcam";
        const dataChannelConfig = this.options.dataChannelConfig || null;
        const useDataChannels = this.options.dataChannels || false;
        const configuration = this.options.configuration;
        const onicecandidate = this.options.onicecandidate;
        if (onicecandidate)
            this.on("icecandidate", onicecandidate);
        const oncandidategatheringdone = (event) => {
            //console.log("candidategatheringdone", event);
        };
        if (oncandidategatheringdone) {
            this.on("candidategatheringdone", oncandidategatheringdone);
        }
        this.simulcast = this.options.simulcast;
        this.multistream = this.options.multistream;
        this.interop = new sdpTranslator.Interop();
        this.candidatesQueueOut = [];
        this.candidategatheringdone = false;
        // Init PeerConnection
        if (!this.peerConnection) {
            this.peerConnection = new RTCPeerConnection(configuration);
            if (useDataChannels && !this.dataChannel) {
                let dcId = "WebRtcPeer-" + this.id;
                let dcOptions = undefined;
                if (dataChannelConfig) {
                    dcId = dataChannelConfig.id || dcId;
                    dcOptions = dataChannelConfig.options;
                }
                this.dataChannel = this.peerConnection.createDataChannel(dcId, dcOptions);
                if (dataChannelConfig) {
                    this.dataChannel.onopen = dataChannelConfig.onopen;
                    this.dataChannel.onclose = dataChannelConfig.onclose;
                    this.dataChannel.onmessage = dataChannelConfig.onmessage;
                    this.dataChannel.onbufferedamountlow =
                        dataChannelConfig.onbufferedamountlow;
                    this.dataChannel.onerror =
                        dataChannelConfig.onerror || this.noop.bind(this);
                }
            }
        }
        // Shims over the now deprecated getLocalStreams() and getRemoteStreams()
        // (usage of these methods should be dropped altogether)
        if (!this.peerConnection.getLocalStreams &&
            this.peerConnection.getSenders) {
            this.peerConnection.getLocalStreams = () => {
                const stream = new MediaStream();
                this.peerConnection.getSenders().forEach((sender) => {
                    stream.addTrack(sender.track);
                });
                return [stream];
            };
        }
        //if (!this.peerConnection.getRemoteStreams && this.peerConnection.getReceivers) {
        //this built in function is causing issue (remote video was not receiving)
        this.peerConnection.getRemoteStreams = () => {
            const stream = new MediaStream();
            this.peerConnection.getReceivers().forEach((sender) => {
                stream.addTrack(sender.track);
            });
            return [stream];
        };
        //}
        this.peerConnection.addEventListener("icecandidate", this.iceCandidateFunction.bind(this));
        this.peerConnection.onaddstream = this.options.onaddstream;
        this.peerConnection.ontrack = (track) => {
            //console.log("remote track", track);
        };
        this.peerConnection.onnegotiationneeded = this.options.onnegotiationneeded;
        this.peerConnection.addEventListener("iceconnectionstatechange", (event) => {
            //console.log("iceconnectionstatechange", event);
        });
        this.on("newListener", (event, listener) => {
            if (event === "icecandidate" || event === "candidategatheringdone") {
                while (this.candidatesQueueOut && this.candidatesQueueOut.length) {
                    const candidate = this.candidatesQueueOut.shift();
                    if (!candidate === (event === "candidategatheringdone")) {
                        listener(candidate);
                    }
                }
            }
        });
        this.addIceCandidateInternal = this.bufferizeCandidates(this.peerConnection);
        if (this.mode !== "recvonly" && !this.videoStream && !this.audioStream) {
            if (sendSource === "webcam") {
                this.getMedia(this.mediaConstraints);
            }
            else {
                return "Screen implementation not done in this class";
            }
        }
        else {
            setTimeout(() => this.start(), 0);
        }
        this.on("_dispose", () => {
            if (this.localVideo) {
                this.localVideo.pause();
                this.localVideo.srcObject = null;
                this.localVideo.load();
                this.localVideo.muted = false;
            }
            if (this.remoteVideo) {
                this.remoteVideo.pause();
                this.remoteVideo.srcObject = null;
                this.remoteVideo.load();
            }
            this.removeAllListeners();
        });
    }
    getMedia(constraints) {
        if (constraints === undefined) {
            constraints = {
                audio: true,
                video: {
                    width: 640,
                    framerate: 15,
                },
            };
        }
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
            this.videoStream = stream;
            this.start();
        })
            .catch(this.callback);
    }
    // If event.candidate == null, it means that candidate gathering has finished
    // and RTCPeerConnection.iceGatheringState == "complete".
    // Such candidate does not need to be sent to the remote peer.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event#Indicating_that_ICE_gathering_is_complete
    iceCandidateFunction(event) {
        const candidate = event.candidate;
        if (events_1.EventEmitter.listenerCount(this, "icecandidate") ||
            events_1.EventEmitter.listenerCount(this, "candidategatheringdone")) {
            if (candidate) {
                let cand;
                if (this.multistream && usePlanB) {
                    cand = this.interop.candidateToUnifiedPlan(candidate);
                }
                else {
                    cand = candidate;
                }
                this.emit("icecandidate", cand);
                this.candidategatheringdone = false;
            }
            else if (!this.candidategatheringdone) {
                this.emit("candidategatheringdone");
                this.candidategatheringdone = true;
            }
        }
        else if (!this.candidategatheringdone) {
            this.candidatesQueueOut.push(candidate);
            if (!candidate)
                this.candidategatheringdone = true;
        }
    }
    /**
     * Callback function invoked when an ICE candidate is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.addIceCandidate
     *
     * @param iceCandidate - Literal object with the ICE candidate description
     * @param callback - Called when the ICE candidate has been added.
     */
    addIceCandidate(iceCandidate, callback) {
        let candidate;
        if (this.multistream && usePlanB) {
            candidate = this.interop.candidateToPlanB(iceCandidate);
        }
        else {
            candidate = new RTCIceCandidate(iceCandidate);
        }
        logger.debug("Remote ICE candidate received", iceCandidate);
        callback = (callback || this.noop).bind(this);
        this.addIceCandidateInternal(candidate, callback);
    }
    generateOffer(callback, options = {}) {
        callback = callback.bind(this);
        if (this.mode === "recvonly") {
            /* Add reception tracks on the RTCPeerConnection. Send tracks are
             * unconditionally added to "sendonly" and "sendrecv" modes, in the
             * constructor's "start()" method, but nothing is done for "recvonly".
             *
             * Here, we add new transceivers to receive audio and/or video, so the
             * SDP Offer that will be generated by the PC includes these medias
             * with the "a=recvonly" attribute.
             */
            const useAudio = this.mediaConstraints &&
                typeof this.mediaConstraints.audio === "boolean"
                ? this.mediaConstraints.audio
                : true;
            const useVideo = this.mediaConstraints &&
                typeof this.mediaConstraints.video === "boolean"
                ? this.mediaConstraints.video
                : true;
            if (useAudio) {
                this.peerConnection.addTransceiver("audio", {
                    direction: "recvonly",
                });
            }
            if (useVideo) {
                this.peerConnection.addTransceiver("video", {
                    direction: "recvonly",
                });
            }
        }
        else if (this.mode === "sendonly") {
            /* The constructor's "start()" method already added any available track,
             * which by default creates Transceiver with "sendrecv" direction.
             *
             * Here, we set all transceivers to only send audio and/or video, so the
             * SDP Offer that will be generated by the PC includes these medias
             * with the "a=sendonly" attribute.
             */
            this.peerConnection.getTransceivers().forEach((transceiver) => {
                transceiver.direction = "sendonly";
            });
        }
        this.peerConnection
            .createOffer(options)
            .then((offer) => {
            logger.debug("Created SDP offer");
            offer = this.mangleSdpToAddSimulcast(offer);
            return this.peerConnection.setLocalDescription(offer);
        })
            .then(() => {
            let localDescription = this.peerConnection.localDescription;
            logger.debug("Local description set\n", localDescription.sdp);
            if (this.multistream && usePlanB) {
                localDescription = this.interop.toUnifiedPlan(localDescription);
                logger.debug("offer::origPlanB->UnifiedPlan", this.dumpSDP(localDescription));
            }
            callback(null, localDescription.sdp, this.processAnswer.bind(this));
        })
            .catch(callback);
    }
    getLocalSessionDescriptor() {
        return this.peerConnection.localDescription;
    }
    getRemoteSessionDescriptor() {
        return this.peerConnection.remoteDescription;
    }
    setRemoteVideo() {
        if (this.remoteVideo) {
            this.remoteVideo.pause();
            const stream = this.peerConnection.getRemoteStreams()[0];
            this.remoteVideo.srcObject = stream;
            logger.debug("Remote stream:", stream);
            this.remoteVideo.load();
        }
    }
    showLocalVideo() {
        this.localVideo.srcObject = this.videoStream;
        this.localVideo.muted = true;
    }
    send(data) {
        if (this.dataChannel && this.dataChannel.readyState === "open") {
            this.dataChannel.send(data);
        }
        else {
            logger.warn("Trying to send data over a non-existing or closed data channel");
        }
    }
    /**
     * Callback function invoked when a SDP answer is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.processAnswer
     *
     * @param sdpAnswer - Description of sdpAnswer
     * @param callback -
     *            Invoked after the SDP answer is processed, or there is an error.
     */
    processAnswer(sdpAnswer, callback) {
        callback = (callback || this.noop).bind(this);
        let answer = new RTCSessionDescription({
            type: "answer",
            sdp: sdpAnswer,
        });
        if (this.multistream && usePlanB) {
            const planBAnswer = this.interop.toPlanB(answer);
            logger.debug("asnwer::planB", this.dumpSDP(planBAnswer));
            answer = planBAnswer;
        }
        logger.debug("SDP answer received, setting remote description");
        if (this.peerConnection.signalingState === "closed") {
            return callback("PeerConnection is closed");
        }
        this.peerConnection.setRemoteDescription(answer).then(() => {
            this.setRemoteVideo();
            callback();
        }, callback);
    }
    /**
     * Callback function invoked when a SDP offer is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.processOffer
     *
     * @param sdpOffer - Description of sdpOffer
     * @param callback - Called when the remote description has been set
     *  successfully.
     */
    processOffer(sdpOffer, callback) {
        callback = callback.bind(this);
        let offer = new RTCSessionDescription({
            type: "offer",
            sdp: sdpOffer,
        });
        if (this.multistream && usePlanB) {
            const planBOffer = this.interop.toPlanB(offer);
            logger.debug("offer::planB", this.dumpSDP(planBOffer));
            offer = planBOffer;
        }
        logger.debug("SDP offer received, setting remote description");
        if (this.peerConnection.signalingState === "closed") {
            return callback("PeerConnection is closed");
        }
        this.peerConnection
            .setRemoteDescription(offer)
            .then(() => {
            return this.setRemoteVideo();
        })
            .then(() => {
            return this.peerConnection.createAnswer();
        })
            .then((answer) => {
            answer = this.mangleSdpToAddSimulcast(answer);
            logger.debug("Created SDP answer");
            return this.peerConnection.setLocalDescription(answer);
        })
            .then(() => {
            let localDescription = this.peerConnection.localDescription;
            if (this.multistream && usePlanB) {
                localDescription = this.interop.toUnifiedPlan(localDescription);
                logger.debug("answer::origPlanB->UnifiedPlan", this.dumpSDP(localDescription));
            }
            logger.debug("Local description set\n", localDescription.sdp);
            callback(null, localDescription.sdp);
        })
            .catch(callback);
    }
    mangleSdpToAddSimulcast(answer) {
        if (this.simulcast) {
            if (browser.name === "Chrome" || browser.name === "Chromium") {
                logger.debug("Adding multicast info");
                answer = new RTCSessionDescription({
                    type: answer.type,
                    sdp: this.removeFIDFromOffer(answer.sdp) +
                        this.getSimulcastInfo(this.videoStream),
                });
            }
            else {
                logger.warn("Simulcast is only available in Chrome browser.");
            }
        }
        return answer;
    }
    /**
     * This function creates the RTCPeerConnection object taking into account the
     * properties received in the constructor. It starts the SDP negotiation
     * process: generates the SDP offer and invokes the onsdpoffer callback. This
     * callback is expected to send the SDP offer, in order to obtain an SDP
     * answer from another peer.
     */
    start() {
        if (this.peerConnection.signalingState === "closed") {
            this.callback('The peer connection object is in "closed" state. This is most likely due to an invocation of the dispose method before accepting in the dialogue');
        }
        if (this.videoStream && this.localVideo) {
            this.showLocalVideo();
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach((track) => {
                this.peerConnection.addTrack(track, this.videoStream);
            });
        }
        if (this.audioStream) {
            this.audioStream.getTracks().forEach((track) => {
                this.peerConnection.addTrack(track, this.audioStream);
            });
        }
        this.callback();
    }
    trackStop(track) {
        track.stop && track.stop();
    }
    streamStop(stream) {
        stream.getTracks().forEach(this.trackStop.bind(this));
    }
    /**
     * Returns a string representation of a SessionDescription object.
     */
    dumpSDP(description) {
        if (typeof description === "undefined" || description === null) {
            return "";
        }
        return "type: " + description.type + "\r\n" + description.sdp;
    }
    bufferizeCandidates(pc, onerror = null) {
        const candidatesQueue = [];
        const signalingstatechangeFunction = () => {
            if (pc.signalingState === "stable") {
                while (candidatesQueue.length) {
                    const entry = candidatesQueue.shift();
                    pc.addIceCandidate(entry.candidate, entry.callback, entry.callback);
                }
            }
        };
        this.peerConnection.addEventListener("signalingstatechange", signalingstatechangeFunction);
        return (candidate, callback) => {
            callback = callback || onerror;
            switch (pc.signalingState) {
                case "closed":
                    callback(new Error("PeerConnection object is closed"));
                    break;
                case "stable":
                    if (pc.remoteDescription) {
                        pc.addIceCandidate(candidate, callback, callback);
                        break;
                    }
                // eslint-disable-next-line no-fallthrough
                default:
                    candidatesQueue.push({
                        candidate: candidate,
                        callback: callback,
                    });
            }
        };
    }
    /* Simulcast utilities */
    removeFIDFromOffer(sdp) {
        const n = sdp.indexOf("a=ssrc-group:FID");
        if (n > 0) {
            return sdp.slice(0, n);
        }
        else {
            return sdp;
        }
    }
    getSimulcastInfo(videoStream) {
        const videoTracks = videoStream.getVideoTracks();
        if (!videoTracks.length) {
            logger.warn("No video tracks available in the video stream");
            return "";
        }
        const lines = [
            "a=x-google-flag:conference",
            "a=ssrc-group:SIM 1 2 3",
            "a=ssrc:1 cname:localVideo",
            "a=ssrc:1 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:1 mslabel:" + videoStream.id,
            "a=ssrc:1 label:" + videoTracks[0].id,
            "a=ssrc:2 cname:localVideo",
            "a=ssrc:2 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:2 mslabel:" + videoStream.id,
            "a=ssrc:2 label:" + videoTracks[0].id,
            "a=ssrc:3 cname:localVideo",
            "a=ssrc:3 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:3 mslabel:" + videoStream.id,
            "a=ssrc:3 label:" + videoTracks[0].id,
        ];
        lines.push("");
        return lines.join("\n");
    }
    getLocalStream(index) {
        if (this.peerConnection) {
            return this.peerConnection.getLocalStreams()[index || 0];
        }
    }
    getRemoteStream(index) {
        if (this.peerConnection) {
            return this.peerConnection.getRemoteStreams()[index || 0];
        }
    }
    /**
     * @description This method frees the resources used by WebRtcPeer.
     *
     * @function module:WebRtcPeer.prototype.dispose
     */
    dispose() {
        logger.debug("Disposing WebRtcPeer");
        const pc = this.peerConnection;
        const dc = this.dataChannel;
        try {
            if (dc) {
                if (dc.readyState === "closed")
                    return;
                dc.close();
            }
            if (pc) {
                if (pc.signalingState === "closed")
                    return;
                pc.getLocalStreams().forEach(this.streamStop.bind(this));
                // FIXME This is not yet implemented in firefox
                // if(videoStream) pc.removeStream(videoStream);
                // if(this.audioStream) pc.removeStream(this.audioStream);
                pc.close();
            }
        }
        catch (err) {
            logger.warn("Exception disposing webrtc peer " + err);
        }
        this.emit("_dispose");
    }
}
//
// Specialized child classes
//
class WebRtcPeerHelper {
    static WebRtcPeerRecvonly(options, callback) {
        return new WebRtcPeer("recvonly", options, callback);
    }
    static WebRtcPeerSendonly(options, callback) {
        return new WebRtcPeer("sendonly", options, callback);
    }
    static WebRtcPeerSendrecv(options, callback) {
        return new WebRtcPeer("sendrecv", options, callback);
    }
}
exports.WebRtcPeerHelper = WebRtcPeerHelper;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.33
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.33',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 350;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK   = 'Facebook';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /yabrowser\/([\w\.]+)/i                                             // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i                                              // Links
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            // Ordered by popularity
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /\((ip(?:hone|od)[\w ]*);/i                                         // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi)( bui|\))/i,                                         // Kindle Fire without Silk
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i               // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2)?)/i                                                     // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i                                       // iCab
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+ ([\w\.]+\w)/i                                         // Chromium OS
            ], [[NAME, 'Chromium OS'], VERSION],[

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _ua = ua || ((typeof window !== UNDEF_TYPE && window.navigator && window.navigator.userAgent) ? window.navigator.userAgent : EMPTY);
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser.major = majorize(_browser.version);
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(18)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.Interop = __webpack_require__(20);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global RTCSessionDescription */
/* global RTCIceCandidate */
/* jshint -W097 */


var transform = __webpack_require__(21);
var arrayEquals = __webpack_require__(26);

function Interop() {

    /**
     * This map holds the most recent Unified Plan offer/answer SDP that was
     * converted to Plan B, with the SDP type ('offer' or 'answer') as keys and
     * the SDP string as values.
     *
     * @type {{}}
     */
    this.cache = {
        mlB2UMap : {},
        mlU2BMap : {}
    };
}

module.exports = Interop;

/**
 * Changes the candidate args to match with the related Unified Plan
 */
Interop.prototype.candidateToUnifiedPlan = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    cand.sdpMLineIndex = this.cache.mlB2UMap[cand.sdpMLineIndex];
    /* TODO: change sdpMid to (audio|video)-SSRC */

    return cand;
};

/**
 * Changes the candidate args to match with the related Plan B
 */
Interop.prototype.candidateToPlanB = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    if (cand.sdpMid.indexOf('audio') === 0) {
      cand.sdpMid = 'audio';
    } else if (cand.sdpMid.indexOf('video') === 0) {
      cand.sdpMid = 'video';
    } else {
      throw new Error('candidate with ' + cand.sdpMid + ' not allowed');
    }

    cand.sdpMLineIndex = this.cache.mlU2BMap[cand.sdpMLineIndex];

    return cand;
};

/**
 * Returns the index of the first m-line with the given media type and with a
 * direction which allows sending, in the last Unified Plan description with
 * type "answer" converted to Plan B. Returns {null} if there is no saved
 * answer, or if none of its m-lines with the given type allow sending.
 * @param type the media type ("audio" or "video").
 * @returns {*}
 */
Interop.prototype.getFirstSendingIndexFromAnswer = function(type) {
    if (!this.cache.answer) {
        return null;
    }

    var session = transform.parse(this.cache.answer);
    if (session && session.media && Array.isArray(session.media)){
        for (var i = 0; i < session.media.length; i++) {
            if (session.media[i].type == type &&
                (!session.media[i].direction /* default to sendrecv */ ||
                    session.media[i].direction === 'sendrecv' ||
                    session.media[i].direction === 'sendonly')){
                return i;
            }
        }
    }

    return null;
};

/**
 * This method transforms a Unified Plan SDP to an equivalent Plan B SDP. A
 * PeerConnection wrapper transforms the SDP to Plan B before passing it to the
 * application.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toPlanB = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    // Objectify the SDP for easier manipulation.
    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Unified Plan SDP. Plan B
    // SDP has a video, an audio and a data "channel" at most.
    if (session.media.length <= 3 && session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Unified Plan.');
        return desc;
    }

    //#endregion

    // HACK https://bugzilla.mozilla.org/show_bug.cgi?id=1113443
    var sdp = desc.sdp;
    var rewrite = false;
    for (var i = 0; i < session.media.length; i++) {
        var uLine = session.media[i];
        uLine.rtp.forEach(function(rtp) {
            if (rtp.codec === 'NULL')
            {
                rewrite = true;
                var offer = transform.parse(self.cache.offer);
                rtp.codec = offer.media[i].rtp[0].codec;
            }
        });
    }
    if (rewrite) {
        sdp = transform.write(session);
    }

    // Unified Plan SDP is our "precious". Cache it for later use in the Plan B
    // -> Unified Plan transformation.
    this.cache[desc.type] = sdp;

    //#region Convert from Unified Plan to Plan B.

    // We rebuild the session.media array.
    var media = session.media;
    session.media = [];

    // Associative array that maps channel types to channel objects for fast
    // access to channel objects by their type, e.g. type2bl['audio']->channel
    // obj.
    var type2bl = {};

    // Used to build the group:BUNDLE value after the channels construction
    // loop.
    var types = [];

    media.forEach(function(uLine) {
        // rtcp-mux is required in the Plan B SDP.
        if ((typeof uLine.rtcpMux !== 'string' ||
            uLine.rtcpMux !== 'rtcp-mux') &&
            uLine.direction !== 'inactive') {
            throw new Error('Cannot convert to Plan B because m-lines ' +
                'without the rtcp-mux attribute were found.');
        }

        // If we don't have a channel for this uLine.type OR the selected is
        // inactive, then select this uLine as the channel basis.
        if (typeof type2bl[uLine.type] === 'undefined' ||
            type2bl[uLine.type].direction === 'inactive') {
            type2bl[uLine.type] = uLine;
        }

        if (uLine.protocol != type2bl[uLine.type].protocol) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different protocols and this library does not have ' +
              'support for that');
        }

        if (uLine.payloads != type2bl[uLine.type].payloads) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different payloads and this library does not have ' +
              'support for that');
        }

    });

    // Implode the Unified Plan m-lines/tracks into Plan B channels.
    media.forEach(function(uLine) {
        if (uLine.type === 'application') {
            session.media.push(uLine);
            types.push(uLine.mid);
            return;
        }

        // Add sources to the channel and handle a=msid.
        if (typeof uLine.sources === 'object') {
            Object.keys(uLine.sources).forEach(function(ssrc) {
                if (typeof type2bl[uLine.type].sources !== 'object')
                    type2bl[uLine.type].sources = {};

                // Assign the sources to the channel.
                type2bl[uLine.type].sources[ssrc] =
                    uLine.sources[ssrc];

                if (typeof uLine.msid !== 'undefined') {
                    // In Plan B the msid is an SSRC attribute. Also, we don't
                    // care about the obsolete label and mslabel attributes.
                    //
                    // Note that it is not guaranteed that the uLine will
                    // have an msid. recvonly channels in particular don't have
                    // one.
                    type2bl[uLine.type].sources[ssrc].msid =
                        uLine.msid;
                }
                // NOTE ssrcs in ssrc groups will share msids, as
                // draft-uberti-rtcweb-plan-00 mandates.
            });
        }

        // Add ssrc groups to the channel.
        if (typeof uLine.ssrcGroups !== 'undefined' &&
                Array.isArray(uLine.ssrcGroups)) {

            // Create the ssrcGroups array, if it's not defined.
            if (typeof type2bl[uLine.type].ssrcGroups === 'undefined' ||
                    !Array.isArray(type2bl[uLine.type].ssrcGroups)) {
                type2bl[uLine.type].ssrcGroups = [];
            }

            type2bl[uLine.type].ssrcGroups =
                type2bl[uLine.type].ssrcGroups.concat(
                    uLine.ssrcGroups);
        }

        if (type2bl[uLine.type] === uLine) {
            // Plan B mids are in ['audio', 'video', 'data']
            uLine.mid = uLine.type;

            // Plan B doesn't support/need the bundle-only attribute.
            delete uLine.bundleOnly;

            // In Plan B the msid is an SSRC attribute.
            delete uLine.msid;

	    if (uLine.type == media[0].type) {
	      types.unshift(uLine.type);
	      // Add the channel to the new media array.
	      session.media.unshift(uLine);
	    } else {
	      types.push(uLine.type);
	      // Add the channel to the new media array.
	      session.media.push(uLine);
	    }
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group with the new mids.
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = types.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};

/* follow rules defined in RFC4145 */
function addSetupAttr(uLine) {
    if (typeof uLine.setup === 'undefined') {
        return;
    }

    if (uLine.setup === "active") {
            uLine.setup = "passive";
    } else if (uLine.setup === "passive") {
        uLine.setup = "active";
    }
}

/**
 * This method transforms a Plan B SDP to an equivalent Unified Plan SDP. A
 * PeerConnection wrapper transforms the SDP to Unified Plan before passing it
 * to FF.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toUnifiedPlan = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Plan B SDP. Plan B SDP has
    // a video, an audio and a data "channel" at most.
    if (session.media.length > 3 || !session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Plan B.');
        return desc;
    }

    // Make sure this Plan B SDP can be converted to a Unified Plan SDP.
    var mids = [];
    session.media.forEach(function(m) {
        mids.push(m.mid);
    });

    var hasBundle = false;
    if (typeof session.groups !== 'undefined' &&
        Array.isArray(session.groups)) {
        hasBundle = session.groups.every(function(g) {
            return g.type !== 'BUNDLE' ||
                arrayEquals.apply(g.mids.sort(), [mids.sort()]);
        });
    }

    if (!hasBundle) {
        var mustBeBundle = false;

        session.media.forEach(function(m) {
            if (m.direction !== 'inactive') {
                mustBeBundle = true;
            }
        });

        if (mustBeBundle) {
            throw new Error("Cannot convert to Unified Plan because m-lines that" +
              " are not bundled were found.");
        }
    }

    //#endregion


    //#region Convert from Plan B to Unified Plan.

    // Unfortunately, a Plan B offer/answer doesn't have enough information to
    // rebuild an equivalent Unified Plan offer/answer.
    //
    // For example, if this is a local answer (in Unified Plan style) that we
    // convert to Plan B prior to handing it over to the application (the
    // PeerConnection wrapper called us, for instance, after a successful
    // createAnswer), we want to remember the m-line at which we've seen the
    // (local) SSRC. That's because when the application wants to do call the
    // SLD method, forcing us to do the inverse transformation (from Plan B to
    // Unified Plan), we need to know to which m-line to assign the (local)
    // SSRC. We also need to know all the other m-lines that the original
    // answer had and include them in the transformed answer as well.
    //
    // Another example is if this is a remote offer that we convert to Plan B
    // prior to giving it to the application, we want to remember the mid at
    // which we've seen the (remote) SSRC.
    //
    // In the iteration that follows, we use the cached Unified Plan (if it
    // exists) to assign mids to ssrcs.

    var type;
    if (desc.type === 'answer') {
        type = 'offer';
    } else if (desc.type === 'offer') {
        type = 'answer';
    } else {
        throw new Error("Type '" + desc.type + "' not supported.");
    }

    var cached;
    if (typeof this.cache[type] !== 'undefined') {
        cached = transform.parse(this.cache[type]);
    }

    var recvonlySsrcs = {
        audio: {},
        video: {}
    };

    // A helper map that sends mids to m-line objects. We use it later to
    // rebuild the Unified Plan style session.media array.
    var mid2ul = {};
    var bIdx = 0;
    var uIdx = 0;

    var sources2ul = {};

    var candidates;
    var iceUfrag;
    var icePwd;
    var fingerprint;
    var payloads = {};
    var rtcpFb = {};
    var rtp = {};

    session.media.forEach(function(bLine) {
        if ((typeof bLine.rtcpMux !== 'string' ||
            bLine.rtcpMux !== 'rtcp-mux') &&
            bLine.direction !== 'inactive') {
            throw new Error("Cannot convert to Unified Plan because m-lines " +
                "without the rtcp-mux attribute were found.");
        }

        if (bLine.type === 'application') {
            mid2ul[bLine.mid] = bLine;
            return;
        }

        // With rtcp-mux and bundle all the channels should have the same ICE
        // stuff.
        var sources = bLine.sources;
        var ssrcGroups = bLine.ssrcGroups;
        var port = bLine.port;

        /* Chrome adds different candidates even using bundle, so we concat the candidates list */
        if (typeof bLine.candidates != 'undefined') {
            if (typeof candidates != 'undefined') {
                candidates = candidates.concat(bLine.candidates);
            } else {
                candidates = bLine.candidates;
            }
        }

        if ((typeof iceUfrag != 'undefined') && (typeof bLine.iceUfrag != 'undefined') && (iceUfrag != bLine.iceUfrag)) {
            throw new Error("Only BUNDLE supported, iceUfrag must be the same for all m-lines.\n" +
                            "\tLast iceUfrag: " + iceUfrag + "\n" +
                            "\tNew iceUfrag: " + bLine.iceUfrag
            );
        }

        if (typeof bLine.iceUfrag != 'undefined') {
                iceUfrag = bLine.iceUfrag;
        }

        if ((typeof icePwd != 'undefined') && (typeof bLine.icePwd != 'undefined') && (icePwd != bLine.icePwd)) {
            throw new Error("Only BUNDLE supported, icePwd must be the same for all m-lines.\n" +
                            "\tLast icePwd: " + icePwd + "\n" +
                            "\tNew icePwd: " + bLine.icePwd
            );
        }

        if (typeof bLine.icePwd != 'undefined') {
                icePwd = bLine.icePwd;
        }

        if ((typeof fingerprint != 'undefined') && (typeof bLine.fingerprint != 'undefined') &&
            (fingerprint.type != bLine.fingerprint.type || fingerprint.hash != bLine.fingerprint.hash)) {
            throw new Error("Only BUNDLE supported, fingerprint must be the same for all m-lines.\n" +
                            "\tLast fingerprint: " + JSON.stringify(fingerprint) + "\n" +
                            "\tNew fingerprint: " + JSON.stringify(bLine.fingerprint)
            );
        }

        if (typeof bLine.fingerprint != 'undefined') {
                fingerprint = bLine.fingerprint;
        }

        payloads[bLine.type] = bLine.payloads;
        rtcpFb[bLine.type] = bLine.rtcpFb;
        rtp[bLine.type] = bLine.rtp;

        // inverted ssrc group map
        var ssrc2group = {};
        if (typeof ssrcGroups !== 'undefined' && Array.isArray(ssrcGroups)) {
            ssrcGroups.forEach(function (ssrcGroup) {
                // XXX This might brake if an SSRC is in more than one group
                // for some reason.
                if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                    Array.isArray(ssrcGroup.ssrcs)) {
                    ssrcGroup.ssrcs.forEach(function (ssrc) {
                        if (typeof ssrc2group[ssrc] === 'undefined') {
                            ssrc2group[ssrc] = [];
                        }

                        ssrc2group[ssrc].push(ssrcGroup);
                    });
                }
            });
        }

        // ssrc to m-line index.
        var ssrc2ml = {};

        if (typeof sources === 'object') {

            // We'll use the "bLine" object as a prototype for each new "mLine"
            // that we create, but first we need to clean it up a bit.
            delete bLine.sources;
            delete bLine.ssrcGroups;
            delete bLine.candidates;
            delete bLine.iceUfrag;
            delete bLine.icePwd;
            delete bLine.fingerprint;
            delete bLine.port;
            delete bLine.mid;

            // Explode the Plan B channel sources with one m-line per source.
            Object.keys(sources).forEach(function(ssrc) {

                // The (unified) m-line for this SSRC. We either create it from
                // scratch or, if it's a grouped SSRC, we re-use a related
                // mline. In other words, if the source is grouped with another
                // source, put the two together in the same m-line.
                var uLine;

                // We assume here that we are the answerer in the O/A, so any
                // offers which we translate come from the remote side, while
                // answers are local. So the check below is to make that we
                // handle receive-only SSRCs in a special way only if they come
                // from the remote side.
                if (desc.type==='offer') {
                    // We want to detect SSRCs which are used by a remote peer
                    // in an m-line with direction=recvonly (i.e. they are
                    // being used for RTCP only).
                    // This information would have gotten lost if the remote
                    // peer used Unified Plan and their local description was
                    // translated to Plan B. So we use the lack of an MSID
                    // attribute to deduce a "receive only" SSRC.
                    if (!sources[ssrc].msid) {
                        recvonlySsrcs[bLine.type][ssrc] = sources[ssrc];
                        // Receive-only SSRCs must not create new m-lines. We
                        // will assign them to an existing m-line later.
                        return;
                    }
                }

                if (typeof ssrc2group[ssrc] !== 'undefined' &&
                    Array.isArray(ssrc2group[ssrc])) {
                    ssrc2group[ssrc].some(function (ssrcGroup) {
                        // ssrcGroup.ssrcs *is* an Array, no need to check
                        // again here.
                        return ssrcGroup.ssrcs.some(function (related) {
                            if (typeof ssrc2ml[related] === 'object') {
                                uLine = ssrc2ml[related];
                                return true;
                            }
                        });
                    });
                }

                if (typeof uLine === 'object') {
                    // the m-line already exists. Just add the source.
                    uLine.sources[ssrc] = sources[ssrc];
                    delete sources[ssrc].msid;
                } else {
                    // Use the "bLine" as a prototype for the "uLine".
                    uLine = Object.create(bLine);
                    ssrc2ml[ssrc] = uLine;

                    if (typeof sources[ssrc].msid !== 'undefined') {
                        // Assign the msid of the source to the m-line. Note
                        // that it is not guaranteed that the source will have
                        // msid. In particular "recvonly" sources don't have an
                        // msid. Note that "recvonly" is a term only defined
                        // for m-lines.
                        uLine.msid = sources[ssrc].msid;
                        delete sources[ssrc].msid;
                    }

                    // We assign one SSRC per media line.
                    uLine.sources = {};
                    uLine.sources[ssrc] = sources[ssrc];
                    uLine.ssrcGroups = ssrc2group[ssrc];

                    // Use the cached Unified Plan SDP (if it exists) to assign
                    // SSRCs to mids.
                    if (typeof cached !== 'undefined' &&
                        typeof cached.media !== 'undefined' &&
                        Array.isArray(cached.media)) {

                        cached.media.forEach(function (m) {
                            if (typeof m.sources === 'object') {
                                Object.keys(m.sources).forEach(function (s) {
                                    if (s === ssrc) {
                                        uLine.mid = m.mid;
                                    }
                                });
                            }
                        });
                    }

                    if (typeof uLine.mid === 'undefined') {

                        // If this is an SSRC that we see for the first time
                        // assign it a new mid. This is typically the case when
                        // this method is called to transform a remote
                        // description for the first time or when there is a
                        // new SSRC in the remote description because a new
                        // peer has joined the conference. Local SSRCs should
                        // have already been added to the map in the toPlanB
                        // method.
                        //
                        // Because FF generates answers in Unified Plan style,
                        // we MUST already have a cached answer with all the
                        // local SSRCs mapped to some m-line/mid.

                        uLine.mid = [bLine.type, '-', ssrc].join('');
                    }

                    // Include the candidates in the 1st media line.
                    uLine.candidates = candidates;
                    uLine.iceUfrag = iceUfrag;
                    uLine.icePwd = icePwd;
                    uLine.fingerprint = fingerprint;
                    uLine.port = port;

                    mid2ul[uLine.mid] = uLine;
                    sources2ul[uIdx] = uLine.sources;

                    self.cache.mlU2BMap[uIdx] = bIdx;
                    if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
                      self.cache.mlB2UMap[bIdx] = uIdx;
                    }
                    uIdx++;
                }
            });
        } else {
          var uLine = bLine;

          uLine.candidates = candidates;
          uLine.iceUfrag = iceUfrag;
          uLine.icePwd = icePwd;
          uLine.fingerprint = fingerprint;
          uLine.port = port;

          mid2ul[uLine.mid] = uLine;

          self.cache.mlU2BMap[uIdx] = bIdx;
          if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
            self.cache.mlB2UMap[bIdx] = uIdx;
          }
        }

        bIdx++;
    });

    // Rebuild the media array in the right order and add the missing mLines
    // (missing from the Plan B SDP).
    session.media = [];
    mids = []; // reuse

    if (desc.type === 'answer') {

        // The media lines in the answer must match the media lines in the
        // offer. The order is important too. Here we assume that Firefox is
        // the answerer, so we merely have to use the reconstructed (unified)
        // answer to update the cached (unified) answer accordingly.
        //
        // In the general case, one would have to use the cached (unified)
        // offer to find the m-lines that are missing from the reconstructed
        // answer, potentially grabbing them from the cached (unified) answer.
        // One has to be careful with this approach because inactive m-lines do
        // not always have an mid, making it tricky (impossible?) to find where
        // exactly and which m-lines are missing from the reconstructed answer.

        for (var i = 0; i < cached.media.length; i++) {
            var uLine = cached.media[i];

            delete uLine.msid;
            delete uLine.sources;
            delete uLine.ssrcGroups;

            if (typeof sources2ul[i] === 'undefined') {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'recvonly';
              else if (uLine.direction === 'sendonly')
                  uLine.direction = 'inactive';
            } else {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'sendrecv';
              else if (uLine.direction === 'recvonly')
                  uLine.direction = 'sendonly';
            }

            uLine.sources = sources2ul[i];
            uLine.candidates = candidates;
            uLine.iceUfrag = iceUfrag;
            uLine.icePwd = icePwd;
            uLine.fingerprint = fingerprint;

            uLine.rtp = rtp[uLine.type];
            uLine.payloads = payloads[uLine.type];
            uLine.rtcpFb = rtcpFb[uLine.type];

            session.media.push(uLine);

            if (typeof uLine.mid === 'string') {
                // inactive lines don't/may not have an mid.
                mids.push(uLine.mid);
            }
        }
    } else {

        // SDP offer/answer (and the JSEP spec) forbids removing an m-section
        // under any circumstances. If we are no longer interested in sending a
        // track, we just remove the msid and ssrc attributes and set it to
        // either a=recvonly (as the reofferer, we must use recvonly if the
        // other side was previously sending on the m-section, but we can also
        // leave the possibility open if it wasn't previously in use), or
        // a=inactive.

        if (typeof cached !== 'undefined' &&
            typeof cached.media !== 'undefined' &&
            Array.isArray(cached.media)) {
            cached.media.forEach(function(uLine) {
                mids.push(uLine.mid);
                if (typeof mid2ul[uLine.mid] !== 'undefined') {
                    session.media.push(mid2ul[uLine.mid]);
                } else {
                    delete uLine.msid;
                    delete uLine.sources;
                    delete uLine.ssrcGroups;

                    if (!uLine.direction
                        || uLine.direction === 'sendrecv') {
                        uLine.direction = 'sendonly';
                    }
                    if (!uLine.direction
                        || uLine.direction === 'recvonly') {
                        uLine.direction = 'inactive';
                    }

                    addSetupAttr (uLine);
                    session.media.push(uLine);
                }
            });
        }

        // Add all the remaining (new) m-lines of the transformed SDP.
        Object.keys(mid2ul).forEach(function(mid) {
            if (mids.indexOf(mid) === -1) {
                mids.push(mid);
                if (mid2ul[mid].direction === 'recvonly') {
                    // This is a remote recvonly channel. Add its SSRC to the
                    // appropriate sendrecv or sendonly channel.
                    // TODO(gp) what if we don't have sendrecv/sendonly
                    // channel?

                    var done = false;

                    session.media.some(function (uLine) {
                        if ((uLine.direction === 'sendrecv' ||
                            uLine.direction === 'sendonly') &&
                            uLine.type === mid2ul[mid].type) {
                            // mid2ul[mid] shouldn't have any ssrc-groups
                            Object.keys(mid2ul[mid].sources).forEach(
                                function (ssrc) {
                                uLine.sources[ssrc] =
                                    mid2ul[mid].sources[ssrc];
                            });

                            done = true;
                            return true;
                        }
                    });

                    if (!done) {
                        session.media.push(mid2ul[mid]);
                    }
                } else {
                    session.media.push(mid2ul[mid]);
                }
            }
        });
    }

    // After we have constructed the Plan Unified m-lines we can figure out
    // where (in which m-line) to place the 'recvonly SSRCs'.
    // Note: we assume here that we are the answerer in the O/A, so any offers
    // which we translate come from the remote side, while answers are local
    // (and so our last local description is cached as an 'answer').
    ["audio", "video"].forEach(function (type) {
        if (!session || !session.media || !Array.isArray(session.media))
            return;

        var idx = null;
        if (Object.keys(recvonlySsrcs[type]).length > 0) {
            idx = self.getFirstSendingIndexFromAnswer(type);
            if (idx === null){
                // If this is the first offer we receive, we don't have a
                // cached answer. Assume that we will be sending media using
                // the first m-line for each media type.

                for (var i = 0; i < session.media.length; i++) {
                    if (session.media[i].type === type) {
                        idx = i;
                        break;
                    }
                }
            }
        }

        if (idx && session.media.length > idx) {
            var mLine = session.media[idx];
            Object.keys(recvonlySsrcs[type]).forEach(function(ssrc) {
                if (mLine.sources && mLine.sources[ssrc]) {
                    console.warn("Replacing an existing SSRC.");
                }
                if (!mLine.sources) {
                    mLine.sources = {};
                }

                mLine.sources[ssrc] = recvonlySsrcs[type][ssrc];
            });
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group (since we regenerated the mids)
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = mids.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    // Cache the transformed SDP (Unified Plan) for later re-use in this
    // function.
    this.cache[desc.type] = resStr;

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var transform = __webpack_require__(22);

exports.write = function(session, opts) {

  if (typeof session !== 'undefined' &&
      typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // expand sources to ssrcs
      if (typeof mLine.sources !== 'undefined' &&
        Object.keys(mLine.sources).length !== 0) {
          mLine.ssrcs = [];
          Object.keys(mLine.sources).forEach(function (ssrc) {
            var source = mLine.sources[ssrc];
            Object.keys(source).forEach(function (attribute) {
              mLine.ssrcs.push({
                id: ssrc,
                attribute: attribute,
                value: source[attribute]
              });
            });
          });
          delete mLine.sources;
        }

      // join ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                Array.isArray(ssrcGroup.ssrcs)) {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(' ');
            }
          });
        }
    });
  }

  // join group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids !== 'undefined' && Array.isArray(g.mids)) {
        g.mids = g.mids.join(' ');
      }
    });
  }

  return transform.write(session, opts);
};

exports.parse = function(sdp) {
  var session = transform.parse(sdp);

  if (typeof session !== 'undefined' && typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // group sources attributes by ssrc
      if (typeof mLine.ssrcs !== 'undefined' && Array.isArray(mLine.ssrcs)) {
        mLine.sources = {};
        mLine.ssrcs.forEach(function (ssrc) {
          if (!mLine.sources[ssrc.id])
          mLine.sources[ssrc.id] = {};
        mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
        });

        delete mLine.ssrcs;
      }

      // split ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs === 'string') {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(' ');
            }
          });
        }
    });
  }
  // split group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids === 'string') {
        g.mids = g.mids.split(' ');
      }
    });
  }

  return session;
};



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(23);
var writer = __webpack_require__(25);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(24);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var fmtpReducer = function (acc, expr) {
  var s = expr.split('=');
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseFmtpConfig = function (str) {
  return str.split(/\;\s?/).reduce(fmtpReducer, {});
};

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
      name: 'version',
      reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: "%s %s %d %s IP%d %s"
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: "%d %d"
  }],
  c: [{ //c=IN IP4 10.47.197.26
      name: 'connection',
      reg: /^IN IP(\d) (\S*)/,
      names: ['version', 'ip'],
      format: "IN IP%d %s"
  }],
  b: [{ //b=AS:4000
      push: 'bandwidth',
      reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
      names: ['type', 'limit'],
      format: "%s:%s"
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
      // NB: special - pushes to session
      // TODO: rtp/fmtp should be filtered by the payloads found here?
      reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
      names: ['type', 'port', 'protocol', 'payloads'],
      format: "%s %d %s %s"
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          "rtpmap:%d %s/%s/%s":
          o.rate ?
          "rtpmap:%d %s/%s":
          "rtpmap:%d %s";
      }
    },
    {
      //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: "fmtp:%d %s"
    },
    { //a=control:streamid=0
        name: 'control',
        reg: /^control:(.*)/,
        format: "control:%s"
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          "rtcp:%d %s IP%d %s":
          "rtcp:%d";
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: "rtcp-fb:%d trr-int %d"
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          "rtcp-fb:%s %s %s":
          "rtcp-fb:%s %s";
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['value', 'uri', 'config'], // value may include "/direction" suffix
      format: function (o) {
        return (o.config != null) ?
          "extmap:%s %s %s":
          "extmap:%s %s";
      }
    },
    {
      //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          "crypto:%d %s %s %s":
          "crypto:%d %s %s";
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: "setup:%s"
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: "mid:%s"
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: "msid:%s"
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: "ptime:%d"
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: "maxptime:%d"
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: "ice-ufrag:%s"
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: "ice-pwd:%s"
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: "fingerprint:%s %s"
    },
    {
      //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation'],
      format: function (o) {
        var str = "candidate:%s %d %s %d %s %d typ %s";

        str += (o.raddr != null) ? " raddr %s rport %d" : "%v%v";

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? " tcptype %s" : "%v";

        if (o.generation != null) {
          str += " generation %d";
        }
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: "remote-candidates:%s"
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: "ice-options:%s"
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: "ssrcs",
      reg: /^ssrc:(\d*) ([\w_]*):(.*)/,
      names: ['id', 'attribute', 'value'],
      format: "ssrc:%d %s:%s"
    },
    { //a=ssrc-group:FEC 1 2
      push: "ssrcGroups",
      reg: /^ssrc-group:(\w*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: "ssrc-group:%s %s"
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: "msidSemantic",
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: "msid-semantic: %s %s" // space after ":" is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: "group:%s %s"
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ["value"]
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = "%s";
    }
  });
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(24);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
      case '%%':
        return '%';
      case '%s':
        return String(arg);
      case '%d':
        return Number(arg);
      case '%v':
        return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // "v=0" must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = " "; // "s= " must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = "";
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function arrayEquals(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arrayEquals.apply(this[i], [array[i]]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal:
            // {x:20} != {x:20}
            return false;
        }
    }
    return true;
};



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const CommonHelper_1 = __webpack_require__(5);
const WebRtcPeerHelper_1 = __webpack_require__(16);
class Confrence extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.participants = {};
        this.videoArray = [];
        this.call_type = "video";
        this.projectID = _Credentials.projectId;
        this.projectSecret = _Credentials.secret;
        //this.parentInstance=_Credentials.instance;
        this.currentUser = _Credentials.currentUser;
        this.currentRoom = _Credentials.room;
        this.localVideo = _Credentials.localVideo;
        this.container = _Credentials.container;
        this.call_type = _Credentials.call_type;
        this.Authentication(_Credentials);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        this.Connect(credentials.media_server);
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ' + message.data);
            switch (messageData.id) {
                case 'existingParticipants':
                    console.log("===yes you====", messageData);
                    this.OnExistingParticipant(messageData);
                    // EventHandler.OnRegister(messageData,this);
                    break;
                case 'newParticipantArrived':
                    this.onNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    this.OnParticipantLeft(messageData);
                    break;
                case 'receiveVideoAnswer':
                    this.ReceiveVideoResponse(messageData);
                    break;
                case 'iceCandidate':
                    this.participants[messageData.name].addIceCandidate(messageData.candidate, function (error) {
                        if (error) {
                            console.error("Error adding candidate: " + error);
                            return;
                        }
                    });
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                    console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            this.Register();
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    OnExistingParticipant(data) {
        let vidContraints = {
            mandatory: {
                //maxWidth : 320,
                maxFrameRate: 15,
                minFrameRate: 15
            }
        };
        if (this.call_type != "video")
            vidContraints = false;
        var constraints = {
            audio: true,
            video: vidContraints
        };
        (0, CommonHelper_1.SetPlaysInline)(this.localVideo);
        var options = {
            localVideo: this.localVideo,
            mediaConstraints: constraints,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'onIceCandidate',
                    candidate: candidate,
                    name: this.currentUser
                };
                this.SendPacket(message);
            }
        };
        let rtcpeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcpeer.generateOffer((error, offerSdp, wp) => {
                if (error)
                    return console.error("sdp offer error");
                var msg = { id: "receiveVideoFrom",
                    sender: this.currentUser,
                    sdpOffer: offerSdp
                };
                this.SendPacket(msg);
            });
        });
        this.participants[this.currentUser] = rtcpeer;
        data.data.forEach((participant) => {
            this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant List", participant: participant });
        });
    }
    /**
     * SetParticipantStream
     */
    SetParticipantVideo(video, participant) {
        (0, CommonHelper_1.SetPlaysInline)(video);
        var options = {
            remoteVideo: video,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'onIceCandidate',
                    candidate: candidate,
                    name: participant
                };
                this.SendPacket(message);
            }
        };
        let rtcp = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcp.generateOffer((error, offerSdp) => {
                if (error)
                    return console.error("sdp offer error");
                console.log('Invoking SDP offer callback function');
                var message = {
                    id: "receiveVideoFrom",
                    sender: participant,
                    sdpOffer: offerSdp
                };
                this.SendPacket(message);
            });
        });
        this.participants[participant] = rtcp;
    }
    onNewParticipant(request) {
        this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant has joined", participant: request.name });
    }
    OnParticipantLeft(request) {
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant has left", participant: request.name });
        var participant = this.participants[request.name];
        if (participant && participant != undefined) {
            participant.dispose();
            delete this.participants[request.name];
        }
    }
    ReceiveVideoResponse(result) {
        let participant = this.participants[result.name];
        console.log("===ongroupcall==recievresp==", result, "participant", this.participants);
        if (participant && participant != undefined)
            participant.processAnswer(result.sdpAnswer, function (error) {
                if (error)
                    return console.error(error);
            });
    }
    OnIceCandidate(res) {
        let participant = this.participants[res.name];
        if (participant != undefined)
            participant.addIceCandidate(res.candidate, function (error) {
                if (error) {
                    console.error("Error adding candidate: " + error);
                    return;
                }
            });
    }
    /**
     * Leave the room
     */
    LeaveRoom() {
        this.SendPacket({
            id: 'leaveRoom'
        });
        for (var key in this.participants) {
            let participant = this.participants[key];
            if (participant && participant != undefined)
                participant.dispose();
        }
        this.ws.close();
    }
    /**
     * Close
     */
    Close() {
    }
    Register() {
        var message = {
            id: 'joinRoom',
            name: this.currentUser,
            room: this.currentRoom,
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * SetMicMute
     */
    SetMicMute() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getAudioTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getAudioTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOn() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getVideoTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOff() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getVideoTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    GetContainer() {
        let container = document.createElement("section");
        for (var p in this.participants) {
            let video = this.participants[p].getVideoElement();
            let smallContainer = this.participants[p].createVideo(video.srcObject);
            container.appendChild(smallContainer);
        }
        return container;
        //return this.container;
    }
}
exports.default = Confrence;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
const CommonHelper_1 = __webpack_require__(5);
const WebRtcPeerHelper_1 = __webpack_require__(16);
class ManyToMany extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
        this.mediaType = "";
        this.videoPlaying = 1;
        this.audioPlaying = 1;
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        if (_Credentials.host) {
            this.Connect(_Credentials.host);
        }
        else {
            this.Authentication(_Credentials);
        }
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    this.registerPingWorker();
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.mediaType = messageData.media_type;
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingGroupCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer', messageData);
                    //EventHandler.SessionEnd(messageData,this);
                    // this.DisposeWebrtc(true);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    //EventHandler.SessionInvite(messageData,this);
                    break;
                case 'session_cancel':
                    this.OnSessionCancel(messageData);
                    console.log("===onParticipantOffer== exiting session_cancel", messageData, new Date().toLocaleTimeString());
                    //EventHandler.SessionCancel(messageData,this);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetParticipantStatus(messageData, this);
                    break;
                //EventHandler.SetExistingParticipants(messageData,this);
                ////////   end many to many events
                ////////////////////////////////////////////
                //this.DisposeWebrtc(true);
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
            this.pingWorker.postMessage({ method: 'clearPingInterval' });
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
            this.pingWorker.postMessage({ method: 'clearPingInterval' });
        };
        this.ws = webSocketConnetion;
    }
    AddCandidate(message) {
        console.log("Add Ice Candidate::::", message, this.participants[message.referenceID]);
        if (this.participants[message.referenceID]) {
            this.participants[message.referenceID].addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else {
            console.error("Participant not found for Add Ice Candidate::::", message, this.participants[message.referenceID]);
        }
    }
    OnExistingParticipants(response) {
        let refIDs = response.referenceIDs;
        let participantList = refIDs;
        refIDs.forEach((ref) => {
            if (ref != undefined) {
                // this.participatArray.push(ref);
                // let video=this.ExistingParticipant(ref);
                // participantList.push({referenceID:ref,stream:video.srcObject});
                this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: ref });
            }
        });
        //	this.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
    }
    OnSessionCancel(response) {
        let refID = response.referenceID;
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        var participant = this.participants[refID];
        this.participatArray.splice(this.participatArray.indexOf(refID), 1);
        if (participant && participant != undefined) {
            participant.dispose();
        }
        delete this.participants[refID];
        delete this.participantVideo[refID];
    }
    OnNewParticipant(response) {
        let refID = response.referenceID;
        if (refID != undefined && this.participatArray.indexOf(refID) == -1) {
            //let video=this.ExistingParticipant(refID);
            this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "New participant arrived.", participant: refID });
        }
    }
    OnParticipantLeft(response) {
        let refID = response.referenceID;
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        // var participant = this.participants[refID];
        // this.participatArray.splice(this.participatArray.indexOf(refID),1);
        // //participant.dispose();
        // delete this.participants[refID];
        // delete this.participantVideo[refID];
    }
    SetParticipantVideo(refId, partiVideo) {
        (0, CommonHelper_1.SetPlaysInline)(partiVideo);
        let options = {
            remoteVideo: partiVideo,
            onicecandidate: (candidate) => {
                this.OnParticipantIceCandidate(candidate, refId);
            },
            onerror: this.onError
        };
        let rtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcPeer.generateOffer((error, offerSdp) => {
                this.onParticipantOffer(error, offerSdp, refId);
            });
        });
        this.participants[refId] = rtcPeer;
        this.participantVideo[refId] = partiVideo;
        return partiVideo;
    }
    ExistingParticipant(refId) {
        var _a;
        let partiVideo = document.createElement("video");
        partiVideo.autoplay = true;
        partiVideo.muted = true;
        partiVideo.style.display = "none";
        let options = {
            remoteVideo: partiVideo,
            onicecandidate: (candidate) => {
                this.OnParticipantIceCandidate(candidate, refId);
            },
            onerror: this.onError
        };
        let rtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcPeer.generateOffer((error, offerSdp) => {
                this.onParticipantOffer(error, offerSdp, refId);
            });
        });
        this.participants[refId] = rtcPeer;
        this.participantVideo[refId] = partiVideo;
        (_a = document.getElementById("hellofyou")) === null || _a === void 0 ? void 0 : _a.appendChild(partiVideo);
        return partiVideo;
    }
    CallResponse(message) {
        console.info('CallResponse', this.participants[message.referenceID], message);
        if (message.response == 'accepted') {
            this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        EventHandler_1.default.SessionStart(message, this);
        console.log("Start=Commm", message.referenceID, message.referenceID, this.participants[message.referenceID]);
        this.participants[message.referenceID].processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    OnOfferManytoManyCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            /////// new change
            "referenceID": this.currentUser,
            ///////////////////////////////////
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.projectID = this.projectID;
        regMessage.tenantID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    GroupCall(params) {
        this.mediaType = params.call_type;
        this.to = Array.isArray(params.to) ? params.to : [params.to];
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        (0, CommonHelper_1.SetPlaysInline)(this.localVideo);
        this.audioPlaying = 1;
        this.videoPlaying = params.call_type != "audio" ? 1 : 0;
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                this.onManyToManyOfferCall(error, offerSdp, params.call_type);
            });
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    JoinGroupCall(params) {
        this.mediaType = params.call_type;
        this.localVideo = params.localVideo;
        (0, CommonHelper_1.SetPlaysInline)(this.localVideo);
        let constraints = {
            audio: true,
            video: params.call_type != "audio"
            // video: {
            //     mandatory: {
            //         maxWidth: 320,
            //         maxFrameRate: 15,
            //         minFrameRate: 15
            //     }
            // }
        };
        var options = {
            mediaConstraints: constraints,
            localVideo: params.localVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentFromUser);
            },
            onerror: this.onError
        };
        let webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                console.log("======here===it goes inner sess", this.callSession);
                this.onJoinManyToManyOfferCall(error, offerSdp, params.call_type);
            });
            console.log("======here===it goes");
        });
        this.participants[this.currentUser] = webRtcPeer;
    }
    /*************
     *
     * Call one to many Broadcasting
     *
     */
    //public CallOneToMany(params:any) {
    Broadcasting(params) {
        this.to = params.to;
        this.currentFromUser = this.currentUser;
        this.localVideo = params.localVideo;
        var options = {
            localVideo: params.localVideo,
            //remoteVideo : params.remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, this.currentUser);
            },
            onerror: this.onError
        };
        this.webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferOneToManyCall(error, offerSdp);
            });
        });
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_one";
        console.log(' OnOfferCall :: :: ::', media_type);
        // var message = {
        // 	id : 'call',
        // 	from : this.currentUser,
        // 	to : this.to,
        // 	sdpOffer : offerSdp
        // };
        // console.log('Invoking SDP Message',message);
        // this.SendPacket(message);
    }
    /*********************************************************
     *
     *  Many One To Many Offer
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @returns
     */
    onManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.callSession = uUID;
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.media_type = media_type;
        callRequest.call_type = "many_to_many";
        callRequest.SendCallRequest(this.ws);
        console.log(' OnOfferCall :: :: ::', media_type);
    }
    onJoinManyToManyOfferCall(error, offerSdp, media_type) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        console.log("======here===it goes inner", media_type);
        let uUID = new Date().getTime().toString();
        let sessionUUID = this.callSession;
        console.log("======here===it goes sess", sessionUUID);
        var message = {
            from: this.currentUser,
            sdpOffer: offerSdp,
            // Custom Attributes
            responseCode: 200,
            responseMessage: "accepted",
            requestType: "session_invite",
            type: "request",
            session_type: "call",
            call_type: "many_to_many",
            media_type: media_type,
            requestID: uUID,
            sessionUUID: this.callSession,
            mcToken: this.mcToken
        };
        this.SendPacket(message);
    }
    onParticipantOffer(error, offerSdp, to) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        var message = {
            from: this.currentUser,
            to: to,
            requestType: "to_receive_stream",
            sdpOffer: offerSdp,
            requestID: uUID,
            type: "request",
            sessionUUID: this.callSession,
            mcToken: this.McToken
        };
        console.log("===onParticipantOffer==", message);
        this.SendPacket(message);
    }
    DisposeWebrtc(status) {
        for (var p in this.participants) {
            let partiRTC = this.participants[p];
            if (partiRTC && partiRTC != undefined) {
                partiRTC.dispose();
            }
        }
        this.participants = {};
        this.participantVideo = {};
        this.callSession = "";
        this.participatArray = [];
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    /***
     *
     * On Participant IceCandidate
     *
     */
    OnParticipantIceCandidate(candidate, ref) {
        var message = {
            requestType: 'onIceCandidate',
            candidate: candidate,
            referenceID: ref,
            sessionUUID: this.callSession
        };
        this.SendPacket(message);
    }
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            this.audioPlaying = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioPlaying,
                "videoInformation": this.videoPlaying
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = false;
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video") ? 1 : 0;
            this.audioPlaying = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioPlaying,
                "videoInformation": this.videoPlaying
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoPlaying = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioPlaying,
                "videoInformation": this.videoPlaying
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoPlaying = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.callSession,
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioPlaying,
                "videoInformation": this.videoPlaying
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    LeaveGroupCall() {
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.callSession,
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    sendStateRPC(data, uUID, store = 1, requestType = 'hv_info', extraParams = {}) {
        let request = {};
        request.requestType = requestType;
        //hv_info --> Host to All viewers Communication
        request.type = 'request';
        request.requestID = new Date().getTime().toString();
        if (uUID === -1) {
            delete request.sessionUUID;
        }
        else {
            request.sessionUUID = uUID ? uUID : this.UUIDSessions[this.currentUser];
        }
        request.mcToken = this.McToken;
        request.referenceID = this.currentUser;
        request.data = data;
        request.store = store; //This information should be save or not for new viewers
        if (extraParams && Object.keys(extraParams).length) {
            request = Object.assign(Object.assign({}, request), extraParams);
        }
        this.ws.send(JSON.stringify(request));
    }
    registerPingWorker() {
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    clearPingInterval();
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            }
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing) {
                    this.sendPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 5000 });
        }
    }
    sendPing() {
        try {
            let pingCount = 0;
            /*for (var uUID in this.webRtcPeers) {
              if(this.pingSessionStopped[uUID])
              {
                console.log("SDK not sending Ping session already stopped from server with 400 pong for: ", uUID);
              }
              else
              {
                pingCount++;
                this.sendStateRPC({}, uUID, 0, 'session_ping')
                console.log("SDK Ping sent for: ", uUID);
              }
            }*/
            if (!pingCount || true) {
                this.sendStateRPC({}, -1, 0, 'ping');
                console.log("SDK Ping sent!");
            }
        }
        catch (e) {
            console.log("Error while sending ping to server.", e);
        }
    }
}
exports.default = ManyToMany;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const WebRtcPeerHelper_1 = __webpack_require__(16);
class Broadcast extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = 1;
        this.audioStatus = 1;
        this.broadCastSession = {};
        this.pingSessionStopped = [];
        this.projectID = _Credentials.projectID;
        this.projectSecret = _Credentials.secret;
        if (_Credentials.host) {
            this.Connect(_Credentials.host);
        }
        else {
            this.Authentication(_Credentials);
        }
        //uncomment for sviewer.com
        //this.Connect("wss://ssig.vdotok.dev:8443/call");
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectID, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectID, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    this.registerPingWorker();
                    break;
                case 'registerURL':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    break;
                case 'callResponse':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    EventHandler_1.default.OnCallResponse(messageData, this);
                    break;
                case 'incomingCall':
                    this.callSession = messageData.sessionUUID;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUUID;
                    this.UUIDSessionTypes[messageData.sessionUUID] = messageData.call_type;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.media_type;
                    this.mediaType = messageData.media_type;
                    console.log('incomingCall case: ', message);
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incomingCall(messageData);
                    break;
                case 'startCommunication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    EventHandler_1.default.SessionEnd(messageData, this);
                    this.DisposeWebrtc(true);
                    break;
                case 'iceCandidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    EventHandler_1.default.SessionInvite(messageData, this);
                    break;
                case 'session_cancel':
                case 'session_break':
                    EventHandler_1.default.SessionCancel(messageData, this);
                    //this.DisposeWebrtc(true);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetCallerStatus(messageData, this);
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                case 'custom_rpc':
                case 'hv_info':
                    console.log("===custom_rpc", messageData, new Date().toLocaleTimeString());
                    if (messageData.data) {
                        this.OnCustomRPC(messageData);
                    }
                    break;
                case 'host_info':
                    console.log('host info==>', messageData);
                    this.emit("call", { type: "HOST_INFO", message: "host availability", available: messageData.data.active, uuid: messageData.sessionUUID, data: messageData });
                    break;
                case 'session_pong':
                case 'session_ping':
                    if (messageData.responseCode == 200) {
                        console.log('sdk session pong', messageData);
                    }
                    else if (messageData.responseCode == 400) {
                        console.log("SDK session ended in pong", messageData);
                        this.pingSessionStopped[messageData.sessionUUID] = true;
                        this.emit("call", { type: "SESSION_SUSPENSION", message: "Show has suspended by VDOTOK", uuid: messageData.sessionUUID });
                    }
                    else if (messageData.responseCode == 407) {
                        console.log("SDK invalid authentication or invalid mcToken in pong", messageData);
                        EventHandler_1.default.OnAuthError(messageData.message, this);
                    }
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUUID });
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUUID });
        };
        this.ws = webSocketConnetion;
    }
    OnCustomRPC(data) {
        console.log('create connection and fire stream! with id = ' + data.data.sessionUUID);
        EventHandler_1.default.OnCustomRPC(data, this);
    }
    AddCandidate(message) {
        this.broadCastSession[message.sessionUUID].addIceCandidate(message.candidate, (error) => {
            if (error) {
                EventHandler_1.default.OnAddCandidate(error, this);
                return console.error('Error adding candidate: ' + error);
            }
        });
    }
    CallResponse(response) {
        console.info('CallResponse', this.webRtcPeer, response);
        if (response.response == 'accepted') {
            this.broadCastSession[response.sessionUUID].processAnswer(response.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        EventHandler_1.default.SessionStart(message, this);
        this.broadCastSession[message.sessionUUID].processAnswer(message.sdpAnswer, (error) => {
            if (error) {
                EventHandler_1.default.SessionSDP(error, this);
                return console.error(error);
            }
        });
    }
    RejectCall(message) {
        let from = this.currentFromUser;
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'reject',
        // 	message : 'user declined'
        // };
        let response = {
            "type": "response",
            "from": from,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    onOfferPublicUrlCall(error, offerSdp, sessionID) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	callResponse : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "publicURL",
            "sdpOffer": offerSdp,
            "requestID": new Date().getTime().toString(),
            "sessionUUID": sessionID,
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
        if (this.broadCastSession && this.broadCastSession[sessionID] && this.broadCastSession[sessionID].peerConnection) {
            this.broadCastSession[sessionID].peerConnection.addEventListener("iceconnectionstatechange", this.onIceError.bind(this, sessionID), false);
        }
    }
    onIceError(uUID, ev) {
        let pc = this.broadCastSession[uUID];
        let states = ['closed', 'failed', 'disconnected'];
        if (pc && pc.peerConnection && pc.peerConnection.iceConnectionState && states.includes(pc.peerConnection.iceConnectionState)) { //it will come for all ice
            console.log("SDK iceconnectionstatechange", pc.peerConnection.iceConnectionState, ev);
            this.emit("call", { type: "ICE_FAILED", message: "An ice candidate failed try refresh", uuid: uUID });
        }
    }
    /*************
     * Register user to SDK
     */
    Register(referenceID, authorizationToken) {
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        regMessage.projectID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    RegisterPublicURL() {
        let referenceID = (0, CommonHelper_1.UuidGenerator)();
        this.currentUser = referenceID;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestID = new Date().getTime().toString();
        regMessage.tenantID = this.projectID;
        regMessage.referenceID = referenceID;
        regMessage.requestType = "registerURL";
        regMessage.SendRegisterRequest(this.ws);
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestID = uUID;
        callRequest.sessionUUID = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.call_type = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        this.mediaType = "video";
        (0, CommonHelper_1.SetPlaysInline)(remoteVideo);
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    AcceptPublicBroadcast(remoteVideo, sessionID) {
        this.mediaType = "video";
        var constraints = {
            audio: false,
            video: false
        };
        (0, CommonHelper_1.SetPlaysInline)(remoteVideo);
        var options = {
            //mediaConstraints: constraints,
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onPublicIceCandidate(candidate, this.currentUser, sessionID);
            },
            onerror: this.onError
        };
        let webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferPublicUrlCall(error, offerSdp, sessionID);
            });
        });
        this.broadCastSession[sessionID] = webRtcPeer;
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    DisposeWebrtc(status) {
        if (this.webRtcPeer) {
            this.webRtcPeer.dispose();
            this.webRtcPeer = null;
            if (status) {
                var messageStop = {
                    "type": "request",
                    "requestType": "session_cancel",
                    "requestID": new Date().getTime().toString(),
                    "sessionUUID": this.UUIDSessions[this.currentFromUser],
                    "mcToken": "f3101a4f686d4dd7993ded88d9e386e5"
                };
                this.SendPacket(messageStop);
            }
            let session = this.UUIDSessions[this.currentFromUser];
            delete this.UUIDSessionTypes[session];
            delete this.UUIDSessions[this.currentFromUser];
        }
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onPublicIceCandidate(candidate, referenceID, sessionID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: sessionID
        };
        this.SendPacket(message);
    }
    onIceCandidate(candidate, referenceID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'onIceCandidate',
            requestType: 'onIceCandidate',
            type: "request",
            candidate: candidate,
            referenceID: referenceID,
            sessionUUID: this.UUIDSessions[referenceID]
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall() {
        let from = this.currentFromUser;
        let messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(messageStop);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestID": new Date().getTime().toString(),
            "sessionUUID": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    EndBroadCasting() {
        let from = this.currentFromUser;
        let sessions = Object.assign({}, this.broadCastSession);
        for (var ses in sessions) {
            let rtc = sessions[ses];
            let messageStop = {
                "type": "request",
                "requestType": "session_cancel",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": ses,
                "mcToken": this.McToken
            };
            this.SendPacket(messageStop);
            if (rtc) {
            }
            rtc.dispose();
            delete this.broadCastSession[ses];
        }
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio") {
                this.localVideo.audioTracks[0].enabled = false;
            }
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestID": new Date().getTime().toString(),
                "sessionUUID": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceID": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    sendStateRPC(data, uUID, store = 0, requestType = 'vh_info') {
        let request = {};
        request.requestType = requestType;
        //hv_info --> Host to All viewers Communication
        request.type = 'request';
        request.requestID = new Date().getTime().toString();
        if (uUID === -1) {
            delete request.sessionUUID;
        }
        else {
            request.sessionUUID = uUID ? uUID : this.UUIDSessions[this.currentUser];
        }
        request.mcToken = this.McToken;
        request.referenceID = this.currentUser;
        request.data = data;
        request.store = store; //This information should be save or not for new viewers
        this.ws.send(JSON.stringify(request));
    }
    registerPingWorker() {
        window.URL = window.URL || window.webkitURL;
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    clearPingInterval();
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            }
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing) {
                    this.sendPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 5000 });
        }
    }
    sendPing() {
        try {
            let pingCount = 0;
            /*for (var uUID in this.broadCastSession) {
                if(this.pingSessionStopped[uUID])
                {
                    console.log("SDK not sending Ping session already stopped from server with 400 pong for: ", uUID);
                }
                else
                {
                    pingCount++;
                    this.sendStateRPC({}, uUID, 0, 'session_ping')
                    console.log("SDK Ping sent for: ", uUID);
                }
            }*/
            if (!pingCount || true) {
                this.sendStateRPC({}, -1, 0, 'ping');
                console.log("SDK Ping sent!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = Broadcast;


/***/ })
/******/ ]);