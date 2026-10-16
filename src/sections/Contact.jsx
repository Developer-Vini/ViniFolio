import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, Copy } from "lucide-react";
const ease = [0.22, 1, 0.36, 1];
const lines = ["Let's build", "something", "great together."]
const email = "vkmarcio3@gmail.com";


const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        navigator.clipboard.writeText(email)
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <section id="contact" className="py-24 c-space">
            <div className="max-w-[1500px] mx-auto">
                <p className="font-mono text-sm tracking-widest uppercase text-neutral-400">
                    03 — Contact
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

                <button
                    type="button"
                    onClick={copy}
                    className="relative block w-full mt-16 overflow-hidden text-left border-y cursor-pointer group border-white/15"
                >

                    <span aria-hidden="true"
                          className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                    />

                    <span className="relative flex items-center justify-between gap-4 px-2 py-8 transition-colors duration-500 md:px-4 md:py-12 group-hover:text-black">
                        <span className="text-2xl font-bold tracking-tight break-all transition-transform duration-500 sm:text-4xl md:text-6xl group-hover:translate-x-3">
                            {email}
                        </span>


                        <span className="flex items-center gap-3 text-sm shrink-0 text-neutral-400 transition-colors duration-500 group-hover:text-black/70">
                        
                            <AnimatePresence mode="wait" initial={false}>
                                {copied ? (
                                    <motion.span key="done"
                                    initial={{ opacity: 0, y: 8}}
                                    animate={{ opacity: 1, y: 0}}
                                    exit={{ opacity: 0, y: -8}}
                                    transition={{ duration: 0.2}}
                                    className="flex items-center gap-2">

                                        <Check className="size-5" />
                                        <span className="hidden md:inline">Copied!</span>
                                    </motion.span>
                                    ):(
                                        <motion.span key="copy"
                                        initial={{ opacity: 0, y: 8}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{ opacity: 0, y: -8}}
                                        transition={{ duration: 0.2}}
                                        className="flex items-center gap-2">
                                            <Copy className="size-5" />
                                            <span className="hidden md:inline">Click to copy</span>
                                        </motion.span>
                                    )}
                            </AnimatePresence>
                        </span>
                    </span>
                </button>
            </div>
        </section>
    )
}

export default Contact;