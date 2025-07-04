"use client";
import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Sparkles, Zap, BookOpen } from "lucide-react";
import AuthHero from "./components/AuthHero";
import BackButton from "./components/BackButton";
import AuthForm from "./components/AuthForm";

export default function AuthPage() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const rotateX = useTransform(scrollY, [0, 1000], [0, 360]);

  // eslint-disable-next-line no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"
      >
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Floating Orbs */}
        <motion.div
          style={{ rotateZ: rotateX }}
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ rotateZ: useTransform(rotateX, (value) => -value) }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Floating Tech Elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-32 left-16 text-purple-400/40"
        style={{ animationDelay: "0s" }}
      >
        <Code2 className="w-12 h-12" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-64 right-32 text-blue-400/40"
        style={{ animationDelay: "1s" }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-48 left-32 text-purple-300/40"
        style={{ animationDelay: "2s" }}
      >
        <Zap className="w-10 h-10" />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-1/3 right-16 text-blue-300/40"
        style={{ animationDelay: "3s" }}
      >
        <BookOpen className="w-14 h-14" />
      </motion.div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen p-12 flex">
        {/* Left Side - Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex-1 flex flex-col justify-center px-4 lg:px-16 max-w-2xl"
        >
          <BackButton />
          <AuthHero />
        </motion.div>

        {/* Right Side - Auth Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex items-center justify-center p-0 max-w-md mx-auto"
        >
          <AuthForm />
        </motion.div>
      </div>
    </div>
  );
}
