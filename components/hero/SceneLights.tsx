"use client";

export default function SceneLights() {
  return (
    <>

      <ambientLight intensity={0.45} />

      <directionalLight
        intensity={1}
        position={[4, 8, 4]}
        castShadow
      />

      <pointLight
        color="#fdeaf1"
        intensity={6}
        position={[-5, 2, -3]}
      />

      <pointLight
        intensity={4}
        position={[3, 1, 3]}
      />

    </>
  );
}