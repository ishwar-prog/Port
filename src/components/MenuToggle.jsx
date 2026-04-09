import React from "react";
import { motion } from "framer-motion";

const MenuToggle = ({ isOpen, toggle }) => {
  const lineVariants = {
    closed: {
      rotate: 0,
      y: 0,
    },
    open: (custom) => ({
      rotate: custom.rotate,
      y: custom.y,
    }),
  };

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
      aria-label="Toggle menu"
      data-cursor-hover
    >
      <motion.span
        className="w-7 h-0.5 bg-white rounded-full origin-center"
        animate={isOpen ? "open" : "closed"}
        variants={lineVariants}
        custom={{ rotate: 45, y: 8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="w-7 h-0.5 bg-white rounded-full"
        animate={{ opacity: isOpen ? 0 : 1, scaleX: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="w-7 h-0.5 bg-white rounded-full origin-center"
        animate={isOpen ? "open" : "closed"}
        variants={lineVariants}
        custom={{ rotate: -45, y: -8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </button>
  );
};

export default MenuToggle;
