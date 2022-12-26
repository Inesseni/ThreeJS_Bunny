/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 Bunny_test1.glb
*/

import React, { useRef , useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Bun from "./Bunny_test3.glb"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(Bun)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(materials);
    actions.Bun_Idle.play();
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rabbit_" rotation={[-Math.PI, 0, -Math.PI / 2]} />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes.Rabbit_Pelvis} />
          <skinnedMesh name="rabbit" geometry={nodes.rabbit.geometry} material={materials.rabbit} skeleton={nodes.rabbit.skeleton} castShadow />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(Bun)
