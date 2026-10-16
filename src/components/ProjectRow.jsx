import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Code, ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const btn = "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5";

const ProjectRow = ({ project, index }) => {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen((current) => !current);
    const inDev = project.status === "in development";

    const hasLive = project.live && project.live !== project.repo;

    return (
        <motion.li
            data-open={open}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="relative overflow-hidden border-b group border-white/15"
        >
            <span aria-hidden="true" className="absolute inset-0 transition-transform duration-500 origin-bottom scale-y-0 bg-white ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-data-[open=true]:scale-y-100" />
            <div className="relative transition-colors duration-500 group-hover:text-black group-data-[open=true]:text-black">
                <h3>
                    <button
                        type="button"
                        onClick={onToggle}
                        aria-expanded={open}
                        className="flex items-center w-full gap-4 py-6 text-left cursor-pointer md:gap-8 md:px-4 md:py-8">

                        <span className="w-8 font-mono text-xs transition-colors duration-500 md:w-12 md:text-sm text-neutral-500 group-hover:text-black/60">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex-1 text-3xl font-bold tracking-tight transition-transform duration-500 md:text-6xl lg:text-7xl group-hover:translate-x-3">{project.title}</span>

                        <span className="hidden gap-2 lg:flex">
                            {project.tags.slice(0, 3).map((t) => (
                                <span key={t}
                                    className="px-3 py-1 text-xs transition-colors duration-500 border rounded-full border-white/20 text-neutral-400 group-hover:border-black/30 group-hover:text-black/70"
                                >{t}</span>
                            ))}
                        </span>
                        <span className="items-center hidden gap-2 text-xs transition-colors duration-500 md:flex text-neutral-400 group-hover:text-black/70 w-28">

                            <span className="relative flex size-2">
                                {inDev && (
                                    <span className="absolute inline-flex w-full h-full bg-white rounded-full opacity-75 animate-ping group-hover:bg-black"></span>
                                )}
                                <span className="relative inline-flex bg-white rounded-full size-2 group-hover:bg-black"></span>
                            </span>
                            {inDev ? "In development" : "Completed"}
                        </span>
                        <span className="relative grid overflow-hidden transition-all duration-500 border rounded-full size-10 md:size-12 place-items-center border-white/20 group-hover:border-black group-hover:bg-black group-hover:text-white group-data-[open=true]:border-black group-data-[open=true]:bg-black group-data-[open=true]:text-white group-data-[open=true]:rotate-90">
                            <ArrowUpRight className="absolute size-5 transition-all duration-500 ease-[cubic-bezier(0.22, 1, 0.36, 1)] group-hover:translate-x-8 group-hover:-translate-y-8" />
                            <ArrowUpRight className="absolute size-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0" />
                        </span>
                    </button>
                </h3>


                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="painel"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease }}
                            className="overflow-hidden"
                        >
                            <div className="flex flex-col gap-6 pb-8 pl-14 pr-4 md:pl-24 md:pb-10">
                                <p className="max-w-2xl text-base text-black/70 md:text-lg">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((t) => (
                                        <span

                                            key={t}
                                            className="px-3 py-1 text-xs border rounded-full border-black/30 text-black/70"
                                        >{t}</span>
                                    ))}
                                </div>

                            </div>

                            <div className="flex flex-wrap gap-3">
                                {hasLive && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className={`${btn} bg-black text-white`}><ExternalLink className="size-4" />Live</a>
                                )}

                                {project.videoYoutube && (
                                    <a href={project.videoYoutube} target="_blank" rel="noreferrer" className={`${btn} bg-black text-white`}><Play className="size-4" />Watch demo</a>
                                )}
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noreferrer" className={`${btn} border-black/30 text-black hover:border-black`}><Code className="size-4" />Repository</a>
                                )}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.li>
    )
}

export default ProjectRow;