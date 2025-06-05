import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experiencia from './components/Experiencia'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Experiencia/>
    </>
  )
}

export default App
