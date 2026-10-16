import { motion } from "motion/react"

const ease = [0.22, 1, 0.36, 1];
const lines = ["Let's build", "something", "great together."]

const Contact = () => {
    return (
        <section id="contact" className="py-24 c-space">
            <div className="max-w-[1500px] mx-auto">
                <p className="font-mono text-sm tracking-widest uppercase text-neutral-400">
                    03 - Contact
                </p>

                <h2 className="mt-6 text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
                    {lines.map((line, i) => (
                        <span key={line} className="block overflow-hidden pb-[0.1em]">
                            <motion.span className={`block ${i == 2 ? "text-neutral-500" : ""}`}
                                initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.9, delay: i * 0.12, ease }}

                            >{line}</motion.span>
                        </span>
                    ))}
                </h2>
            </div>
        </section>
    )
}

export default Contact;