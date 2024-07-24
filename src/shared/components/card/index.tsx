'use client'
import { cloneElement, FC } from 'react'
import { CardProps } from './props'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/shared/hooks/useIsMobile'

export const Card: FC<CardProps> = ({
  className,
  title,
  icon,
  animation,
  href,
  route,
  onClick,
}) => {
  const isMobile = useIsMobile()

  return (
    <motion.a
      download={href ? 'cv' : undefined}
      href={isMobile ? route : href}
      initial={{
        opacity: 0,
        [animation.key]: animation.value,
      }}
      animate={{
        opacity: 1,
        [animation.key]: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <button
        className={clsx(
          'w-full p-4 cursor-pointer active:brightness-90 rounded-lg flex flex-col justify-center items-center lg:flex-row lg:gap-4 lg:p-0 lg:h-16 lg:hover:brightness-110',
          className,
        )}
        onClick={isMobile ? undefined : onClick}
      >
        {icon && cloneElement(icon, { className: 'w-20 lg:w-10' })}
        <h3 className="text-2xl font-bold lg:text-xl">{title}</h3>
      </button>
    </motion.a>
  )
}
