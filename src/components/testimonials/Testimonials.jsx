import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"


const data = [
  {
    avatar: AVTR1,
    nameTitle: "Adir El Al - CEO at Airportcity Belgrade",
    review: "All projects were completed 5-10 days before the set deadline and within the set budget. Special commendation - 100% of the surveyed clients gave a 100% grade to your work and engagement."
  },
]

// when new testimonials => make it as a slider instead
// u can use it from swiperjs.com [2:33:56 yt video]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">  
        {
          data.map(({avatar, nameTitle, review}, index) => {
            return (
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className='client__name'>{nameTitle}</h5>
                <small className="client__review">{review}</small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials