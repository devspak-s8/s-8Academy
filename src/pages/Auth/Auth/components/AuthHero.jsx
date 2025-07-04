
import React from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  Code2,
  Users,
  Play,
  CheckCircle,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
const AuthHero = () => {

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
    <>
          <motion.div variants={itemVariants} className="mb-12">
            <motion.div
              className="flex items-center space-x-4 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-sm"
                />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  S8Academy
                </h1>
                <p className="text-white/60 text-sm">Your Tech Launchpad</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Code Your
                <motion.span
                  className="block bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  style={{ backgroundSize: "200% 100%" }}
                >
                  Future
                </motion.span>
              </motion.h2>
              <motion.p
                className="text-xl text-white/70 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Join the next generation of developers. Learn with peers, build real projects, and launch your tech
                career in weeks, not years.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 py-8 border-y border-white/10">
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  10K+
                </motion.div>
                <div className="text-white/60 text-sm">Students</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                >
                  95%
                </motion.div>
                <div className="text-white/60 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                >
                  12wks
                </motion.div>
                <div className="text-white/60 text-sm">To Career</div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="space-y-4">
              {[
                { icon: Play, text: "Interactive code playgrounds" },
                { icon: Users, text: "Learn with your cohort" },
                { icon: TrendingUp, text: "Real-world projects" },
                { icon: CheckCircle, text: "Career placement support" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-white/80"
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-white/10">
                    <feature.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
</>
  );
};

export default AuthHero;
