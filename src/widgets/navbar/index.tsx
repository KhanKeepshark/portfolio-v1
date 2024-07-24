'use client'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { UilHome } from '@iconscout/react-unicons'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion'

export const Navbar: FC = () => {
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hide, setHide] = useState(false)
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious()

    if (previous && latest > previous && !hide) {
      setHide(true)
    } else if (previous && latest < previous && hide) {
      setHide(false)
    }
  })

  if (pathname === '/') {
    return null
  }

  return (
    <div className="fixed z-50 w-full bottom-5 justify-center flex py-4 px-10">
      <motion.a
        href="/"
        variants={{
          visible: {
            y: 0,
          },
          hidden: {
            y: '200%',
          },
        }}
        animate={hide ? 'hidden' : 'visible'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-14 h-14 shadow-2xl shadow-blue-600 bg-blue-green border border-blue-300 text-blue-600 rounded-full flex justify-center items-center"
      >
        <UilHome size={34} />
      </motion.a>
    </div>
  )
}
