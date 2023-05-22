import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Loader,
  Environment,
  useFBX,
  useAnimations,
  OrthographicCamera,
  OrbitControls,
} from "@react-three/drei";
import { MeshStandardMaterial } from "three/src/materials/MeshStandardMaterial";
import { LinearEncoding, sRGBEncoding } from "three/src/constants";
import { LineBasicMaterial, MeshPhysicalMaterial, Vector2 } from "three";
import ReactAudioPlayer from "react-audio-player";
import createAnimation from "./converter";
import blinkData from "./blendDataBlink.json";
import * as THREE from "three";
import axios from "axios";
import { AvatarContainer } from "./style";
import { useLocalStorage } from "hooks/useLocalStorage";
const _ = require("lodash");
// const host = 'http://localhost:5000'
const host = "http://localhost:5000";
const fileN = "http://localhost:9000";
const uRL = "/data_sample.wav";

function convertToPCM16(data) {
  const pcm16Data = new Int16Array(data.length);
  for (let i = 0; i < data.length; i++) {
    const sample = data[i];
    const pcm16Sample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
    pcm16Data[i] = pcm16Sample;
  }
  return pcm16Data;
}

function Avatar({
  avatar_url,
  speak,
  setSpeak,
  text,
  setAudioSource,
  playing,
  setPlaying,
  audioStream,
}) {
  const [configData] = useLocalStorage("configData", {});
  console.log("** avatar configData", { configData });
  const wsRef = useRef(null);
  let gltf = useGLTF(avatar_url);
  let morphTargetDictionaryBody = null;
  let morphTargetDictionaryLowerTeeth = null;

  const [
    bodyTexture,
    eyesTexture,
    teethTexture,
    bodySpecularTexture,
    bodyRoughnessTexture,
    bodyNormalTexture,
    teethNormalTexture,
    // teethSpecularTexture,
    hairTexture,
    tshirtDiffuseTexture,
    tshirtNormalTexture,
    tshirtRoughnessTexture,
    hairAlphaTexture,
    hairNormalTexture,
    hairRoughnessTexture,
  ] = useTexture([
    "/images/body.webp",
    "/images/eyes.webp",
    "/images/teeth_diffuse.webp",
    "/images/body_specular.webp",
    "/images/body_roughness.webp",
    "/images/body_normal.webp",
    "/images/teeth_normal.webp",
    // "/images/teeth_specular.webp",
    "/images/h_color.webp",
    "/images/tshirt_diffuse.webp",
    "/images/tshirt_normal.webp",
    "/images/tshirt_roughness.webp",
    "/images/h_alpha.webp",
    "/images/h_normal.webp",
    "/images/h_roughness.webp",
  ]);
  // console.log("** avatar initial", {
  //   avatar_url,
  //   bodyTexture,
  //   eyesTexture,
  //   teethTexture,
  //   teethNormalTexture,
  //   bodySpecularTexture,
  //   bodyRoughnessTexture,
  //   bodyNormalTexture,
  //   tshirtDiffuseTexture,
  //   tshirtNormalTexture,
  //   tshirtRoughnessTexture,
  //   hairAlphaTexture,
  //   hairNormalTexture,
  //   hairRoughnessTexture,
  // });
  _.each(
    [
      bodyTexture,
      eyesTexture,
      teethTexture,
      teethNormalTexture,
      bodySpecularTexture,
      bodyRoughnessTexture,
      bodyNormalTexture,
      tshirtDiffuseTexture,
      tshirtNormalTexture,
      tshirtRoughnessTexture,
      hairAlphaTexture,
      hairNormalTexture,
      hairRoughnessTexture,
    ],
    (t) => {
      t.encoding = sRGBEncoding;
      t.flipY = false;
    }
  );

  bodyNormalTexture.encoding = LinearEncoding;
  tshirtNormalTexture.encoding = LinearEncoding;
  teethNormalTexture.encoding = LinearEncoding;
  hairNormalTexture.encoding = LinearEncoding;
  // console.log("** avatar updated", {
  //   bodyNormalTexture,
  //   tshirtNormalTexture,
  //   teethNormalTexture,
  //   hairNormalTexture,
  // });
  gltf.scene.traverse((node) => {
    // console.log("** avatar mesh", { node });
    if (
      node.type === "Mesh" ||
      node.type === "LineSegments" ||
      node.type === "SkinnedMesh"
    ) {
      node.castShadow = true;
      node.receiveShadow = true;
      node.frustumCulled = false;

      if (node.name.includes("Body")) {
        node.castShadow = true;
        node.receiveShadow = true;

        node.material = new MeshPhysicalMaterial();
        node.material.map = bodyTexture;

        // node.material.shininess = 60;
        node.material.roughness = 1.7;

        // node.material.specularMap = bodySpecularTexture;
        node.material.roughnessMap = bodyRoughnessTexture;
        node.material.normalMap = bodyNormalTexture;
        node.material.normalScale = new Vector2(0.6, 0.6);

        morphTargetDictionaryBody = node.morphTargetDictionary;

        node.material.envMapIntensity = 0.8;
        // node.material.visible = false;
      }

      if (node.name.includes("Eyes")) {
        node.material = new MeshStandardMaterial();
        node.material.map = eyesTexture;
        // node.material.shininess = 100;
        node.material.roughness = 0.1;
        node.material.envMapIntensity = 0.5;
      }

      if (node.name.includes("Brows")) {
        node.material = new LineBasicMaterial({ color: 0x000000 });
        node.material.linewidth = 1;
        node.material.opacity = 0.5;
        node.material.transparent = true;
        node.visible = false;
      }

      if (node.name.includes("Teeth")) {
        node.receiveShadow = true;
        node.castShadow = true;
        node.material = new MeshStandardMaterial();
        node.material.roughness = 0.1;
        node.material.map = teethTexture;
        node.material.normalMap = teethNormalTexture;

        node.material.envMapIntensity = 0.7;
      }

      if (node.name.includes("Hair")) {
        node.material = new MeshStandardMaterial();
        node.material.map = hairTexture;
        node.material.alphaMap = hairAlphaTexture;
        node.material.normalMap = hairNormalTexture;
        node.material.roughnessMap = hairRoughnessTexture;

        node.material.transparent = true;
        node.material.depthWrite = false;
        node.material.side = 2;
        node.material.color.setHex(0xff0000);

        node.material.envMapIntensity = 0.3;
      }

      if (node.name.includes("TSHIRT")) {
        node.material = new MeshStandardMaterial();

        node.material.map = tshirtDiffuseTexture;
        node.material.roughnessMap = tshirtRoughnessTexture;
        node.material.normalMap = tshirtNormalTexture;

        node.material.color.setHex(0xffffff);

        node.material.envMapIntensity = 0.5;
      }

      if (node.name.includes("TeethLower")) {
        morphTargetDictionaryLowerTeeth = node.morphTargetDictionary;
      }
    }
  });

  const [clips, setClips] = useState([]);

  const mixer = useMemo(() => new THREE.AnimationMixer(gltf.scene), []);

  // useEffect(() => {
  //   if (speak === false) return;

  //   makeSpeechX(text)
  //     .then((response) => {
  //       let blendData = response.data.blendshapes.blendData;

  //       // let finale = JSON.parse(blendData);

  //       console.log("HEY HOW ARE YOU?", blendData);

  //       // let finale = eval(;

  //       console.log("HIP HOP", response.data.filename);

  //       let newClips = [
  //         createAnimation(blendData, morphTargetDictionaryBody, "HG_Body"),

  //         createAnimation(
  //           blendData,
  //           morphTargetDictionaryLowerTeeth,
  //           "HG_TeethLower"
  //         ),
  //       ];

  //       console.log({ MORPH: morphTargetDictionaryBody });

  //       let filename = fileN + uRL;

  //       console.log(filename);

  //       setClips(newClips);

  //       setAudioSource(filename);
  //     })

  //     .catch((err) => {
  //       console.error(err);

  //       setSpeak(false);
  //     });
  // }, [speak]);

  let idleFbx = useFBX("/idle.fbx");
  let { clips: idleClips } = useAnimations(idleFbx.animations);

  idleClips[0].tracks = _.filter(idleClips[0].tracks, (track) => {
    return (
      track.name.includes("Head") ||
      track.name.includes("Neck") ||
      track.name.includes("Spine2")
    );
  });

  idleClips[0].tracks = _.map(idleClips[0].tracks, (track) => {
    if (track.name.includes("Head")) {
      track.name = "head.quaternion";
    }

    if (track.name.includes("Neck")) {
      track.name = "neck.quaternion";
    }

    if (track.name.includes("Spine")) {
      track.name = "spine2.quaternion";
    }

    return track;
  });

  // websocket connected , hook

  useEffect(() => {
    if (audioStream) {
      const desiredSampleRate = 8000;
      let audioContext;
      const ws = new WebSocket(
        configData.avatar_url || "wss://avatardemo.vdotok.dev:8520"
      );
      // const ws = new WebSocket("ws://116.58.26.205:8520");
      // const ws = new WebSocket("ws://192.168.1.21:8520");
      // const ws = new WebSocket("ws://localhost:8800");

      wsRef.current = ws;

      const initializeAudioContext = async () => {
        const mediaStream = new MediaStream([
          document
            .getElementById("remoteVideo")
            .captureStream()
            .getAudioTracks()[0],
        ]);
        audioContext = new AudioContext({ sampleRate: desiredSampleRate });
        const audioSource = audioContext.createMediaStreamSource(mediaStream);
        const audioProcessor = audioContext.createScriptProcessor(4096, 1, 1);
        audioProcessor.onaudioprocess = handleAudioProcess;
        audioSource.connect(audioProcessor);
        audioProcessor.connect(audioContext.destination);
      };

      const handleAudioProcess = (event) => {
        const audioBuffer = event.inputBuffer;
        const channelData = audioBuffer.getChannelData(0);

        const pcm16Data = convertToPCM16(channelData);
        ws.send(pcm16Data);
      };

      // initializeAudioContext();

      ws.addEventListener("open", () => {
        console.log("** avatar Json we are connected!");
        if (audioStream) {
          initializeAudioContext();
        }
        // ws.send(
        //   document
        //     .getElementById("remoteVideo")
        //     .captureStream()
        //     .getAudioTracks()[0]
        // );
        // ws.send(
        //   JSON.stringify({
        //     sender: 456,
        //     receiver: 123,
        //     payload: "hello shahram",
        //     action: "infer",
        //   })
        // );
      });

      ws.addEventListener("message", ({ data }) => {
        // console.log(String.fromCharCode(data));

        // console.log(JSON.parse(data))

        try {
          var myData = JSON.parse(data);
          let blendData = myData.blendshapes.blendData;

          // console.log("** avatar Json received: blendData", {
          //   data,
          //   myData,
          //   blendData,
          // });

          let newClips = [
            createAnimation(blendData, morphTargetDictionaryBody, "HG_Body"),

            createAnimation(
              blendData,
              morphTargetDictionaryLowerTeeth,
              "HG_TeethLower"
            ),
          ];

          // console.log({ MORPH: morphTargetDictionaryBody });
          _.each(newClips, (clip) => {
            let clipAction = mixer.clipAction(clip);

            clipAction.setLoop(THREE.LoopOnce);

            clipAction.play();
          });
          // setClips(newClips);

          // setPlaying(true);
        } catch (err) {
          console.log("Json is invalid!", err);
        }
      });

      // console.log("socketRef==>", { socketRef: wsRef.current });

      // setTimeout(() => {

      //   console.log({ws})

      //   // ws.close()

      // }, 4000);

      ws.addEventListener("close", () => {
        console.log("** avatar Json disconnected!");
      });

      return () => {
        ws.close();
        if (audioContext) {
          audioContext.close();
        }
      };
    }
  }, [audioStream]);

  useEffect(() => {
    let idleClipAction = mixer.clipAction(idleClips[0]);

    idleClipAction.play();

    let blinkClip = createAnimation(
      blinkData,
      morphTargetDictionaryBody,
      "HG_Body"
    );

    let blinkAction = mixer.clipAction(blinkClip);

    blinkAction.play();
  }, []);

  // Play animation clips when available

  useEffect(() => {
    if (playing === false) return;

    _.each(clips, (clip) => {
      let clipAction = mixer.clipAction(clip);

      clipAction.setLoop(THREE.LoopOnce);

      clipAction.play();
    });
    setPlaying(false);
  }, [playing]);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group name="avatar">
      <primitive object={gltf.scene} dispose={null} />
    </group>
  );
}

