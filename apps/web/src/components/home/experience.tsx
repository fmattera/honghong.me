'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LightbulbIcon } from 'lucide-react'

const variants = {
    initial: {
        y: 40,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
    },
}

const ExperienceSection = () => {
    const experienceRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(experienceRef, { once: true, margin: '-100px' })

    const experiences = [
        {
            company: 'Co-Founder & Chief Product Officer',
            role: 'Neolocus',
            description:
                'Raised $100K pre-seed funding through GAIA accelerator. Designed and developed a full-stack platform (JavaScript, Python, Docker, Firebase) while managing a team of 10 to deliver on time and under budget. Achieved 4K monthly active users and $1K+ MRR. Led R&D in Generative AI, fine-tuning LORA models for high-quality architectural renders.',
            duration: '09/2023 - Present',
        },
        {
            company: 'Product Specialist @Adyen',
            role: 'Adyen',
            description:
                "I led the restructuring of Adyen's tech( SDK integration ) documentation, resulting in increased % of SDK adoption rates.Facilitated cross - departmental communication to align new documentation content with its publishing.",
            duration: '03/2023 - 08/2023',
        },
        {
            company: 'Junior Data Scientist',
            role: 'FWRD Knowledge',
            description:
                'I built an end to end AI app for RedBull that scrapes TikTok data and optimizes the number of likes and comments of a post based on its content, region and time of release (Consultancy work).',
            duration: '03/2022 - 03/2023',
        }
    ]

    return (
        <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={variants}
            ref={experienceRef}
            transition={{
                duration: 0.5,
            }}
            className="relative my-24"
        >
            <motion.h2
                className="font-title text-center text-3xl font-bold sm:text-4xl"
                initial={{
                    y: 30,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3,
                }}
            >
                My Experience
            </motion.h2>
            <motion.div
                className="mt-12 grid gap-10 lg:grid-cols-1"
                initial={{
                    y: 40,
                    opacity: 0,
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3,
                }}
            >
                {experiences.map((experience, index) => (
                    <Card key={`experience_${index}`} experience={experience} />
                ))}
            </motion.div>
        </motion.div>
    )
}

type CardProps = {
    experience: {
        company: string
        role: string
        description: string
        duration: string
    }
}

const Card = (props: CardProps) => {
    const { experience } = props
    const { company, role, description, duration } = experience

    return (
        <motion.div
            className="shadow-feature-card dark:shadow-feature-card-dark group relative rounded-xl p-4"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold">{company}</h3>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
                <span className="text-gray-400">{duration}</span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">{description}</p>
        </motion.div>
    )
}

export default ExperienceSection
