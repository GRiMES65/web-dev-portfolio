"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import HamburgerNav from "./hamburger-nav";

export default function Header() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile/small screen
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup the event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 p-4 pt-5 z-50">
      <div className="bg-opacity-80">
        {isMobile ? (
          <div className="flex justify-end p-4">
            <div onClick={(e) => e.stopPropagation()}>
              <HamburgerNav isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        ) : (
          <motion.nav
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="w-full max-w-7xl mx-auto shadow-black/[0.03] backdrop-blur-[0.1rem]"
          >
            <ul className="flex justify-around flex-wrap gap-12 p-2.5 border-[1.5px] border-[tomato] rounded-xl">
              {links.map(link => (
                <li 
                  key={link.hash}
                  className="relative inline-block font-semibold text-lg transition-colors duration-500 ease hover:text-[tomato] after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[tomato] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                >
                  <Link href={link.hash}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex justify-center items-center h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col items-center gap-8">
                  {links.map((link, index) => (
                    <motion.li 
                      key={link.hash}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                      className="relative inline-block font-semibold text-2xl text-white transition-colors duration-500 ease hover:text-[tomato] after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[tomato] after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                    >
                      <Link href={link.hash} onClick={() => setIsOpen(false)}>
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}