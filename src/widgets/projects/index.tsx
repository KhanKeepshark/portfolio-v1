'use client'

import { ProjectCard } from '@/shared/components/projectCard'
import { PROJECTS_LIST } from '@/shared/consts'
import { motion } from 'framer-motion'

export const Projects = () => {
  return (
    <motion.div className="bg-slate-300 p-8 flex flex-col gap-10">
      {PROJECTS_LIST.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          company={project.company}
          image={project.image}
        />
      ))}
    </motion.div>
  )
}
