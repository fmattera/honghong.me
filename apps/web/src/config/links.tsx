import {
  type IconType,
  SiGithub,
  SiLinkedin,
  SiCalendly,
} from '@icons-pack/react-simple-icons'
import {
  BarChartIcon,
  FlameIcon,
  MessageCircleIcon,
  MonitorIcon,
  PencilIcon,
  UserCircleIcon
} from 'lucide-react'

import {
  SITE_GITHUB_URL,
  SITE_CALENDLY_URL,
  SITE_LINKEDIN_URL
} from '@/lib/constants'

type HeaderLinks = Array<{
  icon: React.ReactNode
  href: string
  text: string
}>

type FooterLinks = Array<{
  id: number
  links: Array<{
    href: string
    text: string
  }>
}>

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <FlameIcon className='size-3.5' />,
    href: '/projects',
    text: 'Projects'
  },
  {
    icon: <MonitorIcon className='size-3.5' />,
    href: '/skills',
    text: 'Skills'
  },
  // {
  //   icon: <PencilIcon className='size-3.5' />,
  //   href: '/blog',
  //   text: 'Blog'
  // },
  // {
  //   icon: <UserCircleIcon className='size-3.5' />,
  //   href: '/about',
  //   text: 'Contact'
  // }
]

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: '/',
        text: 'Home'
      },
      {
        href: '/projects',
        text: 'Projects'
      },
      {
        href: '/skills',
        text: 'Skills'
      },
      // {
      //   href: '/blog',
      //   text: 'Blog'
      // },
      // {
      //   href: '/about',
      //   text: 'About'
      // },
      // {
      //   href: '/dashboard',
      //   text: 'Dashboard'
      // }
    ]
  },
  {
    id: 2,
    links: [
      // {
      //   href: '/guestbook',
      //   text: 'Guestbook'
      // },
      // {
      //   href: '/uses',
      //   text: 'Uses'
      // },
      // {
      //   href: '/projects',
      //   text: 'Projects'
      // },
      // {
      //   href: 'https://links.honghong.me',
      //   text: 'Links'
      // }
    ]
  },
  {
    id: 3,
    links: [
      {
        href: SITE_LINKEDIN_URL,
        text: 'LinkedIn'
      },
      {
        href: SITE_GITHUB_URL,
        text: 'GitHub'
      },
      {
        href: SITE_CALENDLY_URL,
        text: 'Calendly'
      },
    ]
  }
]

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: SITE_LINKEDIN_URL, // Add your LinkedIn URL here
    title: 'LinkedIn',       // Title for LinkedIn
    icon: SiLinkedin,        // LinkedIn icon
  },
  {
    href: SITE_GITHUB_URL,
    title: 'GitHub',
    icon: SiGithub
  },
  {
    href: SITE_CALENDLY_URL,
    title: 'Calendly',
    icon: SiCalendly
  },

]
