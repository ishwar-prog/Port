import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const techStack = [
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "GitLab",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Supabase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "GSAP",
    logo: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
  {
    name: "Cloudinary",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudinary/cloudinary-original.svg",
  },
  {
    name: "NPM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  },
  { name: "Cursor", logo: "https://www.cursor.com/favicon.ico" },
];

const StarButton = ({ tech }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group"
      data-cursor-hover
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 69, 0, 0.3) 0%, transparent 60%)`,
        }}
      />

      {/* Star particles */}
      {isHovered && (
        <>
          {[...Array(6)].map((_, i) => {
            const offsetX = (i % 2 === 0 ? 1 : -1) * (20 + i * 10);
            const offsetY = (i % 3 === 0 ? 1 : -1) * (15 + i * 8);
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#FF4500] rounded-full"
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: mousePosition.x,
                  y: mousePosition.y,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: mousePosition.x + offsetX,
                  y: mousePosition.y + offsetY,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
            );
          })}
        </>
      )}

      {/* Card content */}
      <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 flex flex-col items-center gap-4 overflow-hidden transition-all duration-300 group-hover:border-[#FF4500]/50 group-hover:bg-[#1a1a1a]/80">
        {/* Tech logo */}
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src={tech.logo}
            alt={tech.name}
            className="w-12 h-12 object-contain filter group-hover:drop-shadow-[0_0_8px_rgba(255,69,0,0.5)] transition-all duration-300"
          />
        </div>

        {/* Tech name */}
        <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-white transition-colors">
          {tech.name}
        </span>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={false}
          animate={
            isHovered
              ? {
                  background: [
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                  ],
                  x: ["-100%", "100%"],
                }
              : {}
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
    </motion.div>
  );
};

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="tech"
      className="min-h-screen py-32 px-6 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#FF4500]/3 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div ref={ref} className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-[#FF4500] text-sm tracking-widest uppercase font-medium">
            02 — Tech Stack
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            Tools I Use
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            Building the future with modern technologies and frameworks
          </p>
        </motion.div>

        {/* Tech grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {techStack.map((tech) => (
            <motion.div key={tech.name} variants={itemVariants}>
              <StarButton tech={tech} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
