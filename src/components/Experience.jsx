import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Techeazy Pvt Ltd",
    location: "Remote",
    duration: "Aug 2024 - Present",
    description:
      "Working on full-stack development projects, building scalable web applications using modern technologies like React, Node.js, and MongoDB.",
    skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    current: true,
  },
  {
    id: 2,
    role: "AI/ML Intern",
    company: "Bajaj Finserv",
    location: "Virtual",
    duration: "Sep 2024 - Oct 2024",
    description:
      "Developed machine learning models for financial data analysis and prediction. Worked on data preprocessing, model training, and deployment.",
    skills: ["Python", "Machine Learning", "Data Analysis", "TensorFlow"],
    current: false,
  },
];

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF4500] via-white/20 to-transparent transform md:-translate-x-1/2" />

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: 0.3 + index * 0.2 }}
        className={`absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 z-10 ${
          experience.current
            ? "bg-[#FF4500] border-[#FF4500] shadow-[0_0_20px_rgba(255,69,0,0.5)]"
            : "bg-[#303030] border-white/30"
        }`}
      >
        {experience.current && (
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-[#FF4500]"
          />
        )}
      </motion.div>

      {/* Card */}
      <div
        className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
      >
        <div className="relative bg-[#1a1a1a] rounded-2xl p-6 border border-white/10 hover:border-[#FF4500]/30 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,69,0,0.1)]">
          {/* Current badge */}
          {experience.current && (
            <div className="absolute -top-3 right-6 px-3 py-1 bg-[#FF4500] rounded-full text-xs font-medium text-white">
              Current
            </div>
          )}

          {/* Role & Company */}
          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#FF4500] transition-colors">
            {experience.role}
          </h3>
          <div className="flex items-center gap-2 text-[#FF4500] mb-4">
            <Briefcase size={16} />
            <span className="font-medium">{experience.company}</span>
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-4 text-white/50 text-sm">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/70 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium text-[#FF4500] bg-[#FF4500]/10 rounded-full border border-[#FF4500]/20"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF4500]/10 to-transparent transform translate-x-16 -translate-y-16 rotate-45" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="min-h-screen py-32 px-6 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-3xl transform translate-x-1/2" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <span className="text-[#FF4500] text-sm tracking-widest uppercase font-medium">
            04 — Experience
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 leading-tight">
            My Journey
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">
            Professional experiences that shaped my development career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
