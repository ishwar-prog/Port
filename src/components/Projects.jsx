import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Streamora",
    description:
      "A comprehensive video streaming platform with advanced backend architecture",
    image: "/project1.png",
    website: "https://streamoraa.onrender.com/",
    github: "https://github.com/ishwar-prog/Grand-Backend",
    tags: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    id: 2,
    title: "GSAP Showcase",
    description:
      "Interactive animations and smooth scroll experiences with GSAP",
    image: "/project2.png",
    website: "https://gsap1-project.onrender.com/",
    github: "https://github.com/ishwar-prog/Gsap-Project",
    tags: ["GSAP", "JavaScript", "CSS3", "Animations"],
  },
  {
    id: 3,
    title: "Modi vs Rahul",
    description: "A Redux-powered interactive comparison application",
    image: "/project3.png",
    website: "https://modi-rahul.vercel.app/",
    github: "https://github.com/ishwar-prog/Redux-Project",
    tags: ["React", "Redux", "Tailwind", "Vercel"],
  },
  {
    id: 4,
    title: "DisasterIQ",
    description: "Intelligent disaster management and response system",
    image: "/project4.png",
    website: "https://disasteriq.onrender.com/",
    github: "https://github.com/ishwar-prog/Singularity-Final",
    tags: ["AI/ML", "Node.js", "React", "MongoDB"],
  },
  {
    id: 5,
    title: "Reboxed",
    description: "Innovative hackathon project with modern tech stack",
    image: "/project5.png",
    website: "https://reboxed.onrender.com/",
    github: "https://github.com/ishwar-prog/hackios",
    tags: ["Full-Stack", "Innovation", "Hackathon"],
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX((y - centerY) / 20);
    setRotateY((centerX - x) / 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
      data-cursor-hover
    >
      <div className="relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-[#FF4500]/50">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/20 to-[#303030] flex items-center justify-center">
            <span className="text-6xl font-bold text-white/10">
              {project.title[0]}
            </span>
          </div>

          {/* Overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent flex items-center justify-center gap-4"
          >
            <motion.a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
              className="w-14 h-14 rounded-full bg-[#FF4500] flex items-center justify-center text-white hover:bg-[#FF4500]/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe size={24} />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ delay: 0.2 }}
              className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-2xl font-bold text-white group-hover:text-[#FF4500] transition-colors">
              {project.title}
            </h3>
            <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#FF4500] transition-colors" />
          </div>

          <p className="text-white/60 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-white/50 bg-white/5 rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255, 69, 0, 0.1) 45%, rgba(255, 69, 0, 0.2) 50%, rgba(255, 69, 0, 0.1) 55%, transparent 60%)",
            transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
            transition: "transform 0.6s ease-in-out",
          }}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="min-h-screen py-32 px-6 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF4500]/3 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-[#FF4500] text-sm tracking-widest uppercase font-medium">
            03 — Featured Projects
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            My Work
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            A selection of projects that showcase my skills in full-stack
            development and creative problem-solving
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
