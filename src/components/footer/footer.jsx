import React from 'react';
import './footer.css';
import { AiOutlineGithub, AiFillDribbbleCircle } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yusuf</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portofolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com"><AiOutlineGithub /></a>
        <a href="https://dribble.com"><AiFillDribbbleCircle /></a>
        <a href="https://pinterest.com"><BsPinterest /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yusuf ProX. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer