import './PhotoView.css';
import people from '../AppAssets/people.jpg'
import product from '../AppAssets/product.jpg'
import React from 'react';

const PhotoView = () => {
  return (
    <section className="photoWrap">
      <article className="introWrap">
        <h1 className="bigIntro" id="workIntro">Photography and technology have always gone hand-in-hand throughout my career.
        </h1>
        <h2 className="scrollPrompt">SEE MORE ↓</h2>
      </article>
      <section className="cardWrap" style={{backgroundImage: 'url(' + people + ')' }}>
        <article className="card">
          <section className="infoWrap">
            <h2 className="cardTitle">People</h2>
            <a href="http://www.kam-era.com" className="photoLinks">
              Visit KAMera Photojournalism
            </a>
            <p className="cardDes">The most gratifying feeling in the world is taking a beautiful photo of someone and seeing it displayed prominently in their home. Seeing the world through a lens is what I have done my entire working career. I see the beauty in people and products and capture that beauty in a way that means something important to someone else. Using camera knowledge and logic, I am able to capture the beauty of just about any subject. It was this love of the visual that made me discover a deep rooted passion for the logical.</p>
            <p className="cardDes">I have photographed people from nearly every angle for the vast majority of my life. The ability to see people for who they are from behind a lens is something that I will never take for granted. This ability makes it possible for me to bond and conenct with people on an entirely new level of empathy and understanding. It's a gift that will always be a part of me.</p>
          </section>
        </article>
      </section>
      <section className="cardWrap" style={{backgroundImage: 'url(' + product + ')' }}>
        <article className="card">
          <section className="infoWrap">
            <h2 className="cardTitle">Products</h2>
            <a href="http://www.kameraproduct.com" className="photoLinks">
              Visit KAMera Product Stories
            </a>
            <p className="cardDes">After several years of photographing people, I stumbled upon the art of product photography. I found myself in a job working as a Photoshop editor for a team of product photographers for an e-commerce company. Products can either come to life or die in a single photograph. In the digital world, a single photo can be the determining factor of whether a product sells or doesn't sell. It was this power that sent me straight into the arms of professional product photography.</p>
            <p className="cardDes">Product photography is what launched my side business into a full-time job. After building up a client base, I was soon able to open up a studio and start shooting product photos full time. I know the importance of great product photography and product storytelling. I also know the importance that those photos can have on a business' brand.</p>
          </section>
        </article>
      </section>
    </section>
  )
}
export default PhotoView
