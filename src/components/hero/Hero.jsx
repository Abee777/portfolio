import React from 'react'
import "./hero.css"
import CV  from "../../assets/cv.pdf"
import ME from "../../assets/me.jpg"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vladimir Salatić</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <div className="cta">
          <a href={CV} download="CV_Vladimir_Salatić" className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

          <div className="header__socials">
            <a href="https://www.linkedin.com/in/vladimir-salatic/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
            <a href="https://github.com/Abee777" target="_blank" rel='noreferrer'><BsGithub /></a>
          </div>

          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header