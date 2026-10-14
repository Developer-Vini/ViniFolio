import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ButtonEmail = () => {

    const [copied, setCopied] = useState(false);
    const email = "vkmarcio3@gmail.com"

    const copy = () => {
        navigator.clipboard.writeText(email);

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000)
    }

    return (
        <motion.button onClick={copy} whileHover={{ y: -5}} whileTap={{ scale: 1.05}} className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden">
            <AnimatePresence mode="wait">
            {copied ? (<motion.p key="cp" initial={{ opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{ opacity: 0, y: -10}} transition={{duration:0.1, ease: "easeInOut"}} className=" text-gray-200 flex items-center justify-center gap-2">

                <img className="w-5" src="assets/copy-done.svg" alt="" />

                Email has copied</motion.p>
            ) : (
                <motion.p key="cp1" initial={{ opacity: 0, y: -10}} animate={{opacity: 1, y: 0}} exit={{ opacity: 0, y: -10}} transition={{duration:0.1, ease: "easeInOut"}} className=" text-zinc-100 flex items-center justify-center gap-2 text-write">
                    <img src="assets/copy.svg" className="w-5" />
                    Copy my email
                </motion.p>)}
                </AnimatePresence>
        </motion.button>
    )
}

export default ButtonEmail;