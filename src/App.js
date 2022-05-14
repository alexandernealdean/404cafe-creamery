import "./App.css";
import Icecream from "./components/Icecream";
import Plane from "./components/Plane";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";



function App() {
  return (
    <Canvas className="canvas">
      <PerspectiveCamera makeDefault position={[-15, 1, 10]} fov={65}/>
      <OrbitControls enableZoom={false}/>
      
      <Physics>
        <Icecream />
        <Plane />
      </Physics>
      
      <ambientLight intensity={0.5}/>
      <directionalLight position={[-5, 2, 2]} intensity={1}/>
    </Canvas>
  );
}

export default App;
