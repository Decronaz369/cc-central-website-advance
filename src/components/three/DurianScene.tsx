import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  Sparkles,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

function DurianModel() {
  const group = useRef<THREE.Group>(null!);
  const { scene } = useGLTF("/Durian Model.glb");

  useFrame((state, delta) => {
    group.current.rotation.y += delta * 0.24;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.06;
  });

  return (
    <group ref={group}>
      <group rotation={[-Math.PI / 4, 0, 0]}>
        <Center>
          <primitive object={scene} scale={2.6} />
        </Center>
      </group>
    </group>
  );
}

useGLTF.preload("/Durian Model.glb");

function Rings() {
  const a = useRef<THREE.Group>(null!);
  const b = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    a.current.rotation.z += delta * 0.18;
    b.current.rotation.z -= delta * 0.12;
    a.current.rotation.x =
      1.15 + Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
  });

  return (
    <>
      <group ref={a} rotation={[1.15, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[1.8, 0.026, 16, 128]} />
          <meshStandardMaterial
            color="#e3b64f"
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
        <mesh position={[1.8, 0, 0]}>
          <sphereGeometry args={[0.075, 24, 24]} />
          <meshStandardMaterial
            color="#f2d488"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </group>
      <group ref={b} rotation={[1.9, -0.4, 0.6]}>
        <mesh>
          <torusGeometry args={[2.12, 0.02, 16, 128]} />
          <meshStandardMaterial
            color="#aacb8a"
            metalness={0.45}
            roughness={0.35}
          />
        </mesh>
      </group>
    </>
  );
}

function Orb({
  position,
  color,
  size,
  speed,
}: {
  position: [number, number, number];
  color: string;
  size: number;
  speed: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.8}>
      <mesh position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.32} metalness={0.12} />
      </mesh>
    </Float>
  );
}

export default function DurianScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.35, 5.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      className="touch-auto"
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 6, 4]} intensity={2.0} color="#fff3d9" />
      <directionalLight
        position={[-5, -2, -4]}
        intensity={0.6}
        color="#cfe4ff"
      />
      <pointLight position={[0, 2.5, -4]} intensity={6} color="#ffd98a" />

      {/* Realistic lighting environment for GLTF PBR textures */}
      <Environment preset="sunset" environmentIntensity={0.8} />

      <Float speed={1.5} rotationIntensity={0.45} floatIntensity={1.05}>
        <DurianModel />
        <Rings />
      </Float>

      <Orb
        position={[-2.35, 0.9, 0.4]}
        color="#f291b1"
        size={0.15}
        speed={2.4}
      />
      <Orb
        position={[2.4, -0.35, 0.2]}
        color="#f2994a"
        size={0.19}
        speed={1.9}
      />
      <Orb
        position={[1.95, 1.25, -0.4]}
        color="#a5cc84"
        size={0.12}
        speed={2.8}
      />
      <Orb
        position={[-2.05, -1.15, -0.3]}
        color="#eed88f"
        size={0.11}
        speed={2.2}
      />

      <Sparkles
        count={55}
        scale={[5.6, 4.6, 4]}
        size={2.4}
        speed={0.32}
        color="#eec25c"
      />
      <ContactShadows
        position={[0, -1.8, 0]}
        opacity={0.3}
        scale={9}
        blur={2.8}
        far={3.4}
        color="#5a4416"
      />
    </Canvas>
  );
}
