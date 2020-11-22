import './CareerView.css';
import React from 'react';

const CareerView = () => {
  return (
    <section className="careerWrap">
      <article className="introWrap">
        <h1 className="bigIntro" id="workIntro">I am a creative front-end developer based in Denver. Currently looking to join an innovative and visionary team.</h1>
        <h2 className="scrollPrompt">FIND OUT MORE ↓</h2>
      </article>
      <section className="cardWrap">
        <article className="card">
        <h1 className="cardTitle">Work History</h1>
          <article className="jobWrap">
          <section className="job">
            <h2 className="company">Turing School</h2>
            <h2 className="position">Student</h2>
            <h2 className="position">May. 2020 - present</h2>
            <p className="jobDes">Full time student studying front-end engineering. Learning requirements include Vanilla JavaScript, complex problem solving, CSS and design, UI/UX, React, Webpack, Node.js, Object Oriented Programming, Test Driven Development, GitHub workflow, and HTML. Upcoming graduation in January 2021.</p>
          </section>
          <section className="job">
            <h2 className="company">KAMera Photojournalism</h2>
            <h2 className="position">Owner // Photographer</h2>
            <h2 className="position">Feb. 2016 - present</h2>
            <p className="jobDes">Running day-to-day business tasks while also shooting on location and in studio. Shoots include
weddings, portraits, headshots, food/drink, and products. Post production work includes organizing
image libraries, keywording, and Photoshop touch-up work. Day-to-day includes customer
relations, Instagram scheduling, photoshoot planning and storyboarding, and bookkeeping.</p>
          </section>
          <section className="job">
            <h2 className="company">Food Service Warehouse</h2>
            <h2 className="position">Lead Photographer</h2>
            <h2 className="position">Feb. 2012 - Feb. 2016</h2>
            <p className="jobDes">Began in the marketing department as a Digital Media Photo Editor and worked my way up to Lead
Photographer. My role included overseeing the photographic vision of the company, supervising
photographers and editors, time management, planning marketing campaigns, and creating
procedures in order to keep a library of over 200,000 product photos organized and searchable.</p>
          </section>
          <section className="job">
            <h2 className="company">SteriTec Products</h2>
            <h2 className="position">Marketing Assistant</h2>
            <h2 className="position">Oct. 2010 - Feb. 2012</h2>
            <p className="jobDes">Began as a receptionist and created a new position over time within the marketing department. The new position included document and advertisement design,
instructional video production and filming, client research, customer service, product photography, and website maintenance.</p>
          </section>
          </article>
        </article>
      </section>
    </section>
  )
}
export default CareerView
