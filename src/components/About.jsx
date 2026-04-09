import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // 3D perspective animation values
  const yMotionValue = useTransform(scrollYProgress, [0, 1], [500, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [35, 15, 0]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.3, 0.7, 0.9, 1],
  );
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const transform = useMotionTemplate`rotateX(${rotateX}deg) translateY(${yMotionValue}px) translateZ(50px) scale(${scale})`;

  const paragraphs = [
    {
      text: "I don't design screens. I design systems that think, move, and respond.",
      highlight: true,
    },
    {
      text: "My work lives where interface design, 3D, and AI collide—turning static ideas into interactive experiences that feel intentional, fast, and human. I care about how things look, but I care more about how they behave.",
    },
    {
      text: "I obsess over motion, spacing, logic, and performance because details are not decoration—they're signals. Every animation should explain something. Every interaction should earn its place.",
    },
    {
      text: "When I'm not building interfaces, I'm experimenting with AR, intelligent agents, and generative systems, trying to push the web a little closer to the future it keeps promising.",
    },
    {
      text: "If it feels smooth, simple, and slightly futuristic—there's probably a lot of thinking behind it.",
      accent: true,
    },
  ];

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "∞", label: "Lines of Code" },
  ];

  return (
    <section
      ref={targetRef}
      id="about"
      className="relative z-0 h-[300vh] w-full bg-[#303030]"
    >
      {/* Scroll indicator */}
      <div className="absolute left-1/2 top-[5%] grid -translate-x-1/2 content-start justify-items-center gap-4 text-center">
        <span className="text-[#FF4500] text-sm tracking-widest uppercase font-medium">
          01 — About
        </span>
        <span className="relative text-xs uppercase leading-tight text-white/40 tracking-widest after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:mt-4 after:h-16 after:w-px after:bg-gradient-to-b after:from-[#FF4500] after:to-transparent after:content-['']">
          scroll to reveal
        </span>
      </div>

      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF4500]/5 rounded-full blur-3xl transform translate-x-1/2" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FF4500]/3 rounded-full blur-3xl transform -translate-x-1/2" />
      </div>

      {/* 3D Perspective Container */}
      <div
        className="sticky top-0 h-screen mx-auto flex items-center justify-center overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            transform,
            opacity,
          }}
          className="w-full max-w-5xl px-6 md:px-16"
        >
          {/* Main Title */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FF4500] mb-12 tracking-tighter text-center">
            Who I Am
          </h2>

          {/* Content paragraphs */}
          <div className="space-y-6 mb-16">
            {paragraphs.map((para, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl lg:text-2xl leading-relaxed text-center max-w-4xl mx-auto ${
                  para.highlight
                    ? "text-white font-semibold text-xl md:text-2xl lg:text-3xl"
                    : para.accent
                      ? "text-[#FF4500] italic font-light mt-8"
                      : "text-white/70 font-light"
                }`}
              >
                {para.text}
              </p>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF4500] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-xs md:text-sm tracking-widest uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#303030] to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
