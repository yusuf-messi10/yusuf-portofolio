import React from 'react';
import "./about.css"
import ME from '../../assets/me-about.jpg'
import { FaAward, FaFolderOpen } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt=" About Image " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icons' />
              <h5>Clients</h5>
              <small>300+ clients WorldWide</small>
            </article>

            <article className='about__card'>
              <FaFolderOpen className='about__icons' />
              <h5>Projects</h5>
              <small>80+ projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse eos dolore neque rem ducimus! Minus, dicta quam saepe commodi eum non ex, est quod tempora, placeat reiciendis amet quae?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About