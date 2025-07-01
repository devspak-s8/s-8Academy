
// Features Section
import useScrollAnimation from "../../../hooks/useScrollAnimation";

import { Users, BookOpen, Award, Play } from "lucide-react";
const Features = () => {
  const [featuresRef, featuresVisible] = useScrollAnimation()

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Curriculum",
      description: "Structured learning paths that take you from beginner to expert",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificates",
      description: "Earn recognized certificates upon successful course completion",
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Hands-on Projects",
      description: "Build real-world projects to showcase in your portfolio",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${featuresVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-text-focus-in">
            Why Choose s8Academy?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide everything you need to succeed in your learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer ${
                featuresVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[50px]"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 text-purple-500 rounded-full mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-icon-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default Features;