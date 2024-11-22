'use client'

import { buttonVariants, Link } from '@tszhong0411/ui'
import { cn } from '@tszhong0411/utils'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// import CodingHours from './coding-hours'
import Connect from './connect'
// import FavoriteFramework from './favorite-framework'
import LocationCard from './location-card'
import StacksCard from './stacks-card'
// import StackCardProduct from './stacks-card-product'
import StacksCardProduct from './stacks-card-product'

const variants = {
  initial: {
    y: 40,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  }
}

const AboutMe = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardsRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      initial='initial'
      animate={isInView ? 'animate' : 'initial'}
      variants={variants}
      ref={cardsRef}
      transition={{
        duration: 0.5
      }}
      className='relative my-24'
    >
      <motion.h2
        className='font-title text-center text-3xl font-bold sm:text-4xl'
        initial={{
          y: 30,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        About Me
      </motion.h2>
      <motion.div
        className='mt-12 grid gap-4 md:grid-cols-2'
        initial={{
          y: 40,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 0.3
        }}
      >
        <div className='grid gap-4'>
          <LocationCard />
          <StacksCard />
        </div>
        <div className='grid gap-4'>
          <StacksCardProduct />
          <Connect />
        </div>
      </motion.div>
      <div className='my-8 flex items-center justify-center'>
        <Link href='/skills' className={cn(buttonVariants({ variant: 'default' }), 'rounded-xl')}>
          Explore all my skills
        </Link>
      </div>
    </motion.div>
  )
}

export default AboutMe
