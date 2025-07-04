import LandingPage from './pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from './components/ThemeProvider';
import AuthPage from './pages/Auth/Auth/AuthPage';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
