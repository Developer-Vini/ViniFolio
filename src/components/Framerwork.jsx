import { OrbitingCircles } from "./OrbitinCircles"

export function Framerwork() {
    const skills = ["auth0", "visualstudiocode","sqlite.svg", "csharp", "github", "html5", "css3", "git", "tailwindcss", "javascript", "react", "vitejs", "threejs"]
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}

            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    )
}

const Icon = ({ src }) => (
    <img src={src} className="rou nded-sm hover:scale-110 duration-200"></img>
)