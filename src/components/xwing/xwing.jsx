import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect } from "react"

export default function Xwing() {
	const xwing = useGLTF("./model/xwing/scene.gltf")

	return (
		<primitive
			object={xwing.scene}
			position={[0, 0, 0]}
			scale={0.01}
			// rotation={[0, Math.PI / 2, 0]}
		/>
	)
}
