import { FC, useRef } from 'react'
import { ProjectCardProps } from './props'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export const ProjectCard: FC<ProjectCardProps> = ({ title, description, image, company }) => {
  const container = useRef<HTMLDivElement>(null)
  const isInView = useInView(container, { once: true, amount: 1 })

  return (
    <motion.div ref={container} className=" flex flex-col justify-center">
      <motion.div
        initial={{
          height: 240,
        }}
        animate={{
          height: isInView ? '100%' : 240,
        }}
        viewport={{ amount: 1, once: true }}
        className="w-full bg-white rounded-lg overflow-hidden shadow-2xl"
      >
        <Image
          className="w-full h-60 object-fit"
          src={image}
          alt={title}
          width={100}
          height={100}
        />
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isInView ? 1 : 0,
            transition: {
              delay: 0.5,
            },
          }}
          viewport={{ once: true, amount: 1 }}
          className="p-6 flex flex-col justify-between !font-monserat"
        >
          <div>
            <h1 className="text-xl min-[360px]:text-3xl">{title}</h1>
            <p className="mt-4 font-light text-ellipsi overflow-hidden text-sm min-[360px]:text-lg">
              {description}
            </p>
          </div>
          <div>
            <div className="h-0.5 my-2 sm:my-5 w-full bg-gray-300" />
            <p className="text-sm min-[360px]:text-lg">
              {company ? `Company: ${company}` : 'Own Project'}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
