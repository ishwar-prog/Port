import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuToggle from './MenuToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-6">
      <MenuToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 right-6 bg-[#1a1a1a] border border-[#FF4500]/30 rounded-2xl p-8 z-50 shadow-2xl shadow-[#FF4500]/10"
            >
              <motion.ul
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col gap-4"
              >
                {menuItems.map((item, index) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className="text-2xl font-light text-white/80 hover:text-[#FF4500] transition-colors duration-300 block py-2 px-4 rounded-lg hover:bg-white/5"
                      data-cursor-hover
                    >
                      <span className="text-[#FF4500] mr-3 text-sm">0{index + 1}</span>
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-[#FF4500]/20 rounded-full blur-2xl" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-[#FF4500]/10 rounded-full blur-xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
