import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Pump from "./Pump";
import "../Page3d.css";

function PumpPage() {
  return (
    <div className="maPage">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <mesh position={[2, -2, -15]}>
            <Pump />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default PumpPage;
