import './PhotoView.css';
import people from '../AppAssets/people.jpg'
import product from '../AppAssets/product.jpg'
import people1 from '../AppAssets/photoSamples/people1.jpg'
import people3 from '../AppAssets/photoSamples/people3.jpg'
import people5 from '../AppAssets/photoSamples/people5.jpg'
import people7 from '../AppAssets/photoSamples/people7.jpg'
import people9 from '../AppAssets/photoSamples/people9.jpg'
import product1 from '../AppAssets/photoSamples/product1.jpg'
import product3 from '../AppAssets/photoSamples/product3.jpg'
import product5 from '../AppAssets/photoSamples/product5.jpg'
import product7 from '../AppAssets/photoSamples/product7.jpg'
import product9 from '../AppAssets/photoSamples/product9.jpg'
import {Component} from 'react';

class PhotoView extends Component {
  constructor() {
    super()
    this.state= {
      peopleArrowCount: 0,
      productArrowCount: 0
    }
  }
  handleCarouselClick = (event) => {
    if(event.target.id === "people") {
      if(event.target.className === "backArrow") {
        this.setState({peopleArrowCount: this.state.peopleArrowCount - 1})
      } else {
        this.setState({peopleArrowCount: this.state.peopleArrowCount + 1})
      }
    }
    if(event.target.id === "product") {
      if(event.target.className === "backArrow") {
        this.setState({productArrowCount: this.state.productArrowCount - 1})
      } else {
        this.setState({productArrowCount: this.state.productArrowCount + 1})
      }
    }
  }

  showCarouselContent = (carousel) => {
    const peopleText = {
      0: "The most gratifying feeling in the world is taking a beautiful photo of someone and seeing it displayed prominently in their home.",
      2: "Seeing the world through a lens is what I have done my entire working career. I see the beauty in people and products and capture that beauty in a way that means something important to someone else.",
      4: "Using camera knowledge and logic, I am able to capture the beauty of just about any subject. It was this love of the visual that made me discover a deep rooted passion for the logical.",
      6: "The ability to see people for who they are from behind a lens is something that I will never take for granted.",
      8: "My photojournalistic background makes it possible for me to bond and connect with people on an entirely new level of empathy and understanding. It's a gift that will always be a part of me.",
      10: "Click the 'Visit KAMera Photojournalism' button to see more of my photography."
    }
    const productText = {
      0: "After several years of photographing people, I stumbled upon the art of product photography. I found myself in a job working as a Photoshop editor for a team of product photographers for an e-commerce company.",
      2: "Products can either come to life or die in a single photograph.",
      4: "In the digital world, a single photo can be the determining factor of whether a product sells or doesn't sell. It was this power that sent me straight into the arms of professional product photography.",
      6: "Product photography is what launched my side business into a full-time job. After building up a client base, I was soon able to open up a studio and start shooting product photos full time.",
      8: "I know the importance of great product photography and product storytelling. I also know the importance that those photos can have on a business' brand.",
      10: "Click the 'Visit KAMera Product Stories' button to see more of my product photography."
    }
    if(this.state.[`${carousel}ArrowCount`] % 2 === 0){
      if(carousel === 'people'){
        return (
          <p id="carouselText">
          {peopleText.[this.state.[`${carousel}ArrowCount`]]}
          </p>
        )
      } else {
        return (
          <p id="carouselText">
            {productText.[this.state.[`${carousel}ArrowCount`]]}
          </p>
        )
      }
    } else {
      if(carousel === 'people') {
        if(this.state.peopleArrowCount === 1) {
          return (
            <img className="carouselPhoto" src={people1}></img>
          )
        } else if (this.state.peopleArrowCount === 3) {
          return (
            <img className="carouselPhoto" src={people3}></img>
          )
        } else if (this.state.peopleArrowCount === 5) {
          return (
            <img className="carouselPhoto" src={people5}></img>
          )
        } else if (this.state.peopleArrowCount === 7) {
          return (
            <img className="carouselPhoto" src={people7}></img>
          )
        } else if (this.state.peopleArrowCount === 9) {
          return (
            <img className="carouselPhoto" src={people9}></img>
          )
        }
      } else {
        if(this.state.productArrowCount === 1) {
          return (
            <img className="carouselPhoto" src={product1}></img>
          )
        } else if (this.state.productArrowCount === 3) {
          return (
            <img className="carouselPhoto" src={product3}></img>
          )
        } else if (this.state.productArrowCount === 5) {
          return (
            <img className="carouselPhoto" src={product5}></img>
          )
        } else if (this.state.productArrowCount === 7) {
          return (
            <img className="carouselPhoto" src={product7}></img>
          )
        } else if (this.state.productArrowCount === 9) {
          return (
            <img className="carouselPhoto" src={product9}></img>
          )
        }
      }
    }
  }
  render() {

    return (
      <section data-testid="photoWrap" className="cardWrap">
        <article className="introWrap">
          <h1 data-testid="photoIntro" className="bigIntro" id="workIntro">
            Photography and technology fit together surprisingly well.
          </h1>
          <h2 className="scrollPrompt">SEE MORE</h2>
          <h2 className="animated bounce">↓</h2>
        </article>
        <section className="cardWrap" style={{backgroundImage: 'url(' + people + ')' }}>
        <article className="card">
          <section className="projectIntro">
            <h2 className="cardTitle">People</h2>
            <a href="http://www.kam-era.com" className="projectLinks" id="photoLink">
            Visit KAMera Photojournalism
            </a>
          </section>
          <section className="infoWrap" id="photoCard">
            <section data-testid="peopleText" className="storyText" id="carousel">
              {this.state.peopleArrowCount > 0 && <div onClick={this.handleCarouselClick} className="backArrow" id="people">{`<`}</div>}
              <section className="carouselContentWrap">
                {this.showCarouselContent('people')}
              </section>
              {this.state.peopleArrowCount < 10 && <div onClick={this.handleCarouselClick} className="forwardArrow" id="people">{`>`}</div>}
            </section>
          </section>
        </article>
        </section>

        <section className="cardWrap" style={{backgroundImage: 'url(' + product + ')' }}>
        <article className="card">
          <section className="projectIntro">
            <h2 className="cardTitle">Products</h2>
            <a href="http://www.kameraproduct.com" className="projectLinks" id="photoLink">
            Visit KAMera Product Stories
            </a>
          </section>
          <section className="infoWrap" id="photoCard">
            <section data-testid="productsText" className="storyText" id="carousel">
              {this.state.productArrowCount > 0 && <div onClick={this.handleCarouselClick} className="backArrow" id="product">{`<`}</div>}
              <section className="carouselContentWrap">
                {this.showCarouselContent('product')}
              </section>
              {this.state.productArrowCount < 10 && <div onClick={this.handleCarouselClick} className="forwardArrow" id="product">{`>`}</div>}
            </section>
          </section>
        </article>
        </section>
      </section>
    )
  }
}
export default PhotoView
