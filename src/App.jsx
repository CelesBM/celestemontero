import { GlobalStyles } from './GlobalStyles/GlobalStyles'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Header />
    <Hero id="hero" />
    <Projects id="projects" />
    <Skills id="skills" />
    <About id="about" />
    <Footer />
    <GlobalStyles />
  </>
  )
}

export default App
