import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Car } from "./Car";
import { Track } from "./Track";

function Scene() {
  return (
    <Suspense fallback={null}>
      <Perf position="top-left" />

      <Environment preset="sunset" background={"both"} />
      {/* <color args={["#695b5b"]} attach="background" /> */}

      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      <Track />
      <Car position={[35, 0.3, -26.5]} />
    </Suspense>
  );
}
export default Scene;
