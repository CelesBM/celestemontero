import { GlobalStyles } from './GlobalStyles/GlobalStyles'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Hero/>
      <Projects/>
      <Skills/>
      <About/>
      <Footer/>
      <GlobalStyles/>
    </>
  )
}

export default App
