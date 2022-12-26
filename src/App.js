import React, {useRef, useState} from 'react';
import './App.scss';

//import canvas from react three fiber
import { Canvas } from 'react-three-fiber';
import { softShadows, OrbitControls, Stage } from '@react-three/drei';
import Bunny from "./Bunny_test1.jsx"

softShadows();

function App() {

  return ( 
  <>
  <Canvas 
  shadows 
  colorManagement 
  camera={{position: [-5, 2, 10], fov: 60}}>

    <ambientLight intensity={0.3} />
    <pointLight intensity={0.5} position={[-10, 0, -20]}/>
    <pointLight intensity={1.5} position={[0, -10, 0]}/>
    <directionalLight 
      castShadow
      intensity={1.5} 
      position={[0,10,0]} 
      shadow-mapSize-width={1024} 
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-near={0}
      shadow-camera-left={-20}
      shadow-camera-rigth={20}
      shadow-camera-top={20}
      shadow-camera-bottom={-20}
    />
    <group>
    
      <mesh 
        receiveShadow 
        rotation={[-Math.PI /2,0,0]} 
        position={[0,0, 0]}>
          
        <planeBufferGeometry attach='geometry' args={[100,100]}/>
        <meshStandardMaterial attach='material' opacity={0.3} />
      </mesh>
      <Bunny scale={[0.05,0.05,0.05]}/>

    </group>

    <OrbitControls />
  </Canvas>
  </>);
}

export default App;


/**
 * 
 * loading models and play animation:  https://www.youtube.com/watch?v=q7yH_ajINpA
 * cast shadow: 
 */