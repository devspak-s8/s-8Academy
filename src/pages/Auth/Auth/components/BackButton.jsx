
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const BackButton = () => {
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
       <motion.div variants={itemVariants} className="mb-8">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm border border-white/20"
              >
                ← Back to Home
              </Button>
            </Link>
          </motion.div>

  );
};

export default BackButton;





