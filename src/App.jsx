import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

import Home       from './pages/Home'
import About      from './pages/About'
import Experience from './pages/Experience'
import Projects   from './pages/Projects'
import Skills     from './pages/Skills'
import Contact    from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/skills"     element={<Skills />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
