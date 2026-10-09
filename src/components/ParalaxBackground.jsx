import React, { useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "motion/react"

const ParalaxBackground = () => {
    const canvasRef = useRef(null)

    const { scrollYProgress } = useScroll();
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20
    });

    const yLayerSlow = useTransform(smoothScroll, [0, 1], ["0%", "-15%"]);
    const yLayerFast = useTransform(smoothScroll, [0, 1], ["0%", "-40%"]);
    const rotateFast = useTransform(smoothScroll, [0, 1], [0, 90]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        let animationFrameId;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const mouse = {
            x: width / 2,
            y: height / 2,
            radius: 180
        };

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        const particlesCount = 45;
        const particles = Array.from({ length: particlesCount }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2 + 0.8,
            speedX: (Math.random() - 0.5) * 0.4,
            speedY: (Math.random() - 0.5) * 0.4,
            alpha: Math.random() * 0.6 + 0.2,
        }));


        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const gridSize = 50;
            ctx.lineWidth = 0.5;

            for (let x = 0; x < width; x += gridSize) {
                for (let y = 0; y < height; y += gridSize) {
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouse.radius) {
                        const factor = 1 - dist / mouse.radius;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + factor * 0.35})`;
                    } else {
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
                    }
                    ctx.beginPath();
                    ctx.strokeRect(x, y, gridSize, gridSize);
                }
            }

            particles.forEach((p) => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0) {
                    p.x = width;
                }
                if (p.x > width) {
                    p.x = 0
                }
                if (p.y < 0) {
                    p.y = height
                }
                if (p.y > height) {
                    p.y = 0;
                }

                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                let currentAlpha = p.alpha;
                if (dist < mouse.radius) {
                    currentAlpha = Math.min(1, p.alpha + (1 - dist / mouse.radius) * 0.5);
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill()
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 h-full w-full overflow-hidden bg-black">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />

            <motion.div style={{ y: yLayerSlow }} className="absolute inset-0 z-0">
                <div className="absolute top-[15%] left-[8%] text-[12vw] font-black tracking-tighter text-white/[0.02] select-none">
                    DEV
                </div>
                <div className="absolute bottom-[10%] right-[5%] text-[14vw] font-black tracking-tighter text-white/[0.02] select-none ">
                    01
                </div>
            </motion.div>
            <motion.div style={{ y: yLayerFast, rotate: rotateFast }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="h-[400px] w-[400px] rounded-full border border-white/[0.05] border-dashed" />
                <div className="absolute h-[600px] w-[600px] border border-white/[0.03]" />
            </motion.div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.85)_100%)] z-20" />

            <div className="absolute inset-0 opacity-[0.035] mix-blend-overlay z-30 pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, }} />
        </div>
    )
}

export default ParalaxBackground