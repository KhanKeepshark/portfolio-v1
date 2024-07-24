'use client'
import { FC, useEffect, useRef, useState } from 'react'
import { PostProps } from './props'
import clsx from 'clsx'

const getIntervalHeight = (i: number, interval: number) => (i ? interval + 80 * i : interval)

export const Post: FC<PostProps> = ({ title, content, className }) => {
  const [pointNumber, setPointNumber] = useState(0)
  const postRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = postRef.current?.offsetHeight || 0
    if (height > 0) {
      setPointNumber(Math.round(height / 100))
    }
  }, [postRef.current?.offsetHeight])

  return (
    <div className={!pointNumber ? 'opacity-0' : 'opacity-100'}>
      {Array.from({ length: pointNumber }).map((_, i) => {
        return (
          <div className="relative" key={i}>
            <div
              className={'absolute bg-white h-4 w-8 left-[2px] z-10'}
              style={{ top: getIntervalHeight(i, 32) }}
            />
            <div
              className="absolute h-3 w-3 bg-black rounded-full left-5"
              style={{ top: getIntervalHeight(i, 48) }}
            />
            <div
              className="absolute w-14 rounded-3xl h-7 border-2 border-black -left-7"
              style={{ top: getIntervalHeight(i, 40) }}
            />
          </div>
        )
      })}
      <div
        ref={postRef}
        className={clsx(
          'rounded-xl overflow-hidden bg-white border-black border-2 py-4 px-12',
          className,
        )}
      >
        <h1 className="text-2xl p-1 w-full font-bold text-blue-500">{title}</h1>
        <div className="text-lg mt-4">{content}</div>
      </div>
    </div>
  )
}
