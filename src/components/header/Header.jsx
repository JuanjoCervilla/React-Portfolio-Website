import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Juan José CERVILLA</h1>
        <h3 className='text-light'>Data Analyst</h3>
        <CTA />
        <HeaderSocial />
      
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header