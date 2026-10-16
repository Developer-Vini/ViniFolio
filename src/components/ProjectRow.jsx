import { motion } from "motion/react";
import { span } from "motion/react-client";

const ProjectRow = ({ project, index }) => {
    const inDev = project.status === "in development";

    return (
        <motion.li
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden border-b group border-white/15"
        >
            <span aria-hidden className="absolute inset-0 transition-transform duration-500 origin-bottom scale-y-0 bg-white ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover: scale-y-100" />

            <div className="relative flex items-center gap-4 px-2 py-6 transition-colors duration-500 md:w-12 md:gap-8 md:px-4 md:py-8 group-hover:text-black" >
                <span className="w8 font-mono text-xs transition-colors duration-500 md:w-12 md:text-sm text-neutral-500 group-hover:text-black/60">
                    {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="flex-1 text-3xl font-bold tracking-tight transition-transform duration-500 md:text-6xl lg:text-7xl group-hover:translate-x-3">{project.title}</h3>

                <div className="hidden gap-2 lg:flex">
                    {project.tags.slice(0, 3).map((t) => (
                        <span key={t}
                            className="px-3 py-1 text-xs transition-colors duration-500 border rounded-full border-white/20 text-neutral-400 group-hover:border-black/30 group-hover:text-black/70"
                        >{t}</span>
                    ))}
                </div>

                <div className="items-center hidden gap-2 text-xs md:flex text-neutral-400 tranasition-colors duration-500 group-hover:text-black/70 w-28">

                    <span className="relative flex size-2">
                        {inDev && (
                            <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping group-hover:bg-black"></span>
                        )}
                        <span className="relative inline-flex bg-white rounded-full size-2 group-hover:bg-black"></span>
                    </span>
                    {inDev ? "In development" : "Completed"}
                </div>


                <span className="grid transition-all duration-500 border rounded-full size-10 md:size-12 place-items-center border-white/20 group-hover:-rotate-45 group-black group-hover:border-black group-hover:bg-black group-hover:text-white"> &rarr; </span>
            </div>
        </motion.li>
    )
}

export default ProjectRow;