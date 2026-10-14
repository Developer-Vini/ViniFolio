import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { easing } from "maath"
import HeroText from "../components/HeroText";
import ParalaxBackground from "../components/ParalaxBackground";
import { Laptop } from "../components/Laptop";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";


function MouseLight(){
    const ref = useRef();
    useFrame(({ pointer, viewport }, delta) => {
        easing.damp3(
            ref.current.position,
            [(pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2, 3],
            0.2,
            delta
        );
    });
    return <pointLight ref={ref} intensity={40} color="#ffffff" />
}

const Hero = () => {

    const isMobile = useMediaQuery({ maxWidth: 853});

    return (
        <section className="relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
            <ParalaxBackground />
            <HeroText />
            
            <figure className="absolute inset-0 w-full h-full">
                <Canvas camera={{ position: [0, 3, isMobile ? 12 : 9], fov: 45 }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[5, 5, 5]} intensity={2} />
                    <Sparkles count={isMobile ? 40 : 100} scale={12} size={2} speed={0.4} opacity={0.6} />
                    <Suspense fallback={null}>
                        <Laptop
                        isMobile={isMobile}
                        position={isMobile ? [0, -3.2, 0] : [2.5, -1.5, 0]} />
                    </Suspense>
                    {/* <OrbitControls />*/}
                </Canvas>
            </figure>
        </section>
    );
};

export default Hero;