
// About Us Section with Desktop Mockup

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import { Star, BookOpen, Users, Award } from "lucide-react";
const AboutUs = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation()

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "200+", label: "Expert Instructors" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={aboutRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div
            className={`transition-all duration-1000 ${aboutVisible ? "animate-slide-in-left opacity-100" : "opacity-0 translate-x-[-50px]"}`}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-text-focus-in">
              About <span className="text-purple-500">s8Academy</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              We're revolutionizing online education by making high-quality learning accessible to everyone. Our
              platform combines cutting-edge technology with expert instruction to deliver an unparalleled learning
              experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Founded in 2020, s8Academy has grown to become one of the most trusted names in online education, helping
              thousands of students achieve their career goals through practical, hands-on learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-500 hover:scale-105 ${
                    aboutVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-2xl font-bold text-purple-500 mb-1 animate-counter">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <button className="group px-8 py-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Right side - Desktop Mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${aboutVisible ? "animate-slide-in-right opacity-100" : "opacity-0 translate-x-[50px]"}`}
          >
            {/* Desktop Frame */}
            <div className="relative bg-gray-800 rounded-t-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-500 animate-card-float">
              {/* Desktop Header */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <div
                  className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <div className="flex-1 bg-gray-700 rounded px-3 py-1 ml-4">
                  <span className="text-gray-300 text-sm">s8academy.com/dashboard</span>
                </div>
              </div>

              {/* Desktop Screen */}
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-inner">
                {/* Navigation Bar */}
                <div className="bg-purple-500 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-purple-500 font-bold text-sm">S8</span>
                    </div>
                    <span className="text-white font-semibold">s8Academy Dashboard</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Welcome Section */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, John!</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Continue your learning journey</p>
                  </div>

                  {/* Progress Cards */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-300 animate-counter">75%</div>
                      <div className="text-sm text-purple-700 dark:text-purple-400">Course Progress</div>
                      <div className="w-full bg-purple-300 dark:bg-purple-700 rounded-full h-2 mt-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full animate-progress-bar"
                          style={{ width: "75%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-800 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 animate-counter">12</div>
                      <div className="text-sm text-indigo-700 dark:text-indigo-400">Completed Courses</div>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 text-yellow-400 fill-current animate-star-twinkle"
                            style={{ animationDelay: `${i * 100}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Current Courses */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">Current Courses</h4>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-sm">React Development</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">8/12 lessons completed</div>
                      </div>
                      <div className="text-purple-500 text-xs font-medium">67%</div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-sm">Node.js Backend</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">5/10 lessons completed</div>
                      </div>
                      <div className="text-indigo-500 text-xs font-medium">50%</div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 dark:text-white text-sm">UI/UX Design</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">3/8 lessons completed</div>
                      </div>
                      <div className="text-green-500 text-xs font-medium">38%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Base */}
            <div className="bg-gray-700 h-8 rounded-b-2xl relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-600 rounded-t-lg"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50 animate-pulse-slow"></div>
            <div className="absolute -bottom-8 -left-4 w-12 h-12 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-50 animate-bounce-slow"></div>

            {/* Notification Badge */}
            <div className="absolute top-8 right-8 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce-subtle">
              3 new
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;