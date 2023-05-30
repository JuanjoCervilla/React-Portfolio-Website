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
            <h5>Clients</h5>
            <small>200+ Wordlwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
          </div>

        <p>
        Aeronautical Engineer reborn as a Data Analyst, passionate for new technologies, data analysis and automation. 
        </p>
        <p>
        With a strong foundation in engineering principles, I have quickly adapted to the complexities of working with vast datasets, mastering the latest tools and adapting my skills to the always evolving Big Data field.
        </p>
        <p>
        Committed to continuous learning and staying up-to-date with industry trends, I am enthusiastic about leveraging data to unlock hidden opportunities and optimize business processes.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>


    </section>
  )
}

export default About