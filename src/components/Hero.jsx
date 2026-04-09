import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrambleText from "./ScrambleText";

const Hero = () => {
  const heroRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power4.inOut", delay: 0.5 },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4500]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF4500]/3 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 px-4"
      >
        {/* Main Name */}
        <motion.div variants={itemVariants} className="mb-4">
          <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold leading-none tracking-tighter">
            <ScrambleText
              texts={["ISHWAR", "ईश्वर", "イシュワル"]}
              className="text-white"
            />
          </h1>
        </motion.div>

        {/* Animated line */}
        <div
          ref={lineRef}
          className="h-[2px] bg-gradient-to-r from-transparent via-[#FF4500] to-transparent w-full max-w-2xl mx-auto mb-8 origin-center"
        />

        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/70 font-light tracking-wide">
            Full-Stack Developer &{" "}
            <span className="text-[#FF4500]">Autodidaxy</span> in Agentic AI
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/40 text-sm tracking-widest uppercase">
              Scroll
            </span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-1.5 bg-[#FF4500] rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
