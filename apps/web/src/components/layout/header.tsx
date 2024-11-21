'use client'

import { Link, Logo, Separator } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import CommandMenu from '@/components/command-menu'
import MobileNav from '@/components/mobile-nav'

import Navbar from './navbar'
import ThemeToggle from './theme-toggle'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => {
      document.removeEventListener('scroll', changeBackground)
    }
  }, [])

  return (
    <motion.header
      className={cn(
        'bg-background/30 fixed inset-x-0 top-4 z-40 mx-auto flex h-[60px] max-w-5xl items-center justify-between rounded-2xl px-8 shadow-sm saturate-100 backdrop-blur-[10px] transition-colors',
        isScrolled && 'bg-background/80'
      )}
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <a
        href='#skip-nav'
        className='bg-background focus-visible:ring-ring fixed left-4 top-4 -translate-y-20 rounded-sm border p-2 font-medium shadow-sm transition-transform focus-visible:translate-y-0 focus-visible:ring focus-visible:ring-offset-2'
      >
        <span>Skip to main content</span>
      </a>
      <Link href='/' className='flex items-center justify-center gap-1'>
        <span className='sr-only'>Homepage</span>
        <svg width="26" height="26" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.5 80.75H38.25V55.25H63.75V80.75H76.5V42.5L51 23.375L25.5 42.5V80.75ZM17 89.25V38.25L51 12.75L85 38.25V89.25H55.25V63.75H46.75V89.25H17Z" fill="#C7C7C7" />
        </svg>

      </Link>
      <div className='flex items-center gap-2'>
        <Navbar />
        <Separator orientation='vertical' className='h-6' />
        {/* <ThemeToggle />
        <CommandMenu /> */}
        <MobileNav />
      </div>
    </motion.header>
  )
}

export default Header
