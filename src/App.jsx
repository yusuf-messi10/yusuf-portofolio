import React from 'react';
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/About'
import Experience from './components/Experience/Experience'
import Services from './components/services/services'
import Portofolio from './components/portofolio/portofolio'
import Testimonials from './components/Testimonials/Testimonial'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
      </>
  )
}

export default App