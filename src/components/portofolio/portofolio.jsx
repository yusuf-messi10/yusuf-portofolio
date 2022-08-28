import React from 'react';
import './portofolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id:1,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id:1,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id:1,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id:1,
    image:IMG5,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
  {
    id:1,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    github: 'https://github.com',
    demo: 'https://google.com',
  },
]




const portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
            <article key={id} className="portofolio__item">
            <div className="portofolio__item-image">
              <img src={image} alt={title} />
            </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
              <a href={github} className='btn'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          )
          })
        }
        </div>
    </section>
  )
}

export default portofolio