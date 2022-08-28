import React from 'react'
import {FaGithub, FaGoogle, FaDribbble }from 'react-icons/fa';


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://google.com" target='_blank'><FaGoogle /></a>
        <a href="https://github.com" target='_blank'><FaGithub /></a>
        <a href="https://dribble.com" target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials