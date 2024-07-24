import { FC } from 'react'
import { UilLinkedin, UilGithub, UilPhoneAlt, UilEnvelopeAlt } from '@iconscout/react-unicons'
import Link from 'next/link'

const links = [
  {
    href: 'https://www.linkedin.com/in/alikhan-utegen-4aa758259/',
    title: 'Alikhan Utegen',
    icon: <UilLinkedin className="w-9 h-9 lg:w-20 lg:h-20" />,
  },
  {
    href: 'https://github.com/KhanKeepshark',
    title: 'KhanKeepshark',
    icon: <UilGithub className="w-9 h-9 lg:w-20 lg:h-20" />,
  },
]

const justContacts = [
  {
    title: '+7 775 115 47 62',
    icon: <UilPhoneAlt className="w-9 h-9 lg:w-20 lg:h-20" />,
  },
  {
    title: 'auten384@gmail.com',
    icon: <UilEnvelopeAlt className="w-9 h-9 lg:w-20 lg:h-20" />,
  },
]

export const Contacts: FC = () => {
  return (
    <div className="main-bg font-cuprum min-h-screen px-10 py-20 text-white flex flex-col lg:justify-center lg:items-center">
      <div className="grid grid-cols-1 text-2xl gap-5 lg:grid-cols-2 lg:gap-20">
        {links.map((link, i) => (
          <Link
            target="blank"
            key={i}
            href={link.href}
            className="flex gap-4 items-center lg:flex-col"
          >
            {link.icon}
            <div>{link.title}</div>
          </Link>
        ))}
        {justContacts.map((contact, i) => (
          <div key={i} className="flex gap-4 items-center lg:flex-col">
            {contact.icon}
            <div>{contact.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
