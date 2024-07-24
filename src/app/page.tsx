import { Main } from '@/widgets/main'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Page() {
  return <Main />
}
