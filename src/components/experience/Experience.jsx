import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id='experiences'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experiences__container">
        {/* FRONTEND */}
        <div className="experiences__frontend">
          <h3>Frontend Development</h3>
          <div className="experiences__content">
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* BACKEND */}
        <div className="experiences__backend">
        <h3>Backend Development</h3>
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
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
                <h4>Fortran</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experiences__details'>
              <BsPatchCheckFill className='experiences__details-icon'/>
              <div>
               <h4>Matlab</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>    
        </div>
      </div>
    </section>
  )
}

export default Experience