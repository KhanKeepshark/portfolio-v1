import { Projects } from '@/widgets/projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Page() {
  return <Projects />
}
