import "./experience.scss"
import { Canvas } from "@react-three/fiber"
import Xwing from "../xwing/xwing"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
	return (
		<Canvas
			className="experience"
			shadows
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [0, 0, 6],
			}}
		>
			<ambientLight intensity={0.3} />
			<directionalLight
				castShadow
				position={[3, 1, 0.5]}
				intensity={1.5}
				shadow-normalBias={0.09}
				color={"#e8dfdd"}
			/>
			<OrbitControls
				enableDamping={true}
				enablePan={false}
				minPolarAngle={Math.PI / 2.06}
				maxPolarAngle={0}
				dampingFactor={0.05}
				rotateSpeed={0.3}
				maxDistance={8.0}
				minDistance={3.8}
			/>
			<Xwing />
		</Canvas>
	)
}
