import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App