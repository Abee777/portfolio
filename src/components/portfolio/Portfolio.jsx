import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
import IMG7 from "../../assets/portfolio7.jpg"
import IMG8 from "../../assets/portfolio8.jpg"
import IMG9 from "../../assets/portfolio9.jpg"


const data = [
  {
    id:9,
    image: IMG9,
    title: "Sacred Simulations",
    github: "https://github.com/Abee777/SacredSimulations"
    demo: "https://r1.vladimirsalatic.com/index.html",
    tech: "React | TailwindCSS | Next13"
  },
  {
    id:8,
    image: IMG8,
    title: "Tenzies Game",
    github: "https://github.com/Abee777/React/tree/master/Tenzies-game",
    demo: null,
    tech: "React"
  },
  {
    id:7,
    image: IMG7,
    title: "Note App",
    github: "https://github.com/Abee777/React/tree/master/Note-app",
    demo: null,
    tech: "React"
  },
  {
    id:6,
    image: IMG6,
    title: "Travel Journal",
    github: "https://github.com/Abee777/React/tree/master/Travel-Journey",
    demo: null,
    tech: "React"
  },
  {
    id:5,
    image: IMG5,
    title: "Meme Generator",
    github: "https://github.com/Abee777/React/tree/master/Meme-generator",
    demo: null,
    tech: "React"
  },
  {
    id:4,
    image: IMG4,
    title: "PHP Shoutbox",
    github: "https://github.com/Abee777/Projects-VS/tree/master/ajaxPHPshoutbox",
    demo: null,
    tech: "PHP"
  },
  {
    id:3,
    image: IMG3,
    title: "Iks-oks",
    github: "https://github.com/Abee777/Projects-VS/tree/master/iks-oks_game",
    demo: null,
    tech: "jQuery"
  },
  {
    id:2,
    image: IMG2,
    title: "Rock Paper Scissors",
    github: "https://github.com/Abee777/Projects-VS/tree/master/rock_paper_scissors_game",
    demo: null,
    tech: "JS"
  },
  {
    id:1,
    image: IMG1,
    title: "Martial Arts Quiz",
    github: "https://github.com/Abee777/Projects-VS/tree/master/martial_arts_quiz",
    demo: null,
    tech: "jQuery"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some of my work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo, tech}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{tech}</p>
                <div className="portfolio__item-buttons">
                  <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
                  {demo && <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio