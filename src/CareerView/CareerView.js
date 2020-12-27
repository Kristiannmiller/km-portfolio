import './CareerView.css';
import record from '../AppAssets/record.jpg'
import bear from '../AppAssets/bear.JPG'
import React from 'react';

const CareerView = () => {
  return (
    <section data-testid="careerWrap" className="workWrap">
      <article className="introWrap">
        <h1 data-testid="workIntro" className="bigIntro" id="workIntro">Kristi is a creatively driven front-end engineer based in Denver. Currently looking to join an innovative and visionary team.</h1>
        <h2 title="scroll down for more" className="scrollPrompt">FIND OUT MORE</h2>
        <h2 className="animated bounce">↓</h2>
      </article>
      <section className="cardWrap" style={{backgroundImage: 'url(' + record + ')' }}>
        <article className="card" id="careerCard">
        <h1 className="careerCardTitle">Career Vision</h1>
        <section className="quoteWrap">
          <h2 data-testid="visionText" className="quoteText">
          <span style={{color: '#9c5280', fontFamily: "'Palanquin', sans-serif", opacity: '60%'}}>{`" `}</span>I will find a job as a developer that gives me the opportunity to
          <span style={{color: '#9c5280', fontWeight: 'bold'}}>{` create meaningful work`}</span> while keeping me comfortable financially, joyful socially, and active creatively. <br/><br/>Ideally I would like to work on an application whose
          <span style={{color: '#9c5280', fontWeight: 'bold'}}>{` subject matter sparks an interest for me`}</span>, and I am prepared to work in either a group or solo setting.
          <span style={{color: '#9c5280', fontFamily: "'Palanquin', sans-serif", opacity: '60%'}}>{` "`}</span></h2>
        </section>
        </article>
      </section>
      <section className="cardWrap">
        <article className="card" id="careerCard">
        <h1 className="careerCardTitle">Work History</h1>
          <article data-testid="jobWrap" className="jobWrap">
          <article className="jobBox">
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
        </article>
      </section>
      <section className="cardWrap" style={{backgroundImage: 'url(' + bear + ')' }}>
        <article className="card" id="quoteCard">
        <h1 className="careerCardTitle">Career Story</h1>
          <article className="quoteWrap">
            <h2 data-testid="whyText" className="storyText">As March 2020 rolled into my life I found myself in a similar situation to millions of other people in the world. My business was falling apart at the seams, I had no marketable skills fit for an economic disaster in the midst of a global pandemic, and I was terrified of the outside world.
            <br/><br/>I was in quarantine a little before the rest of America had caught on. I had attended a baby shower in early March where a suspected covid-19 positive guest had been in attendance. Virtual happy hours, social distancing, and non-contact food deliveries were a step into the future, and my dog was my only roommate at the time. I buried myself in my product photography work trying to keep my business afloat.
            <br/><br/>Inevitably, being a small business in a global pandemic just wasn’t working out and I found myself at a life-altering crossroads. I had been a photographer my entire life. I’d never known anything else. However, what should have been a terrifying reality actually felt more like a relief. My life’s passion had grown into a burden and I had been too busy to notice. The world slowed down around me, forcing me to take a closer look at my career path and my life.
            <br/><br/>Suddenly, a world of possibilities was open for me. It dawned on me that I had a rare opportunity to change my life while the world was in slow motion.  The next day I began the enrollment process for an intensive 9 month software development bootcamp. While the world slowed down around me I felt the excitement of the unknown grow within me. I sought to make 2020 a year that would change my trajectory, bring back my passion for images, and build my confidence in ways I never thought possible.
            <br/><br/>While being in a global pandemic has ultimately not been ideal, I don’t hate what it’s done for my perspective on life and my career. I’ve let my camera gather a little dust for the first time in ten years. I look forward to picking up my camera again soon with the passion I once lost, but most of all I look forward to expanding on another passion I never would have found if the world around me hadn’t come to a crashing halt. I graduate from Turing School of Software and Design in January 2021, ready to begin a new career and a new chapter as a software developer.
            </h2>
          </article>
        </article>
      </section>
    </section>
  )
}
export default CareerView
