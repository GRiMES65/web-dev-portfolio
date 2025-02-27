"use client";

import React from 'react';
import { motion, useInView } from "framer-motion";
import "./header.css";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className='header-element'>
      <div className='bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
      '>
        <motion.nav
          ref={ref}
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="NavBar"
        >
          <ul className='headerLinks'>
            {links.map(link => (
              <li key={link.hash}>
                <Link href={link.hash}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
