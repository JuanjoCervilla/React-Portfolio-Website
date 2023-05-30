import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* No he puesto --> target = '_blank' */}
        <a href='https://www.linkedin.com/in/juan-cervilla/' ><BsLinkedin/></a> 
        <a href='https://github.com/JuanjoCervilla' ><FaGithub/></a>
        {/* <a href='https://github.com' target = '_blank'><FaGithub/></a>  */}
    </div>
  )
}

export default HeaderSocials