import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
  return (
    <Suspense fallback={null}>
      <Environment preset="sunset" background={"both"} />
      {/* <color args={["#695b5b"]} attach="background" /> */}

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
    </Suspense>
  );
}
export default Scene;
