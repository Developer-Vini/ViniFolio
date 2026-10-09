import HeroText from "../components/HeroText";
import ParalaxBackground from "../components/ParalaxBackground";

const Hero = () => {
    return <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <ParalaxBackground />
        <HeroText />
       
    </section>
};

export default Hero;