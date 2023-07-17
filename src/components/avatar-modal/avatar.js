import React, { useContext, useEffect, useMemo, useRef } from "react";
import _ from "lodash";
import { useAnimations, useFBX, useGLTF, useTexture } from "@react-three/drei";
import {
  LineBasicMaterial,
  LinearSRGBColorSpace,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  Vector2,
  SRGBColorSpace,
  AnimationMixer,
  LoopOnce,
} from "three";
import { useFrame } from "@react-three/fiber";
import { CallContext } from "context/call";
import { useLocalStorage } from "hooks/useLocalStorage";
import createAnimation from "./converter";
import { convertToPCM16 } from "utils";
import blinkData from "./blendDataBlink.json";
// import blendData from "./blendData.json";
// import blendData from "./foxBlendData.json";

const WEB_SOCKET_LINK = "wss://avatardemo.vdotok.dev:8520";

function Avatar(props) {
  const {
    state: { avatarStream, audioStream, avatarCall, audio, camera, uuid },
  } = useContext(CallContext);
  const { avatar_url } = props;
  const [configData] = useLocalStorage("configData", {});
  // console.log("** avatar configData", { configData });
  const wsRef = useRef(null);
  const audioContextRef = useRef(null);
  let gltf = useGLTF(avatar_url);
  let morphTargetDictionaryBody = null;
  let morphTargetDictionaryLowerTeeth = null;

  const socketLinkUrl = useMemo(() => {
    if (configData?.avatarUrl) {
      return configData?.avatarUrl;
    }
  }, [configData]);

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
      // t.encoding = sRGBEncoding;
      t.colorSpace = SRGBColorSpace;
      t.flipY = false;
    }
  );

  bodyNormalTexture.colorSpace = LinearSRGBColorSpace;
  tshirtNormalTexture.colorSpace = LinearSRGBColorSpace;
  teethNormalTexture.colorSpace = LinearSRGBColorSpace;
  hairNormalTexture.colorSpace = LinearSRGBColorSpace;
  // bodyNormalTexture.encoding = LinearEncoding;
  // tshirtNormalTexture.encoding = LinearEncoding;
  // teethNormalTexture.encoding = LinearEncoding;
  // hairNormalTexture.encoding = LinearEncoding;

  gltf.scene.traverse((node) => {
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

  const mixer = useMemo(() => new AnimationMixer(gltf.scene), []);

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

  // useEffect(() => {
  //   if (blendData.length) {
  //     setTimeout(() => {
  //       let newClips = [
  //         createAnimation(blendData, morphTargetDictionaryBody, "HG_Body"),

  //         createAnimation(
  //           blendData,
  //           morphTargetDictionaryLowerTeeth,
  //           "HG_TeethLower"
  //         ),
  //       ];
  //       _.each(newClips, (clip) => {
  //         let clipAction = mixer.clipAction(clip);

  //         clipAction.setLoop(LoopOnce);

  //         clipAction.play();
  //       });
  //     }, 5000);
  //   }
  // }, [blendData]);

  useEffect(() => {
    console.log("** avatar ws addEventListener useEffect", {
      uuid,
      avatar_url: configData?.avatarUrl,
      socketLinkUrl,
    });
    if (uuid && socketLinkUrl) {
      const ws = new WebSocket(
        socketLinkUrl
          ? `${socketLinkUrl}/${uuid}`
          : `${WEB_SOCKET_LINK}/${uuid}`
      );

      wsRef.current = ws;

      ws.addEventListener("open", () => {
        console.log("** avatar Json we are connected!");
      });

      ws.addEventListener("close", () => {
        console.log("** avatar Json disconnected!");
        // ws.close();
        // if (audioContextRef.current) {
        //   audioContextRef.current.close();
        // }
      });

      return () => {
        ws.close();
        console.log("** avatar audioContextRef", {
          audioContextRef,
          current: audioContextRef.current,
        });
        if (
          audioContextRef.current &&
          audioContextRef.current.state === "running"
        ) {
          audioContextRef.current.close();
        }
      };
    }
  }, [uuid, socketLinkUrl]);

  useEffect(() => {
    if (audioStream && avatarStream) {
      console.log("** avatar audioStream useEEfect", {
        audioStream,
        avatarStream,
        uuid,
        avatar_url: configData?.avatarUrl,
        socketLinkUrl,
        current: audioContextRef.current,
      });
      let allData = [];
      wsRef.current.addEventListener("message", ({ data }) => {
        try {
          var myData = JSON.parse(data);
          let blendData = myData.blendshapes.blendData;
          allData = [...allData, ...blendData];
          console.log("** avatar Json received: blendData", {
            data,
            myData,
            blendData,
            allBlendData: allData,
          });

          let newClips = [
            createAnimation(blendData, morphTargetDictionaryBody, "HG_Body"),

            createAnimation(
              blendData,
              morphTargetDictionaryLowerTeeth,
              "HG_TeethLower"
            ),
          ];

          // Play animation clips when available
          _.each(newClips, (clip) => {
            let clipAction = mixer.clipAction(clip);

            clipAction.setLoop(LoopOnce);

            clipAction.play();
          });
        } catch (err) {
          console.log("Json is invalid!", err);
        }
      });
    }
  }, [avatarStream, audioStream]);

  useEffect(() => {
    if (avatarCall && audio && !camera) {
      console.log("** avatar initializeAudioContext useEEfect", {
        audioStream,
        avatarStream,
        uuid,
        avatar_url: configData?.avatarUrl,
        socketLinkUrl,
        camera,
        audio,
        avatarCall,
        current: audioContextRef.current,
      });
      const desiredSampleRate = 8000;

      const initializeAudioContext = async () => {
        const mediaStream = new MediaStream([
          document
            .getElementById("remoteVideo")
            .captureStream()
            .getAudioTracks()[0],
        ]);
        audioContextRef.current = new AudioContext({
          sampleRate: desiredSampleRate,
        });

        console.log("** initializeAudioContext audioContextRef", {
          audioContextRef,
        });
        const audioSource =
          audioContextRef.current.createMediaStreamSource(mediaStream);
        const audioProcessor = audioContextRef.current.createScriptProcessor(
          4096,
          1,
          1
        );
        audioProcessor.onaudioprocess = handleAudioProcess;
        audioSource.connect(audioProcessor);
        audioProcessor.connect(audioContextRef.current.destination);
      };

      const handleAudioProcess = (event) => {
        const audioBuffer = event.inputBuffer;
        const channelData = audioBuffer.getChannelData(0);

        const pcm16Data = convertToPCM16(channelData);
        if (wsRef.current) {
          wsRef.current.send(pcm16Data);
        }
      };
      initializeAudioContext();

      return () => {
        if (
          audioContextRef.current &&
          audioContextRef.current.state === "running"
        ) {
          audioContextRef.current.close();
        }
      };
    }

    //  else if (
    //   (!avatarCall && !audio && camera) ||
    //   (!avatarCall && !audio && !camera && wsRef.current)
    // ) {
    //   console.log("** avatar initializeAudioContext useEEfect", {
    //     audioStream,
    //     avatarStream,
    //     uuid,
    //     avatar_url: configData?.avatarUrl,
    //     socketLinkUrl,
    //     camera,
    //     audio,
    //     avatarCall,
    //   });
    //   wsRef.current.send(null);
    // }
  }, [avatarCall, audio, camera]);

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

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group name="avatar">
      <primitive object={gltf.scene} dispose={null} />
    </group>
  );
}

export default Avatar;
