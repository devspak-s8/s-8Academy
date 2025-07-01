"use client"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Courses from "./components/Courses"
import Features from "./components/Features"
import AboutUs from "./components/AboutUS"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import FAQ from "./components/FAQ"
// Update the main App component to include the AboutUs section:
// In the return statement, add <AboutUs /> after <Features /> and before <CTA />

export default function LandingPage() {
  return (
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <Hero />
        <AboutUs /> 
        <Courses />
        <Features />
        <FAQ />
        <CTA />
        <Footer />
      </div>
  )
}
