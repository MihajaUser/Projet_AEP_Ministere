import React, { Suspense, Box } from "react";
import { Canvas, group } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Citerne from "./Station";
import "../Page3d.css";
import Navigation from "../../2d/citerne2d/Navigation";
function StationPage() {
  return (
    <div className="maPage">
      <div className="my3D">
        <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [9, 2, 0] }}>
          <gridHelper args={[10, 10, `white`, `gray`]} position={[0, -2, 0]} />
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <mesh position={[1, -2, 1]} >
              <Citerne />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      < Navigation linkValue={"url"} />
    </div>
  );
}
export default StationPage;
