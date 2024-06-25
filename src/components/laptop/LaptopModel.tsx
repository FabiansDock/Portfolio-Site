import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from "./Laptop.module.css"

const ModelViewer = () => {
  return (
    <Canvas
      camera={{ position: [-5, 2, 5] }}      
      className={styles["canvasLaptop"]}
    >
      <ambientLight intensity={3} />
      <directionalLight intensity={0.5} position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <Model url="../../../laptop.glb"/>
      </Suspense>
      <OrbitControls minDistance={4}
          maxDistance={8}
          position={[0, 0, 0]}
          maxPolarAngle={Math.PI / 2.5}
          enableZoom={false}
          enablePan={false}/>
    </Canvas>
  );
};

const Model = ({url}: {url: string}) => {
  const { scene } = useGLTF(url); 

  return scene ? <primitive object={scene} scale={[2.5, 2.5, 2.5]} /> : null;
};

export default ModelViewer;
