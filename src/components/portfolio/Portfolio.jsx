import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_1.jpg'
import IMG2 from '../../assets/portfolio_2.jpg'
import IMG3 from '../../assets/portfolio_3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Website Porftolio',
    github: 'https://github.com/Juanjo1809/React-Portfolio-Website',
    demo: 'https://github.com/Juanjo1809/React-Portfolio-Website'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Website Porftolio',
    github: "https://github.com/Juanjo1809/React-Portfolio-Website",
    demo: "https://github.com/Juanjo1809/React-Portfolio-Website"
  },
  {
    id: 3,
    image: IMG3,
    title: 'Website Porftolio',
    github: "https://github.com/Juanjo1809/React-Portfolio-Website",
    demo: "https://github.com/Juanjo1809/React-Portfolio-Website"
  },

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio_item-image'></div>
                <img src={image} alt={title} />
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
                <a href={github} className='btn' >Github</a>
                <a href={demo} className='btn btn-primary'>Live Demo</a>
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