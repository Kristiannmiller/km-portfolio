import './CareerView.css';
import record from '../AppAssets/record.jpg'
import bear from '../AppAssets/bear.JPG'
import React from 'react';

const CareerView = () => {
  return (
    <section data-testid="careerWrap" className="careerWrap">
      <article className="introWrap">
        <h1 data-testid="workIntro" className="bigIntro" id="workIntro">Kristi is a creatively driven front-end engineer based in Denver. Currently looking to join an innovative and visionary team.</h1>
        <h2 title="scroll down for more" className="scrollPrompt">FIND OUT MORE</h2>
        <h2 className="animated bounce">↓</h2>
      </article>
      <section className="cardWrap" style={{backgroundImage: 'url(' + record + ')' }}>
        <article className="card" id="quoteCard">
        <h1 className="cardTitle">Career Vision</h1>
        <h2 data-testid="visionText" className="quoteText">"I will find a job as a developer that gives me the opportunity to create meaningful work while keeping me comfortable financially, joyful socially, and active creatively. <br/><br/>Ideally I would like to work on an application whose subject matter sparks an interest for me, and I am prepared to work in either a group or solo setting."</h2>
        </article>
      </section>
      <section className="cardWrap">
        <article className="card" id="quoteCard">
        <h1 className="workTitle">Work History</h1>
          <article data-testid="jobWrap" className="jobWrap">
          <section className="job">
            <h2 className="company">Turing School</h2>
            <h2 className="position">Student :: May. 2020 - present</h2>
            <p className="jobDes">Full time student studying front-end engineering. Learning requirements include Vanilla JavaScript, complex problem solving, CSS and design, UI/UX, React, Redux, Webpack, Node.js, Object Oriented Programming, Test Driven Development, GitHub workflow, and HTML. Upcoming graduate set to complete coursework in January 2021.</p>
          </section>
          <section className="job">
            <h2 className="company">KAMera Photojournalism</h2>
            <h2 className="position">Owner/Photographer :: Feb. 2016 - present</h2>
            <p className="jobDes">Running day-to-day business tasks while also shooting on location and in studio. Shoots include
weddings, portraits, headshots, food/drink, and products. Post production work includes organizing
image libraries, keywording, and Photoshop touch-up work. Day-to-day includes customer
relations, Instagram scheduling, photoshoot planning and storyboarding, and bookkeeping.</p>
          </section>
          <section className="job">
            <h2 className="company">Food Service Warehouse</h2>
            <h2 className="position">Lead Photographer :: Feb. 2012 - Feb. 2016</h2>
            <p className="jobDes">Began in the marketing department as a Digital Media Photo Editor and worked my way up to Lead
Photographer. My role included overseeing the photographic vision of the company, supervising
photographers and editors, time management, planning marketing campaigns, and creating
procedures in order to keep a library of over 200,000 product photos organized and searchable.</p>
          </section>
          <section className="job">
            <h2 className="company">SteriTec Products</h2>
            <h2 className="position">Marketing Assistant :: Oct. 2010 - Feb. 2012</h2>
            <p className="jobDes">Began as a receptionist and created a new position over time within the marketing department. The new position included document and advertisement design,
instructional video production and filming, client research, customer service, product photography, and website maintenance.</p>
          </section>
          </article>
        </article>
      </section>
      <section className="cardWrap" style={{backgroundImage: 'url(' + bear + ')' }}>
        <article className="card" id="quoteCard">
        <h1 className="cardTitle" id="whyTitle">Why Web Development?</h1>
        <h2 data-testid="whyText" className="quoteText">I am the daughter of a logically brained, computer saavy father, and his whimsical home decorating partner. It is this mix of characteristics that gifted me with a deeprooted love for the logical details of beautiful design.
        <br/><br/>I was born with a camera in one hand a floppy disc in the other (80's babies represent). Merging my background in photography and marketing with what I have learned as a developer at Turing, I plan to help websites improve their overall appearance. <br/><br/>My change in careers from a photographer to a front-end developer is one that I plan to fill with imagery and creativity.</h2>
        </article>
      </section>
    </section>
  )
}
export default CareerView
