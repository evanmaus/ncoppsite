import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

// organisms
import Navbar from "./components/organisms/Navbar"
import Footer from "./components/organisms/Footer"

// pages
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Events from "./components/pages/Events"
import GetInvolved from "./components/pages/GetInvolved"
import Resources from "./components/pages/Resources"
import News from "./components/pages/News"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
        <Route path="/getinvolved" element={<GetInvolved />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  )
}
