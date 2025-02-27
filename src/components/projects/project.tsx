'use client'

import React, {useRef} from 'react'
import Image from 'next/image'
import { projectsData } from '@/lib/data'
import "./projects.css"
import { div } from 'motion/react-client'
import {motion, useScroll, useTransform} from 'framer-motion'



type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1])

    return (
        <motion.div 
        ref= {ref}
        style = {{
            scale: scaleProgress,
            opacity: opacityProgress,
        }}>
            <section 
            className='bg-slate-600 dark:bg-zinc-950 rounded-xl max-w-[42rem] relative overflow-hidden
            sm:pr-8 sm:h-[20rem] hover:bg-zinc-800 hover:cursor-pointer transition
            shadow-white group'>
                <div className="projectContentData py-10 px-5 sm:max-w-[50%]
                flex flex-col sm:mt-auto">
                    <h3 className='mt-2 text-xl font-bold
                    text-white'>{title}</h3>
                    <p className='mt-4 leading-relaxed text-zinc-400'>{description}</p>
                    <ul className='mt-7'>
                        {tags.map((tag,index)=> (
                            <li className='bg-neutral-100 dark:text-black px-3 py-1 text-[0.7rem] tracking-wider
                            p-1 rounded-full' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <Image src={imageUrl} alt={title} quality={95} className='mt-5 rounded-t-lg
                absolute top-0 -right-40 w-[27rem] h-[22rem] py-8
                transition
                group-hover:scale-105
                group-hover:-translate-x-3
                group-hover:-translate-y-3
                group-hover:-rotate-2'/>
            </section>
        </motion.div>
    )
}