import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import BankModel from "../../public/BankModel";

function Bank() {
  return (
    <>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight />
        <OrbitControls
          minDistance={4}
          maxDistance={8}
          position={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2.5}
          enableZoom={false}
          enablePan={false}
        />
        <Suspense fallback={null}>
          <BankModel />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default Bank;
