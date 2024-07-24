'use client'
import { Post } from '@/shared/components'
import { FC } from 'react'
import { motion } from 'framer-motion'

const FRLB = [
  'React',
  'TypeScript',
  'MobX',
  'Next.js',
  'Express',
  'Node.js',
  'Jest',
  'Storybook',
  'WebSockets',
  'JWT',
  'HTML5',
  'CSS',
  'SASS',
  'Bootstrap',
  'Tailwind CSS',
  'Material UI',
  'Ant Design',
  'Styled Components',
  'Framer Motion',
  'Chart.js',
  'React Query',
  'Redux Toolkit',
  'Zustand',
  'React Hook Form',
  'Axios',
  'React Router',
  'Angular',
  'Vue',
  'Django',
  'Stripe',
]

const TCHDB = [
  'Docker',
  'Nginx',
  'SSL',
  'SSR',
  'MongoDB',
  'PostgreSQL',
  'Git',
  'GitLab',
  'Scrum',
  'REST',
  'AWS',
  'Google services',
  'Sitemaps',
  'Linux',
  'CI/CD',
]

const Other = [
  'Adobe Photoshop',
  'Adobe After Effects',
  'Adobe Premiere Pro',
  'Figma',
  'Latex',
  'Telegram mini apps',
  'Discord bots',
  'Telegram bots',
]

const PostsList = [
  { title: 'Programming Languages', content: 'Javascript, Python, Golang' },
  { title: 'Frameworks and Libraries', content: FRLB.join(', ') },
  { title: 'Technologies and Databases', content: TCHDB.join(', ') },
  { title: 'Other', content: Other.join(', ') },
]

export const Skills: FC = () => {
  return (
    <div className="main-bg overflow-y-scroll max-h-screen w-screen px-10 py-20 font-cuprum lg:w-[60vw] lg:bg-none lg:text-black">
      {PostsList.map((post, i) => (
        <motion.div
          key={i}
          initial={{ x: '-500px', opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: i * 0.5,
              duration: 0.5,
            },
          }}
        >
          <Post {...post} className="mb-10" />
        </motion.div>
      ))}
    </div>
  )
}
