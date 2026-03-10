import React from 'react'
import "./nav.css"
import {FiHome} from "react-icons/fi"
import {AiOutlineUser} from "react-icons/ai"
import {BsBook} from "react-icons/bs"
import {MdOutlineRateReview} from "react-icons/md"
import {MdOutlineContactPhone} from "react-icons/md"


const Nav = () => {
  const [activeNav, setActiveNav] = React.useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FiHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className= {activeNav==='#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className= {activeNav==='#experience' ? 'active' : ''}><BsBook /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className= {activeNav==='#testimonials' ? 'active' : ''}><MdOutlineRateReview /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className= {activeNav==='#contact' ? 'active' : ''}><MdOutlineContactPhone /></a>
    </nav>
  )
}

export default Nav