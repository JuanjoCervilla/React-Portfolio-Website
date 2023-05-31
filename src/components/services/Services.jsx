import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article  className='service'>
          <div className='service__head'>
            <h3>DATA SCIENTIST </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web scrapping</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Algorithms of machine learning (sklearn)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data mining</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}

        <article  className='service'>
          <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Dash-Plotly Web Development (flask) </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> React and Django Web Development </p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon' />
              <p> Django application</p>
            </li> */}
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT*/}

        <article  className='service'>
          <div className='service__head'>
            <h3>DATA ANALYST</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Qlik Sense Development </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Data Visualization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Dashboards Application </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services