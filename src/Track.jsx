import { useGLTF } from "@react-three/drei";

export function Track(props) {
  const { nodes, materials } = useGLTF("./models/track.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_2.geometry}
        material={materials["Material.003"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008_3.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("./models/track.glb");
