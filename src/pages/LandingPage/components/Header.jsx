// Header Component
import { useState, } from "react"
import  useTheme  from "../../../hooks/theme";
import { Sun, Moon, Menu, X,} from "lucide-react"
const Header = () => {
  const { isDark, setIsDark } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S8</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">s8Academy</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
              Courses
            </a>
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>

            <button className="hidden md:block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
              Get Started
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#courses" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                Courses
              </a>
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-purple-500 transition-colors">
                About
              </a>
              <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header;