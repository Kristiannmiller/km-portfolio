import './ContactView.css';
import React from 'react';
import headshot from '../AppAssets/headshot.jpg'



const ContactView = () => {
  return (
    <section data-testid="contactWrap" className="contactWrap">
      <img className="headshot" src={headshot} alt="Kristi Miller with pixie short, rose gold hair and round glasses with greenery in the background"/>
      <article className="contactInfo">
        <h1 className="chatIntro">Let's Chat!</h1>
        <p className="workStatus">I'm currently looking for work opportunities
        <br/> in Front-End development.
        <br/><br/> Please contact me via email.</p>
        <h2 className="email">kristi.ann.miller@gmail.com</h2>
      </article>
    </section>
  )
}
export default ContactView
