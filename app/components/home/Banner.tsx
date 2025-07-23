"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants: any = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1.2,
      },
    },
  };

  const wordVariants: any = {
    hidden: { opacity: 0, y: 50, rotateY: -90 },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  const subtitleVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        delay: 0.8,
      },
    },
  };

  const buttonVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        delay: 1.2,
      },
    },
  };

  const words = "Custom Websites, Mobile Apps, Social Media".split(" ");

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(37,170,225,0.1) 0%, transparent 70%)",
          left: mousePos.x - 192,
          top: mousePos.y - 192,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-8 md:pt-24 px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Main title with individual word animations */}
        <div className="text-center mb-8">
          <motion.div
            className="flex flex-wrap justify-center gap-x-4 gap-y-2"
            variants={titleVariants}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="font-bold text-4xl md:text-6xl lg:text-8xl text-white relative"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  background:
                    "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 30px rgba(37,170,225,0.5)",
                  filter: "drop-shadow(0 0 10px rgba(34,211,238,0.3))",
                }}
                variants={wordVariants}
                custom={i}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mt-4"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "60%", opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
            style={{ margin: "0 auto" }}
          />
        </div>

        {/* Subtitle with typewriter effect */}
        <motion.div variants={subtitleVariants} className="text-center mb-12">
          <motion.p
            className="text-slate-300 text-lg md:text-2xl font-light tracking-wider flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.2, duration: 1.5, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Design. Develop. Deploy.
            </motion.span>
            <motion.span
              className="inline-block w-0.5 h-6 bg-cyan-400 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: 3.7 }}
            />
          </motion.p>
        </motion.div>

        {/* CTA Button with advanced effects */}
        <motion.div variants={buttonVariants} className="relative">
          <motion.button
            className="relative group px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xl rounded-full overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(37,170,225,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated background gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Button text */}
            <Link
              href="/quote"
              className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center"
            >
              <span className="text-sm sm:text-base md:text-xl">
                Get in touch with
              </span>
              <motion.span
                className="font-black text-sm sm:text-base md:text-xl"
                style={{
                  background: "linear-gradient(135deg, #fbbf24, #f97316)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 10px rgba(255,215,0,0.5))",
                    "drop-shadow(0 0 20px rgba(255,215,0,0.8))",
                    "drop-shadow(0 0 10px rgba(255,215,0,0.5))",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Sqysh
              </motion.span>
              <motion.span
                className="inline-block text-lg sm:text-xl md:text-2xl"
                animate={{ rotate: [-45, 0, -45] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </Link>

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white/20"
              initial={{ scale: 0, opacity: 1 }}
              whileHover={{
                scale: 4,
                opacity: 0,
                transition: { duration: 0.6 },
              }}
            />
          </motion.button>

          {/* Floating particles around button */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                left: `${20 + i * 20}%`,
                top: `${-10 + (i % 2) * 140}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
            animate={{
              borderColor: [
                "rgba(34,211,238,0.5)",
                "rgba(34,211,238,1)",
                "rgba(34,211,238,0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
