import { Canvas } from "@react-three/fiber";
import ReactDOM from "react-dom/client";
import "./index.css";
import Scene from "./Scene";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <Canvas>
    <Scene />
  </Canvas>
);
