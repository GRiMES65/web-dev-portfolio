'use client'

import React, { FormEvent, useState } from 'react'
import SectionHeading from '@/components/section-heading/section-heading-component'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'

export default function Contact() {
    const [submissionMessage, setSubmissionMessage] = useState('');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "cfc5476e-e422-4267-80b4-b904b405c3e6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setSubmissionMessage("Thank you for contacting me! I will get back to you soon.");
        }
    }

    return (
        <motion.section id="contact"
        className='mb-20 sm:mb-28 mx-auto w-[min(100%, 38rem)] text-center'
        initial = {{
            opacity: 0,
        }}
        
        whileInView={{
            opacity: 1,
        }}
        
        transition={{
            duration: 1,
        }}

        >
            <SectionHeading>
                Contact Me!
            </SectionHeading>
            <p className='text-neutral-600 dark:text-neutral-300 mt-3'>Reach out to me at <a href="mailto:saralapr@sheridancollege.ca"
            className='text-red-500'>saralapr@sheridancollege.ca</a> or through this form.</p>
            <form 
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col items-center mx-auto max-w-[30rem] text-zinc-900" action="">
                <input 
                name="email"
                className='h-14 px-2 py-2 rounded-lg border-[3px] border-zinc-950 w-full hover:border-[3px]
                hover:border-red-500 outline-none active:border-red-500 transition'
                placeholder='Your Email' type="email" />
                
                <textarea 
                name="message"
                className='h-52 my-3 px-2 py-2 rounded-lg border-[3px] border-zinc-950 w-full
                hover:border-[3px]
                hover:border-red-500 outline-none active:border-red-500
                transition' placeholder="Your Message" id=""></textarea>
                
                <button className='flex group items-center gap-2 px-5 py-2 mt-2 rounded-lg
                bg-red-600   
                    outline-none focus:scale-105 hover:scale-105 hover:bg-red-700
                    active:scale-100 transition' type="submit">
                    Submit <FaPaperPlane className='text-xs opacity-80
                    transition-all
                    group-hover:translate-x-1
                    group-hover:-translate-y-1'/>
                </button>
            </form>
            {submissionMessage && (
                <p className='mt-4 text-green-600'>{submissionMessage}</p>
            )}
        </motion.section>
    )
}
