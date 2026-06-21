import { motion } from "framer-motion"
import type { ProjectProps } from "./project-config"

export const Project = ({ img, label, desc }: ProjectProps) => {
     const FadeInVariants = {
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0}
    }

  return (
    <motion.article
    initial='hidden'
    whileInView='visible'
    variants={FadeInVariants}
    viewport={{ once: false, margin: "-80px" }}
     className="group cursor-pointer flex flex-col w-full">
        <figure className="w-full flex flex-col gap-4">
            <img src={img} 
            className="w-full h-full rounded-3xl object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"/>
           <figcaption className="flex flex-col gap-1  text-black font-normal tracking-tight">
          <h2 className="text-xl md:text-2xl font-medium">{label}</h2>
          <p className="text-base md:text-lg text-neutral-600 leading-snug">{desc}</p>
        </figcaption>
        </figure>
    </motion.article>
  )
}
