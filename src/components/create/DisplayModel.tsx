import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url) as unknown as GLTF;

  return <primitive object={scene} />;
};

type ModelViewerProps = {
  url: string;
};

const ModelViewer: React.FC<ModelViewerProps> = ({ url }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
      <OrbitControls />
      <Model url={url} />
    </Canvas>
  );
};

export default ModelViewer;
