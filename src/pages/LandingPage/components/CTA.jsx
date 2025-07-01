// CTA Section

import useScrollAnimation from "../../../hooks/useScrollAnimation";
const CTA = () => {
  const [ctaRef, ctaVisible] = useScrollAnimation()

  return (
    <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden" ref={ctaRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div
          className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${ctaVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"}`}
        >
          <h2 className="text-4xl font-bold text-white mb-4 animate-text-glow">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-purple-100 mb-8 animate-fade-in-delayed">
            Join thousands of students who have transformed their careers with s8Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-4 bg-white text-purple-500 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-semibold animate-button-pulse">
              <span className="group-hover:animate-bounce">Start Free Trial</span>
            </button>
            <button className="group px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300 font-semibold hover:shadow-lg">
              <span className="group-hover:animate-pulse">View All Courses</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CTA;