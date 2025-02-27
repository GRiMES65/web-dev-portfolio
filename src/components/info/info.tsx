"use client";

import React from 'react';
import { motion, useInView } from "framer-motion";
import "./info.css";
import profilePhoto from "@/assets/profilePhoto.jpg";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Info() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className='info'>
        <motion.div
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.7, delay:0.2}}
          className="info-container flex flex-col sm:flex-row"
          id="home"
        >
        <div className='profilePhoto'>
            {<img src={profilePhoto.src} alt="" className='w-[220px] rounded-full' />}
        </div>
        <div className="text">
            <div className='firstText font-black'>Hi! I am, JEEVAN</div>
            <div className='secondText'>
                I am a Software Development Student,
            </div>
            <div className='secondText'>
                with a Passion for Web Development
            </div>
            <div className='buttons py-3 flex flex-col sm:flex-row items-center justify-left
            gap-3 text-sm'>
                
                <Link href='#contact' 
                className='bg-red-600 px-3 py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110 hover:bg-red-700
                active:scale-105 transition group'>
                    Contact Me! <BsArrowRight className='group-hover:translate-x-2 transition
                    '/>
                </Link>
                
                <a href='/resume.pdf' className='group py-3 px-4 flex item-center bg-white text-zinc-900 rounded-full
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-700 hover:text-white
                active:scale-105 transition hover:cursor-pointer'>
                    Resume <HiDownload className='group-hover:translate-y-1'/>
                </a>
                
                <a href='https://linkedin.com/in/jeevansp' className='text-blue-500 text-[1.7rem]
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-700 hover:text-white
                active:scale-105 transition hover:cursor-pointer'>
                    <BsLinkedin/>
                </a>

                <a href='https://github.com/grimes65' className=' text-white text-[1.8rem]
                outline-none focus:scale-110 hover:scale-110 hover:text-gray-700
                active:scale-105 transition hover:cursor-pointer'>
                    <FaGithubSquare/>
                </a>
            </div>
        </div>
        
        
        </motion.div>
        
    </section>
    
  );
}