import { PointMaterial, Preload, Points } from "@react-three/drei"
import { useFrame, Canvas } from "@react-three/fiber"
import { random } from "maath"
import { useRef, useState, Suspense } from "react"

function Stars() {
  const ref = useRef<any>()
  const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }))

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={Float32Array.from(sphere.values())} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function StarsCanvas() {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas
