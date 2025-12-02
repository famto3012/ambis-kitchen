"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function ThreeImageModel() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.3] }}
      className="rounded-[2rem] overflow-hidden bg-transparent"
    >
      <ambientLight intensity={0.6} />
      <directionalLight intensity={1} position={[2, 2, 2]} />
      <ImageCard />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

function ImageCard() {
  const ref = useRef();
  const texture = useLoader(TextureLoader, "/images/ambi.png");

  // Smooth Parallax Tilt
  useFrame(({ mouse }) => {
    ref.current.rotation.x = mouse.y * 0.3;
    ref.current.rotation.y = mouse.x * 0.4;
  });

  return (
    <mesh ref={ref}>
      {/* Plane shape */}
      <planeGeometry args={[2.2, 3]} />

      <meshStandardMaterial map={texture} roughness={0.4} metalness={0.1} />
    </mesh>
  );
}
