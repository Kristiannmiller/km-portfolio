import './ContactView.css';
import React from 'react';
import headshot from '../AppAssets/headshot.jpg'
import vertHeadshot from '../AppAssets/headshot_SQ.jpg'




const ContactView = () => {
  return (
    <section data-testid="contactWrap" className="contactWrap">
      <section className="headshotWrap">
        <img className="headshot" src={headshot} alt="Kristi Miller with pixie short, rose gold hair and round glasses with greenery in the background"/>
      </section>
      <section className="vertHeadshotWrap">
        <img className="vertHeadshot" src={vertHeadshot} alt="Kristi Miller with pixie short, rose gold hair and round glasses with greenery in the background"/>
      </section>
      <article className="contactInfo">
        <h1 className="chatIntro">Let's Chat!</h1>
        <p className="workStatus">I'm currently looking for work opportunities
        <br/> in Front-End development.
        <br/><br/> Please contact me via email.</p>
        <a href="mailto:kristi.ann.miller@gmail.com">
        <h2 className="email">kristi.ann.miller@gmail.com</h2>
        </a>
      </article>
    </section>
  )
}
export default ContactView
