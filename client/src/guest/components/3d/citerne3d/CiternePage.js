import React, { Suspense, Box } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Citerne from "./Citerne";
import Pump from "./Pump";
import "./CiternePage.css";
/*modif*/

function CiternePage() {
  const frustumSize = 430;
  const aspect = window.innerWidth / window.innerHeight;

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
export default CiternePage;
