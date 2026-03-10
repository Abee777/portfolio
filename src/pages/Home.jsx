import React from 'react'
import Testimonials from "../components/testimonials/Testimonials"
import Portfolio from "../components/portfolio/Portfolio"
import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Experience from "../components/experience/Experience"
import Hero from "../components/hero/Hero"
import Footer from "../components/footer/Footer"
import Nav2 from "../components/nav/Nav2"

const Home = () => {
    return (
      <div>
        <Hero />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Nav2 />
        <Footer />
      </div>
    )
  }
  
export default Home