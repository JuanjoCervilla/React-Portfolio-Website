import React from 'react'
import './about.css'
import MEABOUT from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'> 
    <h5>Get To Know</h5>
    <h2>About me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={MEABOUT} alt="About Phot" />
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experiences</h5>
            <small>3+ Years Working</small>
          </article>
       

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>International Environment</h5>
            {/* <small>France, Spain</small> */}
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          </div>

        <p> Aerospace Engineer reborn as a Data Analyst, passionate for new technologies, data analysis and automation with a strong foundation in engineering principles. </p>

        <p>Committed to continuous learning and staying up‑to‑date with industry trends, I am enthusiastic about leveraging data to unlock hidden opportunities and optimize business processes.</p>

        <h4>EDUCATION</h4>
          <ol style={{ listStyle: 'none' }}>
              <li> - ECOLE CENTRALE NANTES (ECN): DIPLÔME D'INGENIEUR </li>
              <li> - UNIVERSIDAD POLITECNICA DE MADRID (UPM): BS. + MS. IN AEROSPACE ENGINEER</li>
          </ol>

        {/* <a href="#contact" className='btn btn-primary'>Let's Talk</a> */}

      </div>
    </div>


    </section>
  )
}

export default About