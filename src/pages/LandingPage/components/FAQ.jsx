
// FAQ Section

import useScrollAnimation from "../../../hooks/useScrollAnimation"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
const FAQ = () => {
  const [faqRef, faqVisible] = useScrollAnimation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What courses does s8Academy offer?",
      answer:
        "We offer a wide range of courses including Full Stack Web Development, Data Science & Analytics, Mobile App Development, Cloud Computing & DevOps, UI/UX Design, and Cybersecurity. All courses are designed by industry experts and updated regularly to match current market demands.",
    },
    {
      question: "How long do I have access to the courses?",
      answer:
        "Once you enroll in a course, you have lifetime access to all course materials, including future updates. You can learn at your own pace and revisit the content whenever you need to refresh your knowledge.",
    },
    {
      question: "Do I get a certificate after completing a course?",
      answer:
        "Yes! Upon successful completion of any course, you'll receive a verified certificate that you can add to your LinkedIn profile, resume, or portfolio. Our certificates are recognized by industry professionals and employers worldwide.",
    },
    {
      question: "What if I'm not satisfied with a course?",
      answer:
        "We offer a 30-day money-back guarantee on all our courses. If you're not completely satisfied with your purchase, you can request a full refund within 30 days of enrollment, no questions asked.",
    },
    {
      question: "Are there any prerequisites for the courses?",
      answer:
        "Most of our beginner courses have no prerequisites. For intermediate and advanced courses, we clearly list the required knowledge and skills. Each course page includes a detailed curriculum and prerequisites section to help you choose the right course for your level.",
    },
    {
      question: "Can I access courses on mobile devices?",
      answer:
        "Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, laptops, and desktops. You can download our mobile app for offline learning and sync your progress across all devices.",
    },
    {
      question: "Do you offer student discounts?",
      answer:
        "Yes, we offer special discounts for students, military personnel, and non-profit organizations. We also run seasonal promotions and bundle deals. Sign up for our newsletter to stay updated on the latest offers and discounts.",
    },
    {
      question: "Is there any support available if I get stuck?",
      answer:
        "We provide comprehensive support through multiple channels: 24/7 chat support, community forums, instructor Q&A sessions, and detailed documentation. Our support team is always ready to help you succeed in your learning journey.",
    },
    {
      question: "Can I get a job after completing your courses?",
      answer:
        "While we can't guarantee employment, our courses are designed to provide job-ready skills. We offer career guidance, resume reviews, interview preparation, and have partnerships with companies for job placement assistance. Many of our graduates have successfully transitioned to new careers.",
    },
    {
      question: "How often is the course content updated?",
      answer:
        "We update our course content regularly to keep up with industry trends and technological advances. Major updates happen quarterly, while minor updates and bug fixes are implemented as needed. All updates are included in your lifetime access at no additional cost.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden" ref={faqRef}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 bg-purple-500 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 left-20 w-32 h-32 bg-indigo-500 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${faqVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-text-focus-in">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about s8Academy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  faqVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 group"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index
                        ? "rotate-180 bg-purple-500"
                        : "group-hover:bg-purple-200 dark:group-hover:bg-purple-800"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openIndex === index ? "text-white" : "text-purple-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in-delayed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support Card */}
          <div
            className={`mt-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-8 text-center transition-all duration-1000 ${
              faqVisible ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-[30px]"
            }`}
            style={{ animationDelay: "1000ms" }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-purple-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group px-6 py-3 bg-white text-purple-500 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold flex items-center justify-center space-x-2">
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300 font-semibold">
                Live Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FAQ;