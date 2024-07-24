import { PROJECTS_LIST } from '@/shared/consts'
import Image from 'next/image'
import { FC, useState } from 'react'
import { motion } from 'framer-motion'

export const DesktopProjects: FC = () => {
  const [openProject, setOpenProject] = useState<(typeof PROJECTS_LIST)[0]>()
  return (
    <div className="bg-black w-[60vw] h-[calc(100%-80px)] m-10 grid grid-cols-2 gap-4 p-4 bg-opacity-25 rounded-2xl">
      {PROJECTS_LIST.map((project, i) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="flex cursor-pointer justify-center h-fit p-1 rounded-xl relative"
          onClick={() => setOpenProject(project)}
          key={i}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span className="tilt-part" key={i} />
          ))}
          <Image
            className="h-52 tilt-3d w-full object-cover"
            src={project.image}
            alt={project.title}
            sizes="60vw"
            width={0}
            height={0}
          />
        </motion.div>
      ))}
      {openProject && (
        <div
          onClick={() => setOpenProject(undefined)}
          className="absolute bg-black bg-opacity-50 left-0 top-0 flex items-center justify-center w-screen h-screen z-50"
        >
          <motion.div
            initial={{ height: 174 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            animate={{ height: 500 }}
            className="w-80 h-[500px] shadow-xl bg-white overflow-hidden"
          >
            <Image
              className="w-full"
              src={openProject.image}
              alt={openProject.title}
              sizes="60vw"
              width={0}
              height={0}
            />
            <div className="p-4 text-black flex flex-col h-[calc(100%-190px)] justify-between">
              <div>
                <h1 className="text-2xl">{openProject.title}</h1>
                <p>{openProject.description}</p>
              </div>
              <div>
                <div className="h-0.5 my-5 w-full bg-gray-300" />
                <p className="text-lg">
                  {openProject.company ? `Company: ${openProject.company}` : 'Own Project'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
