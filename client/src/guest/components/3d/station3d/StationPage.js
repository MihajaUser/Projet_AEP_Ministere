import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Citerne from "./House";
import "../Page3d.css";

function StationPage() {
  return (
    <div className="maPage">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <mesh position={[2, -2, -15]}>
            <Citerne />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}
export default StationPage;
