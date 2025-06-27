import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Services'
import MyWork from './Components/My Work/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
