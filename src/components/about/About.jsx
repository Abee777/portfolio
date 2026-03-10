import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
import {AiOutlineExperiment} from "react-icons/ai"
import {MdWorkOutline} from "react-icons/md"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiOutlineExperiment className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Learning</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon"/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>A martial artist, civil engineer, philosopher, and of course a web developer. Web3 and AI enthusiast.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About