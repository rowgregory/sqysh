"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import servicesData from "@/public/data/servicesData";
import SqyshQuoteBtn from "../components/common/SqyshQuoteBtn";

const Services = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const servicesRef = useRef(null);
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-50px",
  });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Parallax effects
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const titleVariants: any = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -45,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1,
      },
    },
  };

  const serviceCardVariants: any = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
      rotateY: -15,
    },
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        delay: i * 0.1,
      },
    }),
  };

  const buttonVariants: any = {
    hidden: {
      opacity: 0,
      scale: 0.5,
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
      },
    },
  };

  const footerTextVariants: any = {
    hidden: {
      opacity: 0,
      y: 50,
      filter: "blur(5px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col px-3 pt-8 md:pt-24 pb-32 overflow-hidden"
    >
      {/* Title Section */}
      <motion.div
        ref={titleRef}
        style={{ y: titleY }}
        initial="hidden"
        animate={isTitleInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center mb-20"
      >
        <motion.div variants={titleVariants} className="relative inline-block">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            style={{
              background: "linear-gradient(135deg, #22d3ee, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 20px rgba(34,211,238,0.3))",
            }}
          >
            Explore Our Services
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={
              isTitleInView
                ? { width: "80%", opacity: 1 }
                : { width: 0, opacity: 0 }
            }
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
            style={{ margin: "0 auto" }}
          />
        </motion.div>

        <motion.div variants={buttonVariants} className="mt-12">
          <SqyshQuoteBtn />
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        ref={servicesRef}
        className="w-full grid grid-cols-12 gap-6 mt-20 mb-4"
        initial="hidden"
        animate={isServicesInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {servicesData.map((obj, i) => (
          <motion.section
            key={i}
            data-testid={`service-${i}`}
            className="group col-span-12 lg:col-span-6 xl:col-span-4 relative"
            variants={serviceCardVariants}
            custom={i}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            {/* Card background with glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(135deg, rgba(34,211,238,0.05), rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
                boxShadow: "0 8px 32px rgba(34,211,238,0.1)",
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(34,211,238,0.3), rgba(59,130,246,0.3), rgba(139,92,246,0.3), transparent)",
                padding: "1px",
              }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-full w-full rounded-2xl bg-transparent" />
            </motion.div>

            {/* Card content */}
            <div className="relative p-8 h-full">
              {/* Icon with glow effect */}
              <motion.div
                className="mb-6 relative inline-block"
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle, ${obj.color}20, transparent 70%)`,
                    filter: "blur(10px)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <FontAwesomeIcon
                  icon={obj.icon}
                  className="text-4xl relative z-10"
                  style={{ color: obj.color }}
                />
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300"
                transition={{ duration: 0.3 }}
              >
                {obj.title}
              </motion.h2>

              {/* Description */}
              <motion.div
                className="text-slate-300 group-hover:text-slate-200"
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <motion.span
                      className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                    {obj.text}
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </motion.div>

      {/* Animated divider */}
      <motion.div
        className="w-full my-32 relative"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={
          isServicesInView
            ? { scaleX: 1, opacity: 1 }
            : { scaleX: 0, opacity: 0 }
        }
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

        {/* Floating particles along the line */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: "-4px",
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Footer Section */}
      <motion.div
        ref={footerRef}
        initial="hidden"
        animate={isFooterInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="text-center"
      >
        <motion.p
          variants={footerTextVariants}
          className="text-lg md:text-xl text-slate-300 max-w-screen-md mx-auto mb-12 leading-relaxed"
        >
          From building your website to managing your social media,{" "}
          <motion.span
            className="font-bold"
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f97316)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            animate={{
              filter: [
                "drop-shadow(0 0 5px rgba(255,215,0,0.5))",
                "drop-shadow(0 0 15px rgba(255,215,0,0.8))",
                "drop-shadow(0 0 5px rgba(255,215,0,0.5))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Sqysh
          </motion.span>{" "}
          handles all your digital needs so you can focus on running your
          business while we grow your online presence.
        </motion.p>

        <motion.div
          variants={buttonVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SqyshQuoteBtn />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
