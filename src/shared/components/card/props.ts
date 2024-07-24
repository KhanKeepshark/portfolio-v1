import { ReactElement } from 'react'

export interface CardProps {
  className: string
  title: string
  icon: ReactElement
  animation: { key: string; value: number }
  href?: string
  route?: string
  onClick?: () => void
}
