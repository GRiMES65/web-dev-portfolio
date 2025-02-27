'use client'

import { button } from 'motion/react-client'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  
    const[theme, setTheme] = useState<Theme>('dark');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }
        else{
            setTheme('light');
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    };

    useEffect(()=> {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark")
            }
        }
        else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark")
        }
    }, []);
  
    return (
    <button className='fixed bottom-6 right-8
    bg-zinc-100 w-[2rem] h-[2rem] bg-opacity-80
    rounded-full border-opacity-40 border-white
    flex items-center justify-center
    hover:scale-[1.15] active:scale-105
    transition-all
    dark:bg-zinc-950'
    
    onClick={toggleTheme}>{
        theme === "dark" ? (<BsMoon />) : (<BsSun/>)}</button>
  )
}
