import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (

       <>
        <Navbar></Navbar>
        <Hero></Hero> 
        <About></About>
         <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer> 

       </>
    
  )
}

export default App
