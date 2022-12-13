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
        <Canvas pixelRatio={window.devicePixelRatio} camera={{ position: [10, 7, 0] }}> {/* zoom , y,x */}
          <gridHelper args={[10, 10, `white`, `gray`]} position={[0, 0, 0]} />
          <OrbitControls />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <mesh position={[2.75, 7.75, -3.75]}>
              <Citerne />
            </mesh>
          </Suspense>
          1
        </Canvas>
      </div>
      < Navigation linkValue={"url"} />
    </div>
  );
}
export default CiternePage;
