import { gsap } from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import React from 'react'
import About from './components/About'
import Art from './components/Art'
import Cocktails from './components/Cocktails'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Navbar from './components/Navbar'

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Footer/>
    </main>

  )
}

export default App