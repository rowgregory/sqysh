"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WebsiteShowcase = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const websites = [
    {
      id: 1,
      name: "Boys & Girls Club of Lynn",
      type: "Non-Profit",
      description:
        "Space-themed platform with donation management & event ticketing",
      url: "https://bgcl.org",
      gradient: "from-cyan-500 to-sky-500",
      accentColor: "sky",
    },
    {
      id: 2,
      name: "The Pops Orchestra",
      type: "Arts & Entertainment",
      description:
        "Modern platform displaying orchestra performances, events, and schedules",
      url: "https://thepopsorchestra.org",
      gradient: "from-teal-500 to-cyan-500",
      accentColor: "teal",
    },
    {
      id: 3,
      name: "Coastal Referral Exchange",
      type: "Business Networking",
      description: "Pirate-themed networking platform with referral tracking",
      url: "https://coastal-referral-exchange.com",
      gradient: "from-indigo-500 to-sky-500",
      accentColor: "indigo",
    },
    {
      id: 4,
      name: "Little Paws Dachshund Rescue",
      type: "Non-Profit",
      description:
        "Rescue platform with Rescue Groups integration, auction system, and donor management",
      url: "https://littlepawsdr.org",
      gradient: "from-sky-500 to-teal-500",
      accentColor: "cyan",
    },
    {
      id: 5,
      name: "Century 21 - Eileen Jonah",
      type: "Real Estate",
      description:
        "Real estate platform with Repliers MLS integration for property listings",
      url: "https://jonahgroupre.com",
      gradient: "from-cyan-500 to-indigo-500",
      accentColor: "sky",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen bg-black py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Work
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Custom web solutions that replace expensive platforms with modern,
            scalable alternatives
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {websites.map((site) => (
            <motion.a
              href={site.url}
              target="_blank"
              key={site.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(site.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-gray-700 transition-colors">
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${site.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Animated Border Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${
                      site.accentColor === "sky"
                        ? "rgb(56, 189, 248)"
                        : site.accentColor === "cyan"
                          ? "rgb(34, 211, 238)"
                          : site.accentColor === "teal"
                            ? "rgb(45, 212, 191)"
                            : site.accentColor === "indigo"
                              ? "rgb(129, 140, 248)"
                              : "rgb(232, 121, 249)"
                    }, transparent)`,
                    filter: "blur(20px)",
                  }}
                  animate={{
                    rotate: hoveredId === site.id ? 360 : 0,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <motion.div
                      animate={{
                        scale: hoveredId === site.id ? 1.05 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {site.name}
                      </h3>
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${site.gradient} bg-clip-text text-transparent mb-4`}
                      >
                        {site.type}
                      </p>
                    </motion.div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {site.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    <motion.div
                      className="flex items-center justify-between"
                      animate={{
                        x: hoveredId === site.id ? 5 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-gray-500 text-sm font-mono">
                        {site.url}
                      </span>
                      <motion.div
                        animate={{
                          x: hoveredId === site.id ? 5 : 0,
                          opacity: hoveredId === site.id ? 1 : 0.5,
                        }}
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${site.gradient} flex items-center justify-center`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>

                    {/* Tech Stack Indicators */}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Ready to replace your expensive platform with a custom solution?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-500 text-white font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-shadow"
          >
            Let's Build Something
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteShowcase;
