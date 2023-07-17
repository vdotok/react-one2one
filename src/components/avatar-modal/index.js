import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useTexture,
  Loader,
  Environment,
  OrthographicCamera,
  // OrbitControls,
} from "@react-three/drei";

import { AvatarContainer } from "./style";
import Avatar from "./avatar";

function AvatarModal() {
  return (
    <AvatarContainer>
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
          <Avatar avatar_url="/model.glb" />
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
