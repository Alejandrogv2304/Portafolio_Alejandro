import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experiencia from './components/Experiencia'
import SobreMi from './components/SobreMi'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Experiencia/>
     <SobreMi/>
    </>
  )
}

export default App
