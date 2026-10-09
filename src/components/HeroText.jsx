import { Cover } from "./Cover";
import { motion } from "motion/react";

const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        },
    },
};

const slideFromLeft = {
    hidden: {
        opacity: 0,
        x: -60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
    },
};

const popUpSpring = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        y: 20,
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 12,
        },
    },
};

const rotateIn = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        rotate: -3
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.5,
            ease: "backOut",
        },
    },
};

const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
};

const HeroText = () => {
    return <div className="z-10 mt-20 rounded-3xl text-center md:mt-40 md:text-left bg-clip-text">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="c-space hidden flex-col space-y-3 md:flex"
        >
            <motion.h1
                variants={slideFromLeft}
                className="text-4xl font-medium tracking-tight text-white lg:text-4xl">Hello! I'm Marcio
            </motion.h1>
            <motion.p
                variants={popUpSpring}
                className="text-5xl font-medium text-neutral-300">
                Full Stack Developer
            </motion.p>

            <motion.div variants={rotateIn} className="pt-2">
                <Cover>Building modern web apps</Cover>
            </motion.div>
            <motion.p
                variants={fadeInUp}
                className="text-4xl font-medium text-neutral-400">Creating fast, scalable, and complete web solutions from end to end</motion.p>
        </motion.div>

        <motion.div className="flex flex-col space-y-6 md:hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <p variants={slideFromLeft} className="text-4xl font-medium">Hi, I'm Marcio Vinicius</p>
            <motion.div variants={popUpSpring} className="space-y-2">
                <p className="text-5xl font-black text-neutral-300">Building</p>
                <div>
                    <div><Cover>Building modern web apps</Cover></div>
                </div>
                <p className="text-4xl font-black text-neutral-300">Web Application</p>
            </motion.div>
        </motion.div>

    </div>

}

export default HeroText;