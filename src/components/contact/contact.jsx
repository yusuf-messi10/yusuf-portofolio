import emailjs from 'emailjs-com';
import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub, AiOutlineWhatsApp } from "react-icons/ai";

import { toast } from 'react-toastify';


const contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_b1ojebq",
      "template_cq1ob0o",
      e.target,
      "CBNmrc9IgQzOw-L6S"
    ) .then(res=>{
      toast.success('Your email is Sent');
      e.target.reset();
    }).catch(err);
    toast.error('Please Put The Right Email Address');
    e.target.reset();
  }

  const notify = () => toast.warning("Your Message Has Been Sent!!!", {position:"top-right", theme:"colored"});

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />

            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <AiFillGithub className="contact__option-icon" />

            <h4>Message</h4>
            <h5>Yusuf</h5>
            <a href="https://github.com/yusuf-messi10" target="_blank">
              Send A Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />

            <h4>Whatsapp</h4>
            <h5>+123-456-7890</h5>
            <a href="https://api.whatsapp.com/send?phone=+123" target="_blank">
              Send A Message
            </a>
          </article>
        </div>
        {/* ==== END OF CONTACT OPTION ==== */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Fulled Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default contact;
