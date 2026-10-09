import React, { useEffect } from "react";
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
        const particles = Array.from({ length: particles }, () => ({
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

                let  currentAlpha = p.alpha;
                if (dist < mouse.radius){
                    currentAlpha = Math.min(1, p.alpha + (1 - dist / mouse.radius) * 0.5);
                }

                ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId)
        };
    }, []);
    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">

            </div>
        </section>
    )
}

export default ParalaxBackground