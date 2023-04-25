import React from 'react'
import './about.css'
import MEABOUT from '../../assets/me-about.png'
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
        DDL Data Definition Language: CREATE, ALTER, TRUNCATE, DROP. It is used for defining objects. DML Data Manipulation Language : INSERT, SELECT, UPDATE, DELETE. 
        It is used for manipulating data in tables
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>


    </section>
  )
}

export default About