import React from 'react'
import "./experience.css"
import {ImHtmlFive} from "react-icons/im"
import {SiCss3} from "react-icons/si"
import {SiJavascript} from "react-icons/si"
import {SiJquery} from "react-icons/si"
import {SiReact} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"

import {SiPhp} from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"

const Experience = () => {

  const frontEnd = [
    {
      id: 1,
      icon: <ImHtmlFive style={{color: "#e34c26", marginTop: "6px"}}/>,
      tech: 'HTML',
      exp: 'Experienced'
    },
    {
      id: 2,
      icon: <SiCss3 style={{color: "#2965f1", marginTop: "6px"}}/>,
      tech: 'CSS',
      exp: 'Intermediate'
    },
    {
      id: 3,
      icon: <SiJavascript style={{color: "#F0DB4F", marginTop: "6px"}}/>,
      tech: 'JavaScript',
      exp: 'Experienced'
    },
    {
      id: 4,
      icon: <SiJquery style={{color: "#0868ac", marginTop: "6px"}}/>,
      tech: 'jQuery',
      exp: 'Intermediate'
    },
    {
      id: 5,
      icon: <SiReact style={{color: "#88dded", marginTop: "6px"}}/>,
      tech: 'React',
      exp: 'Intermediate'
    },
    {
      id: 6,
      icon: <SiTailwindcss style={{color: "#4dc0b5", marginTop: "6px"}}/>,
      tech: 'TailwindCSS',
      exp: 'Basic'
    }
  ]

  const backEnd = [
    {
      id: 7,
      icon: <SiPhp style={{color: "#787cb5", marginTop: "6px"}}/>,
      tech: 'PHP',
      exp: 'Basic'
    },
    {
      id: 8,
      icon: <FaNodeJs style={{color: "#3c873a", marginTop: "6px"}}/>,
      tech: 'Node.js',
      exp: 'Basic'
    },
    {
      id: 9,
      icon: <GrMysql style={{color: "#f29111", marginTop: "6px"}}/>,
      tech: 'MySQL',
      exp: 'Basic'
    }
  ]

  const frontEndElements = frontEnd.map((item)=>(
    <article key={item.id} className='experience__details'>
      {item.icon}
      <div>
        <h4>{item.tech}</h4>
        <small className='text-light'>{item.exp}</small>
      </div>
    </article>
  ))

  const backEndElements = backEnd.map((item)=>(
    <article key={item.id} className='experience__details'>
      {item.icon}
      <div>
        <h4>{item.tech}</h4>
        <small className='text-light'>{item.exp}</small>
      </div>
    </article>
  ))

  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* Frontend */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontEndElements}
          </div>
        </div>
        {/* Backend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            {backEndElements}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience