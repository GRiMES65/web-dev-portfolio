'use client'

import React from 'react'
import SectionHeading from '@/components/section-heading/section-heading-component'
import { skillsData } from '@/lib/data'
import {motion} from 'framer-motion'

export default function skills() {
  return (
    <motion.section className='mb-28 text-center max-w-[53rem] 
    mx-auto scroll-mt-5 sm:mb-40 flex flex-col items-center justify-center h-[100vh]'
    id="skills"
    initial = {{
      opacity:0,
    }}
    
    whileInView={{
      opacity: 1,
    }}
    
    transition={{
      duration: 1,
    }}

    viewport={{
      once: true,
    }}

    >
        <div>
            <SectionHeading>
                My Skills
            </SectionHeading>
            <ul className='flex flex-wrap gap-2 mt-3 justify-center'>
                    {skillsData.map((skill, index) => (
                        <li className='dark:bg-zinc-800 py-1 px-7 rounded-lg border-zinc-300
                        shadow-lg hover:cursor-pointer'
                        key= {index} > {skill}</li>
                    ))}
            </ul>
        </div>
    </motion.section>
  )
}
