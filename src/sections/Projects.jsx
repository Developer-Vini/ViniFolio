import { projects } from "../data/projects"
import ProjectRow from "../components/ProjectRow"

const Projects = () => {
    return (
        <section id="work" className="py-24 c-space">
            <div className="max-w-[1500px] mx-auto">
                <p className="font-moon text-sm tracking-widest text-indigo-400">02 - Work</p>
                <h2 className="mt-2 text-heading">Selected Projects <sup className="font-arial text-base text-neutral-500">({projects.length})</sup></h2>

                <ul className="mt-16 border-t border-white/15">
                    {projects.map((p, i) => (
                        <ProjectRow key={p.id} project={p} index={i} />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects