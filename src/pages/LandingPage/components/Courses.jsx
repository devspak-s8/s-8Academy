
// Courses Section

import useScrollAnimation from "../../../hooks/useScrollAnimation";
import { Star } from "lucide-react"
const Courses = () => {
  const [coursesRef, coursesVisible] = useScrollAnimation()

  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "/placeholder.svg?height=200&width=300",
      price: "$99",
      rating: 4.9,
      students: 1234,
      duration: "12 weeks",
      level: "Beginner to Advanced",
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization techniques",
      image: "/placeholder.svg?height=200&width=300",
      price: "$129",
      rating: 4.8,
      students: 856,
      duration: "16 weeks",
      level: "Intermediate",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Build iOS and Android apps with React Native and Flutter",
      image: "/placeholder.svg?height=200&width=300",
      price: "$89",
      rating: 4.7,
      students: 642,
      duration: "10 weeks",
      level: "Beginner",
    },
    {
      id: 4,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, and CI/CD pipelines",
      image: "/placeholder.svg?height=200&width=300",
      price: "$149",
      rating: 4.9,
      students: 423,
      duration: "14 weeks",
      level: "Advanced",
    },
    {
      id: 5,
      title: "UI/UX Design Mastery",
      description: "Create stunning user interfaces with Figma and design principles",
      image: "/placeholder.svg?height=200&width=300",
      price: "$79",
      rating: 4.8,
      students: 789,
      duration: "8 weeks",
      level: "Beginner",
    },
    {
      id: 6,
      title: "Cybersecurity Fundamentals",
      description: "Learn ethical hacking, network security, and threat analysis",
      image: "/placeholder.svg?height=200&width=300",
      price: "$119",
      rating: 4.6,
      students: 567,
      duration: "12 weeks",
      level: "Intermediate",
    },
  ]

  return (
    <section id="courses" className="py-20 bg-white dark:bg-gray-900" ref={coursesRef}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${coursesVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-text-focus-in">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our wide range of expert-led courses designed to help you achieve your career goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 cursor-pointer ${
                coursesVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[50px]"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-price-bounce">
                  {course.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 transition-all duration-300 hover:scale-125 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400 fill-current animate-star-twinkle"
                            : "text-gray-300"
                        }`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {course.rating} ({course.students} students)
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="animate-fade-in-delayed">{course.duration}</span>
                  <span className="animate-fade-in-delayed">{course.level}</span>
                </div>

                <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95">
                  <span className="inline-block group-hover:animate-pulse">Enroll Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Courses  ;