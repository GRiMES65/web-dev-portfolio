import React, {useRef} from 'react'
import SectionHeading from '@/components/section-heading/section-heading-component'
import { projectsData } from '@/lib/data'
import "./projects.css"
import Project from './project'


export default function Projects() {
  return (
    <section className='projectSection max-w-[42rem]
    mx-auto scroll-mt-28 mb-28 sm:mb-40 rounded-3xl
    '
    id="projects">
        
        <div className="projectContent">
            <SectionHeading>
                My Projects
            </SectionHeading>
            <div className='mt-5'>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>

    </section>
  )
}

