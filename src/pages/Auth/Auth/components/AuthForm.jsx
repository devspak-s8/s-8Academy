
import  React,{ useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  Github,
  Chrome,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


 
  // Mouse tracking for interactive elements

const AuthForm = () => { 
  
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp && formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Form submitted:", formData);
    // Submit logic here
  };


  return (
    <>
    
        {/* Right Side - Auth Form */}
        <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="flex-1 flex items-center justify-center p-8 max-w-md mx-auto"
                >
                  <div className="w-full">
                    {/* Form Container */}
                    <motion.div
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Toggle */}
                      <div className="flex bg-white/5 rounded-2xl p-1 mb-8">
                        <motion.button
                          onClick={() => setIsSignUp(false)}
                          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                            !isSignUp
                              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                              : "text-white/60 hover:text-white"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Sign In
                        </motion.button>
                        <motion.button
                          onClick={() => setIsSignUp(true)}
                          className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                            isSignUp
                              ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                              : "text-white/60 hover:text-white"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Sign Up
                        </motion.button>
                      </div>
        
                      {/* Form Header */}
                      <motion.div
                        className="text-center mb-8"
                        key={isSignUp ? "signup" : "signin"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {isSignUp ? "Join the Revolution" : "Welcome Back"}
                        </h3>
                        <p className="text-white/60">
                          {isSignUp ? "Start your coding journey today" : "Continue your learning adventure"}
                        </p>
                      </motion.div>
        
                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <AnimatePresence mode="wait">
                          {isSignUp && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Label htmlFor="name" className="text-white/80 text-sm font-medium">
                                Full Name
                              </Label>
                              <div className="relative mt-2">
                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                                <Input
                                  id="name"
                                  name="name"
                                  type="text"
                                  placeholder="Enter your full name"
                                  value={formData.name}
                                  onChange={handleInputChange}
                                  className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                                  required={isSignUp}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
        
                        <div>
                          <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                            Email Address
                          </Label>
                          <div className="relative mt-2">
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="pl-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                              required
                            />
                          </div>
                        </div>
        
                        <div>
                          <Label htmlFor="password" className="text-white/80 text-sm font-medium">
                            Password
                          </Label>
                          <div className="relative mt-2">
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                            <Input
                              id="password"
                              name="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter your password"
                              value={formData.password}
                              onChange={handleInputChange}
                              className="pl-12 pr-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                              required
                            />
                            <motion.button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </motion.button>
                          </div>
                        </div>
        
                        <AnimatePresence mode="wait">
                          {isSignUp && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Label htmlFor="confirmPassword" className="text-white/80 text-sm font-medium">
                                Confirm Password
                              </Label>
                              <div className="relative mt-2">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                                <Input
                                  id="confirmPassword"
                                  name="confirmPassword"
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Confirm your password"
                                  value={formData.confirmPassword}
                                  onChange={handleInputChange}
                                  className="pl-12 pr-12 bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 h-12 rounded-xl"
                                  required={isSignUp}
                                />
                                <motion.button
                                  type="button"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
        
                        {!isSignUp && (
                          <div className="flex items-center justify-between">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                className="rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                              />
                              <span className="text-white/60 text-sm">Remember me</span>
                            </label>
                            <motion.button
                              type="button"
                              className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                              whileHover={{ scale: 1.05 }}
                            >
                              Forgot password?
                            </motion.button>
                          </div>
                        )}
        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            className="w-full h-12 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <span className="flex items-center justify-center space-x-2">
                              <span>{isSignUp ? "Start Learning" : "Sign In"}</span>
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </Button>
                        </motion.div>
        
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-black text-white/60">Or continue with</span>
                          </div>
                        </div>
        
                        <div className="grid grid-cols-2 gap-4">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              className="w-full h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-xl"
                            >
                              <Chrome className="w-5 h-5 mr-2" />
                              Google
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              variant="outline"
                              className="w-full h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 rounded-xl"
                            >
                              <Github className="w-5 h-5 mr-2" />
                              GitHub
                            </Button>
                          </motion.div>
                        </div>
        
                        <AnimatePresence>
                          {isSignUp && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-xs text-white/50 text-center leading-relaxed"
                            >
                              By signing up, you agree to our{" "}
                              <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                                Terms
                              </a>{" "}
                              and{" "}
                              <a href="#" className="text-purple-400 hover:text-purple-300 underline">
                                Privacy Policy
                              </a>
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </form>
                    </motion.div>
        
                    {/* Trust Indicators */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="mt-8 text-center"
                    >
                      <div className="flex items-center justify-center space-x-4 text-white/40 text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>4.9/5 rating</span>
                        </div>
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>Trusted by 10K+ students</span>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
          </>
  );
};

export default AuthForm;
