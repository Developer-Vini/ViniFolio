import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParalaxBackground from "../components/ParalaxBackground";
import { Laptop } from "../components/Laptop";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Hero = () => {
    return (
        <section className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <ParalaxBackground />
            <HeroText />
            
            <figure className="absolute inset-0 w-full h-full">
                <Canvas camera={{ position: [0, 3, 9], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <Suspense fallback={null}>
                        <Laptop position={[5, -2, 0]} />
                    </Suspense>
                    <OrbitControls />
                </Canvas>
            </figure>
        </section>
    );
};

export default Hero;