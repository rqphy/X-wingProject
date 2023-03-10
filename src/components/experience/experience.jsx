import './experience.scss'
import { Canvas } from "@react-three/fiber"

export default function Experience()
{
    return <Canvas
    className="experience"
    shadows
    camera={ {
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ -1, -1, 6 ]
    } }>
        <mesh>
            <boxGeometry/>
            <meshBasicMaterial color={'red'} />
        </mesh>
    </Canvas>
}