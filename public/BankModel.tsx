import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

interface ModelProps {
  [key: string]: any; 
}

export default function Model(props: ModelProps): JSX.Element {
  const { camera } = useThree();
  const { nodes, materials } = useGLTF("/bank-transformed.glb") as any;
  const [rotation, setRotation] = useState<[number, number, number]>([0, 0, 0]);
  const [targetRotation, setTargetRotation] = useState<number>(0);
  const [lastRotationTime, setLastRotationTime] = useState<number>(0);

  useEffect(() => {
    const rotateModel = setTimeout(() => {
      setTargetRotation(targetRotation + Math.PI / 2); // Update target rotation by 90 degrees
      setLastRotationTime(Date.now()); // Record the time of this rotation
    }, 4000); // Rotate every 2 seconds
    return () => clearTimeout(rotateModel); // Cleanup the timeout on unmount
  }, [targetRotation]);

  useFrame(() => {
    camera.lookAt(0, 1.5, 0);

    const now = Date.now();
    const deltaTime = now - lastRotationTime;

    // Calculate the rotation increment based on time elapsed since last rotation
    const rotationIncrement = (Math.PI / 2) * (deltaTime / 4000); // 90 degrees over 2 seconds

    if (rotation[1] < targetRotation) {
      setRotation([0, rotation[1] + rotationIncrement, 0]); // Increment rotation towards target
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={[0.4, 0.4, 0.4]}
      position={[0, 0, 0]}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.Bank.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.039, 2.455, 0.144]}
        rotation={[0, 0, -Math.PI]}
        scale={[-3.481, -2.448, -2.453]}
      />
    </group>
  );
}

useGLTF.preload("/bank-transformed.glb");
