'use client'

import { BlurImage, buttonVariants, Link } from '@tszhong0411/ui'
import { motion, useAnimate } from 'framer-motion'
import { cn } from '@tszhong0411/utils'
import { useEffect } from 'react'

const TEXTS = [
  {
    text: 'passion',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  },
  {
    text: 'curiosity',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#0077ff] to-[#00e7df]'
  },
  {
    text: 'dedication',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#7f00de] to-[#ff007f]'
  },
  {
    text: 'drive',
    className:
      'bg-clip-text text-center text-transparent bg-gradient-to-r from-[#ff1835] to-[#ffc900]'
  }
]

const Hero = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    void animate(
      [
        [scope.current, { y: '0%' }, { duration: 0 }],
        [scope.current, { y: '-25%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-50%' }, { duration: 0.3, at: '+1.3' }],
        [scope.current, { y: '-75%' }, { duration: 0.3, at: '+1.3' }]
      ],
      {
        repeat: Number.POSITIVE_INFINITY
      }
    )
  }, [animate, scope])

  return (
    <div className='my-16 space-y-6'>
      <div className='flex justify-between gap-8'>
        <motion.div
          className='flex flex-col gap-4 md:max-w-xl'
          initial={{
            y: 40,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            duration: 0.5
          }}
        >
          <h1 className='font-title bg-gradient-to-b from-black via-black/90 to-black/70 to-90% bg-clip-text text-2xl font-bold leading-9 text-transparent sm:text-4xl sm:leading-[3.5rem] dark:from-white dark:via-white/90 dark:to-white/70'>
            I'm Francesco, an AI Product Manager with a {' '}
            <div className='inline-grid h-9 overflow-hidden sm:h-14'>
              <div ref={scope}>
                {TEXTS.map(({ text, className }, i) => (
                  // eslint-disable-next-line @eslint-react/no-array-index-key -- it's static
                  <div className={className} key={i}>
                    {text}
                  </div>
                ))}
              </div>
            </div>{' '}
            for coding.
          </h1>
          <div className='text-muted-foreground text-sm'>Amsterdam • UTC/GMT +1</div>
          <div className='my-6 flex items-left'>
            <Link
              href='/projects'
              className={cn(
                buttonVariants({
                  variant: 'default'
                }),
                'rounded-xl'
              )}
            >
              <span>View Resume</span>
              <span className="text-lg ml-2 mt-1">↗</span>
            </Link>

            <Link
              href='/projects'
              className={cn(
                buttonVariants({
                  variant: 'outline'
                }),
                'rounded-xl ml-4'
              )}
            >
              <span>Check Projects</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className='relative hidden size-28 md:block'
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            duration: 0.3
          }}
        >
          <BlurImage
            src='/images/francesco.jpeg'
            className='rounded-full'
            width={112}
            height={112}
            alt='Hong'
            lazy={false}
            placeholder="empty" // Ensures no blur effect is applied
            blurDataURL={undefined} // Removes any default blur data
          />
          <div className='absolute inset-0 -z-10 bg-gradient-to-tl from-purple-700 to-orange-700 opacity-50 blur-2xl' />
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
