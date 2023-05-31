import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What IT Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experiences__container">
        {/* FRONTEND */}
        <div className="experiences__frontend">
          <h3>Data Analyst</h3>
          <div className="experiences__content">
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>PySpark</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Qlik Sense</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>AWS | GPC</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Snowflake</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div className="experiences__backend">
        <h3>Web Development</h3>
          <div className="experiences__content">
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Dash Plotly (flask)</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>CSS | HTML</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Github | Docker</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Experience