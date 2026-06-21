import { Project } from "../components/Project"
import { ProjectConfig } from "../components/project-config"

export const Projects = () => {
  return (
   <section className="px-4">
    <div className="w-full border-b border-black pb-4">
        <h2 className="text-3xl font-normal tracking-tight text-black">
          Selected projects
        </h2>
      </div>
    <div className="grid grid-cols-2 gap-4 mt-6">
    {ProjectConfig.item.map((project) => (
        <Project img={project.img} 
        label={project.label} key={project.label} desc={project.desc} 
        />
    ))}
    </div>
   </section>
  )
}
