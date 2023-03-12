import * as THREE from "three"

const points = [
	[68.5, 185.5],
	[1, 262.5],
	[270.9, 281.9],
	[345.5, 212.8],
	[178, 155.7],
	[240.3, 72.3],
	[153.4, 0.6],
	[52.6, 53.3],
	[68.5, 185.5],
]

//Convert the array of points into vertices
for (let i = 0; i < points.length; i++) {
	const x = points[i][0]
	const y = 0
	const z = points[i][1]
	points[i] = new THREE.Vector3(x, y, z)
}
//Create a path from the points
const path = new THREE.CatmullRomCurve3(points)

export default function Map() {
	return (
		<mesh>
			<tubeGeometry />
			<meshBasicMaterial color="red" wireframe />
		</mesh>
	)
}
