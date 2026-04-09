import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "X (Twitter)",
    url: "https://x.com/ishwarrreal",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ishwar-suthar-8906b7328",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:ishwar16suthar@gmail.com",
    icon: <Mail className="w-8 h-8" />,
    isEmail: true,
  },
];

const LogoCarousel = () => {
  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-16"
      >
        {[...socials, ...socials, ...socials, ...socials].map(
          (social, index) => (
            <motion.a
              key={`${social.name}-${index}`}
              href={social.url}
              target={social.isEmail ? undefined : "_blank"}
              rel={social.isEmail ? undefined : "noopener noreferrer"}
              className="flex items-center gap-4 text-white/40 hover:text-[#FF4500] transition-colors duration-300 whitespace-nowrap group"
              whileHover={{ scale: 1.1 }}
              data-cursor-hover
            >
              <span className="group-hover:text-[#FF4500] transition-colors duration-300">
                {social.icon}
              </span>
              <span className="text-xl font-medium">{social.name}</span>
            </motion.a>
          ),
        )}
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#303030] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#303030] to-transparent pointer-events-none" />
    </div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 md:px-16 lg:px-32 relative"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-[#FF4500]/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[#FF4500] text-sm tracking-widest uppercase font-medium">
            05 — Contact
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-4 leading-tight">
            Contact Me
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl mx-auto">
            Let's build something amazing together. Feel free to reach out for
            collaborations or just a friendly hello.
          </p>
        </motion.div>

        {/* Logo carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <LogoCarousel />
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.isEmail ? undefined : "_blank"}
              rel={social.isEmail ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="group relative bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-[#FF4500]/50 transition-all duration-300 overflow-hidden"
              data-cursor-hover
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF4500]/0 to-[#FF4500]/0 group-hover:from-[#FF4500]/5 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF4500]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF4500]/20 transition-colors text-white/70 group-hover:text-[#FF4500]">
                  {social.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF4500] transition-colors">
                  {social.name}
                </h3>
                <p className="text-white/50 text-sm flex items-center gap-1">
                  {social.isEmail ? "Send an email" : "Connect with me"}
                  <ExternalLink size={12} />
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          <p className="text-white/30 text-sm">
            Designed & Built by{" "}
            <span className="text-[#FF4500]">Ishwar Suthar</span> ©{" "}
            {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
