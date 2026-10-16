import { motion } from "motion/react";

const text = "- AVAILABLE FOR WORK - AVAILABLE FOR WORK - AVAILABLE FOR WORK";

const Avatar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -8}}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
            className="relative group size-56 lg:size-60 xl:size-64"
        >
            <svg viewBox="0 0 200 200"
            aria-hidden="true"
            className="absolute inset-0 size-full animate-[spin_14s_linear_infinite] group-hover:[animation-play-state:paused"
            >
                <defs>
                    <path id="avatar-ring" d="M 100, 100 m -82,0 a 82,82 0 1, 1 164, 0 a 82,82 0 1,1 -164,0" />
                </defs>
                <text className="font-mono text-[12px] tracking-[0.14em] fill-neutral-400">
                    <textPath href="#avatar-ring">{text}</textPath>
                </text>
            </svg>
            <img width="260" src="assets/me.jpg" alt="" />
        </motion.div>
    )
}

export default Avatar;