import React from 'react';
import './services.css';
import { BsCheck } from 'react-icons/bs';

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Service</h2>

      <div className="container services__container">
       <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </ul>
       </article>

       {/* ===================== UI/UX ====================== */}


       <article className="service">
        <div className="service__head">
          <h3>Web Developement</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </ul>
       </article>
       {/* ===================== WEB DEVELOPMENT ==================*/}

       <article className="service">
        <div className="service__head">
          <h3>UContent creation</h3>
        </div>

        <ul className='service__list'>
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <li><BsCheck className='service__list-icon' /></li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </ul>
       </article>

      </div>
    </section>
  )
}

export default services