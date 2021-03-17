import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from 'react-three-fiber';
import { Html, useGLTF } from '@react-three/drei'
// import { useGLTFLoader } from 'drei'
import './Landing.css'



const Model = () => {
    const gltf = useGLTF('/scene.gltf', true);
    console.log(gltf)
    return <primitive object={gltf.scene} dispose={null} />
}

const HTMLcontent = () => {
    
    const model = useRef()
    useFrame(()=> (model.current.rotation.y += 0.01));
    
    return (
            <group position={[0, 0, 8]}>
                <mesh ref={model}>
                    <Model attach="geometry" />
                </mesh>
            </group>
    );
};

export const Landing = () => {

    const ref = useRef()


    return (
        <div className="main">
            <Canvas colorManagement camera={{ position: [5, 2, 18], fov: 70 }} >
                <Suspense fallback={null}>
                    <HTMLcontent />
                </Suspense>

            </Canvas>
        </div>
    )
}
