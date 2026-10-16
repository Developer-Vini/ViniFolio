import { projects } from "../data/projects"

const Projects = () => {
    return (
        <section id="work" className="py-24 c-space">
            <div className="max-w-[1500px] mx-auto">
                <p className="font-moon text-sm tracking-widest text-indigo-400">02 - Work</p>
                <h2 className="mt-2 text-heading">Selected Projects</h2>

                <ul className="mt-12 space-y-4">
                    {projects.map((p) => (
                        <li key={p.id} className="text-2xl">{p.title}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Projects