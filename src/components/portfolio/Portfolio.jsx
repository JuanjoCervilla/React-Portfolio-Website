import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio_1.jpg'
import IMG2 from '../../assets/portfolio_2.jpg'
import IMG3 from '../../assets/portfolio_3.jpg'
import IMG4 from '../../assets/portfolio_4.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Churn prediction',
    github: 'https://github.com/JuanjoCervilla/Churn_Prediction',
    demo: 'https://github.com/JuanjoCervilla/Churn_Prediction'
  },

  {
    id: 2,
    image: IMG3,
    title: 'Website Porftolio',
    github: "https://github.com/Juanjo1809/React-Portfolio-Website",
    demo: "https://github.com/Juanjo1809/React-Portfolio-Website"
  },

  {
    id: 3,
    image: IMG2,
    title: 'Real State Scrapping (Idealista)',
    github: "https://github.com/JuanjoCervilla/Idealista-Scarpping",
    demo: "https://github.com/JuanjoCervilla/Idealista-Scarpping"
  },

  {
    id: 4,
    image: IMG4,
    title: 'Personal Finances Dashboard',
    github: "https://github.com/JuanjoCervilla/Personal_Finances",
    demo: "https://github.com/JuanjoCervilla/Personal_Finances"
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
                <a href={demo} className='btn'> Live Demo </a>
                <a href={github} className='btn btn-primary'> Github </a>
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