'use client'
import { Card } from '@/shared/components'
import Image from 'next/image'
import { UilFileInfoAlt, UilBrowser, UilReact, UilMobileVibrate } from '@iconscout/react-unicons'
import { CV } from '@/shared/assets'
import { useMemo, useState } from 'react'
import { DesktopProjects } from '../dekstop/projects'
import { Skills } from '../skills'
import { Contacts } from '../contacts'

export const Main = () => {
  const [openPage, setOpenPage] = useState(<DesktopProjects />)

  const Cards = useMemo(
    () => [
      {
        className: 'bg-blue-green',
        title: 'My CV',
        icon: <UilFileInfoAlt size={80} />,
        animation: { key: 'x', value: -100 },
        href: CV,
        route: CV,
      },
      {
        className: 'bg-brown-orange',
        title: 'Projects',
        icon: <UilBrowser size={80} />,
        animation: { key: 'x', value: 100 },
        route: '/projects',
        onClick: () => setOpenPage(<DesktopProjects />),
      },
      {
        className: 'bg-pink-purple',
        title: 'Skills',
        icon: <UilReact size={80} />,
        animation: { key: 'y', value: -100 },
        route: '/skills',
        onClick: () => setOpenPage(<Skills />),
      },
      {
        className: 'bg-orange-red',
        title: 'Contacts',
        icon: <UilMobileVibrate size={80} />,
        animation: { key: 'y', value: 100 },
        route: '/contacts',
        onClick: () => setOpenPage(<Contacts />),
      },
    ],
    [setOpenPage],
  )

  return (
    <div className="main-bg h-screen w-screen text-white font-cuprum lg:flex lg:justify-center">
      <div className="flex flex-col items-center justify-center pt-20 gap-5 p-5 lg:w-1/4 lg:pt-5 lg:max-w-[400px]">
        <Image
          className="rounded-full overflow-hidden"
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
        />
        <div className="text-center">
          <h1 className="text-3xl">Otegen Alikhan</h1>
          <h2 className="text-lg">Frontend Developer</h2>
          <h2 className="text-lg">2+ years experience</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-1 w-full gap-4">
          {Cards.map((data, i) => (
            <Card key={i} {...data} />
          ))}
        </div>
      </div>
      <div className="hidden lg:block w-[60vw]">{openPage}</div>
    </div>
  )
}
