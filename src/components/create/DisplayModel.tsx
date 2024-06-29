import React, { useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";
import { Vector3 } from "three";

type ModelProps = {
  objUrl: string;
  mtlUrl: string;
  position: [number, number, number];
  scale: [number, number, number];
};

const Model: React.FC<ModelProps> = ({ objUrl, mtlUrl, position, scale }) => {
  const materials = useLoader(MTLLoader, mtlUrl);
  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  useEffect(() => {
    console.log("OBJ and MTL loaded:", obj, materials);
  }, [obj, materials]);

  return (
    <primitive
      object={obj}
      position={new Vector3(position[0], position[1], position[2])}
      scale={[scale[0], scale[1], scale[2]]}
    />
  );
};

type ModelViewerProps = {
  objUrl: string;
  mtlUrl: string;
};

const ModelViewer: React.FC<ModelViewerProps> = ({ objUrl, mtlUrl }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      <OrbitControls />
      <Model
        objUrl={objUrl}
        mtlUrl={mtlUrl}
        position={[1, 2, 0]}
        scale={[1, 1, 1]}
      />
    </Canvas>
  );
};

export default ModelViewer;
