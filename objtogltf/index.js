import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import * as THREE from "three";
import { Image } from "canvas";

global.window = new JSDOM().window;
global.document = window.document;
global.THREE = THREE;
global.Image = Image;

async function convertOBJToGLB(objPath, mtlPath, outputDir) {
  const { MTLLoader } = await import("three/examples/jsm/loaders/MTLLoader.js");
  const { OBJLoader } = await import("three/examples/jsm/loaders/OBJLoader.js");
  const { GLTFExporter } = await import(
    "three/examples/jsm/exporters/GLTFExporter.js"
  );

  const objFullPath = path.resolve(objPath);
  const mtlFullPath = path.resolve(mtlPath);

  return new Promise((resolve, reject) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(
      `file://${mtlFullPath}`,
      (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load(
          `file://${objFullPath}`,
          (object) => {
            const scene = new THREE.Scene();
            scene.add(object);
            const gltfExporter = new GLTFExporter();
            gltfExporter.parse(
              scene,
              (result) => {
                const outputPath = path.join(outputDir, "model.glb");
                const outputBuffer = Buffer.from(result);
                fs.writeFileSync(outputPath, outputBuffer);
                resolve(outputPath);
              },
              { binary: true }
            );
          },
          undefined,
          reject
        );
      },
      undefined,
      reject
    );
  });
}

const objPath = "./input/obj.obj";
const mtlPath = "./input/obj.mtl";
const outputDir = "./output";

convertOBJToGLB(objPath, mtlPath, outputDir)
  .then((outputPath) => {
    console.log(`GLB file created at ${outputPath}`);
  })
  .catch((error) => {
    console.error("Error converting OBJ to GLB:", error);
  });
