import React from 'react';
import './experience.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skillz I Have?</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div> 
              <h4>Html</h4>
              <small className='text-light'>On The Way to mastered</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/*==================BACK END ================  */}

        <div className="experience__backend">


        <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Not Learned</small>
              </div>
            </article>


            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience