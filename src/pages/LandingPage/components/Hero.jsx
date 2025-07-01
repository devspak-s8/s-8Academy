// Hero Section

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { useState, useEffect, } from "react"
import { Play, BookOpen,  ArrowRight, Check }  from "lucide-react"
const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation()
  const [floatingElements, setFloatingElements] = useState([])

  useEffect(() => {
    // Create floating elements
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 2,
    }))
    setFloatingElements(elements)
  }, [])

  return (
    <section className="pt-24 pb-12 p-8 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-purple-900/20 relative overflow-hidden">
      {/* Floating Background Elements */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            animationDelay: `${element.delay}s`,
          }}
        >
          <div className="w-full h-full bg-purple-400 dark:bg-purple-600 rounded-full animate-pulse"></div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10" ref={heroRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${heroVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-50px]"}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="inline-block animate-text-shimmer bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent bg-300% animate-gradient">
                Master New Skills
              </span>
              <br />
              with <span className="text-purple-500 animate-bounce-subtle">s8Academy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in-delayed">
              Unlock your potential with our comprehensive online courses. Learn from industry experts and advance your
              career with hands-on projects and real-world applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 animate-button-glow">
                <span>Start Learning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group px-8 py-4 border-2 border-purple-500 text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${heroVisible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-[50px]"}`}
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform hover:rotate-0 transition-all duration-500 animate-card-float">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center animate-spin-slow">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white animate-typewriter">Web Development</h3>
                  <p className="text-gray-600 dark:text-gray-300">Complete Course</p>
                </div>
              </div>
              <div className="space-y-3">
                <div
                  className="flex items-center space-x-2 animate-slide-in-stagger"
                  style={{ animationDelay: "0.1s" }}
                >
                  <Check className="w-4 h-4 text-green-500 animate-check-mark" />
                  <span className="text-gray-600 dark:text-gray-300">HTML & CSS Fundamentals</span>
                </div>
                <div
                  className="flex items-center space-x-2 animate-slide-in-stagger"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Check className="w-4 h-4 text-green-500 animate-check-mark" />
                  <span className="text-gray-600 dark:text-gray-300">JavaScript ES6+</span>
                </div>
                <div
                  className="flex items-center space-x-2 animate-slide-in-stagger"
                  style={{ animationDelay: "0.3s" }}
                >
                  <Check className="w-4 h-4 text-green-500 animate-check-mark" />
                  <span className="text-gray-600 dark:text-gray-300">React.js & Node.js</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 animate-pulse-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-50 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero ;