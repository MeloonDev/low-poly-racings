import { useGLTF } from "@react-three/drei";

export function Car(props) {
  const { nodes, materials } = useGLTF("./models/Car.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        // receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
      />
    </group>
  );
}

useGLTF.preload("./models/Car.glb");
