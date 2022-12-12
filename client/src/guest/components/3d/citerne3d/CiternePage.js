import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Citerne from "./ReservoirMaison";
import "../Page3d.css";
import Navigation from "../../2d/citerne2d/Navigation";
function CiternePage() {
  return (
    <div className="maPage">
      <div className="my3D">
        <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [20, 5, 5] }}>
          <gridHelper args={[10, 10, `white`, `gray`]} position={[0, -10, 0]} />
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <mesh position={[2.75, -2, 0]}>
              <Citerne />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
      < Navigation linkValue={"url"} />
    </div>
  );
}
export default CiternePage;
