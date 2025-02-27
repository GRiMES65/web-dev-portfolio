'use client'

import React from 'react'
import "./about.css";
import SectionHeading from '@/components/section-heading/section-heading-component';


export default function About() {
  return (
    <section className='aboutSection transition'
     id="about">
        <div className="aboutContent mb-28 max-w-[58rem] text-center leading-8 sm:mb-40">
          <SectionHeading>About Me</SectionHeading>
          <p className='mb-3 mt-4'>I graduated with a Degree in Physics in 2022, but
            decided to pursue my passion for Software Engineering after a year long
            break. I am currently enrolled in the <span className='font-semibold text-[tomato]'>
              Software Development
              and Network Engineering
            </span> program at Sheridan College, Oakville. I love building websites and I have been
            working on improving my skills over the past year. My tech stack includes <span className='
            font-semibold text-[tomato]'>
              React, Angular,
              Next.js, Node.js, Tailwind CSS, and TypeScript
            </span>. I am actively learning new technologies to
            enhance my knowledge and skills.
            </p>
            <p>
            Outside of academics and coding, I enjoy listening to all kinds of music, playing Chess, 
            video games and watching TV shows. 
            </p>
        </div>
    </section>
  )
}
