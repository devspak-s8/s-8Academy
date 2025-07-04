import React from "react";import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Heart, Activity, Stethoscope } from "lucide-react";

const AnimatedIcons = () => {

    
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, -50]);

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };


  return (  
    <>
      <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl" />
            <div className="absolute top-40 right-20 w-48 h-48 bg-sky-200 rounded-full opacity-15 blur-2xl" />
            <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-200 rounded-full opacity-10 blur-xl" />
          </motion.div>
    
          {/* Floating Medical Icons */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-32 left-20 text-blue-200 opacity-30"
          >
            <Heart className="w-8 h-8" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute top-60 right-32 text-sky-300 opacity-25"
            style={{ animationDelay: "1s" }}
          >
            <Activity className="w-10 h-10" />
          </motion.div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="absolute bottom-40 right-20 text-blue-300 opacity-20"
            style={{ animationDelay: "2s" }}
          >
            <Stethoscope className="w-12 h-12" />
          </motion.div>
    
    </>
  );
};

export default AnimatedIcons;



