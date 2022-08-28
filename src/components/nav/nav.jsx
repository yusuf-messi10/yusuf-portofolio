import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageRoundedDetail} from 'react-icons/bi';
import {FcServices} from 'react-icons/fc';

import { useState } from 'react';

const nav = () => {

  const [activeNav, setactiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#services" onClick={() => setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FcServices /></a>
      <a href="#contact" onClick={() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageRoundedDetail /></a>
    </nav>
  )
}

export default nav