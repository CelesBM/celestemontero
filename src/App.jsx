import { GlobalStyles } from './GlobalStyles/GlobalStyles'
//import { Link, animateScroll as scroll } from 'react-scroll'; // Importamos react-scroll
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
    <Projects id="projects" /> {/* Agregamos un id a cada sección */}
    <Skills id="skills" />
    <About id="about" />
    <Footer />
    <GlobalStyles />
  </>
  )
}

export default App
