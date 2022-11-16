import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Pump from "./Pump";
import "../Page3d.css";

function PumpPage() {
  return (
    <div className="maPage">
      <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [0, 70, 30] }}>
        <gridHelper args={[10, 10, `white`, `gray`]} position={[0, -10, 0]} />
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <mesh position={[-5, 12, 37]}>
            <Pump />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default PumpPage;