function makeSpeechX(file) {
  var data = new FormData();

  data.append("file", file);

  var config = {
    method: "post",

    url: "http://192.168.1.21:8965/upload/npy",

    data: data,
  };

  return axios(config);
}

function makeSpeechOld(text) {
  return axios.post(host + "/talk", { text });
}

const STYLES = {
  area: { position: "absolute", bottom: "10px", left: "10px", zIndex: 500 },

  text: {
    margin: "0px",
    width: "300px",
    padding: "5px",
    background: "none",
    color: "#ffffff",
    fontSize: "1.2em",
    border: "none",
  },

  speak: {
    padding: "10px",
    marginTop: "5px",
    display: "block",
    color: "#FFFFFF",
    background: "#222222",
    border: "None",
  },

  area2: { position: "absolute", top: "5px", right: "15px", zIndex: 500 },

  label: { color: "#777777", fontSize: "0.8em" },
};

function AvatarModal(props) {
  const { audioStream } = props;
  // const audioPlayer = useRef();

  const [speak, setSpeak] = useState(false);

  const [text, setText] = useState(
    "My name is Arwen. I'm a virtual human who can speak whatever you type here along with realistic facial movements."
  );

  const [audioSource, setAudioSource] = useState(null);

  const [playing, setPlaying] = useState(false);

  // End of play

  function playerEnded(e) {
    setAudioSource(null);

    setSpeak(false);

    setPlaying(false);
  }

  // Player is read

  // function playerReady(e) {
  //   audioPlayer.current.audioEl.current.play();

  //   setPlaying(true);
  // }

  return (
    <AvatarContainer>
      {/* <div style={STYLES.area}>
        <textarea rows={4} type="text" style={STYLES.text} value={text} onChange={(e) => setText(e.target.value.substring(0, 200))} />
        <button onClick={() => setSpeak(true)} style={STYLES.speak}> { speak? 'Running...': 'Speak' }</button>
  
  </div> */}

      {/* New lines of code */}

      {/* <div>
        <input style={STYLES.area} onChange={(elem)=>{

          console.log(elem);

          setText(elem.target.files[0])

          console.log(text)

          }} type="file" />

        <button onClick={() => setSpeak(true)} style={STYLES.speak}> { speak? 'Running...': 'Speak' }</button>
      </div> */}
      {/* <ReactAudioPlayer
        src={audioSource}
        ref={audioPlayer}
        onEnded={playerEnded}
        onCanPlayThrough={playerReady}
      /> */}

      {/* <Stats /> */}

      <Canvas
        dpr={2}
        onCreated={(ctx) => {
          ctx.gl.physicallyCorrectLights = true;
        }}
      >
        <OrthographicCamera makeDefault zoom={1700} position={[0, 1.65, 1]} />
        {/* <OrbitControls target={[0, 1.65, 0]} /> */}

        <Suspense fallback={null}>
          <Environment
            background={false}
            files="/images/photo_studio_loft_hall_1k.hdr"
          />
        </Suspense>
        <Suspense fallback={null}>
          <Bg />
        </Suspense>
        <Suspense fallback={null}>
          <Avatar
            avatar_url="/model.glb"
            speak={speak}
            setSpeak={setSpeak}
            text={text}
            setAudioSource={setAudioSource}
            playing={playing}
            setPlaying={setPlaying}
            audioStream={audioStream}
          />
        </Suspense>
      </Canvas>
      <Loader dataInterpolation={(p) => `Loading... please wait`} />
    </AvatarContainer>
  );
}

function Bg() {
  const texture = useTexture("/images/solar1.webp");

  return (
    <mesh position={[0, 1.5, -2]} scale={[0.8, 0.8, 0.8]}>
      <planeBufferGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default AvatarModal;
