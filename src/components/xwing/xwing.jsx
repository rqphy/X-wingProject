import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

export default function Xwing() {
	const xwing = useGLTF("./model/xwing/scene.gltf")
	console.log(xwing)

	return (
		<primitive
			object={xwing.scene}
			position={[0.3, -0.5, 0]}
			scale={0.01}
			rotation={[0, Math.PI, 0]}
		/>
	)
}
