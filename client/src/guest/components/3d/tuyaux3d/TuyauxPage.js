import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Tuyaux from "./Tuyaux";
import "../Page3d.css";

function TuyauxPage() {
  return (
    <div className="maPage">
      <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [1, -5, -25] }}>
        <gridHelper args={[10, 10, `white`, `gray`]} position={[0, -10, 0]} />
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <mesh position={[2, -10, 0]}>
            <Tuyaux />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default TuyauxPage;
