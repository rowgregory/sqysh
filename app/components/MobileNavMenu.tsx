"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHeaderContext } from "../contexts/headerContext";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import SqyshQuoteBtn from "./common/SqyshQuoteBtn";

const MobileNavMenu = () => {
  const { toggleNavigation, setToggleNavigation } = useHeaderContext();
  const close = () => setToggleNavigation(false);

  useEffect(() => {
    if (toggleNavigation) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [toggleNavigation]);

  // Animation variants
  const menuVariants: any = {
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 200,
        duration: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <AnimatePresence>
      {toggleNavigation && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 w-screen min-h-screen bg-[#05071a] flex flex-col items-center justify-center gap-5 z-[60] overflow-hidden"
        >
          {/* Background overlay with subtle animation */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#05071a] via-[#0a0d2a] to-[#05071a]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            <motion.div variants={itemVariants} onClick={close}>
              <SqyshQuoteBtn />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                onClick={close}
                href="/services"
                className="btn-anim py-3 px-8 bg-[linear-gradient(to_right,_#667eea,_#764ba2,_#6B8DD6,_#8E37D7)] text-white font-bold uppercase font-Raleway rounded-full group inline-flex items-center gap-2 hover:scale-105 transition-transform duration-200"
              >
                Services{" "}
                <motion.div
                  whileHover={{ rotate: 0 }}
                  initial={{ rotate: -45 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon icon={faArrowRight} color="#fff" size="sm" />
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavMenu;
