

import LandingPage from './pages/LandingPage/LandingPage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
        <LandingPage />
    </ThemeProvider>
  )
}
