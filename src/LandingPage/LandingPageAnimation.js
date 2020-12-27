import gsap from 'gsap'

export const landingAnimation = () => {
  gsap.to('.landingLogo', {duration: 3, ease: "power2", opacity: "50%"})
  rapidText()
}
function rapidText() {
  let landingTl = gsap.timeline({delay: 3});
  for (var i = 1; i < 10; i++){
    landingTl.to(`#testAn${i}`, {
      duration: .25,
      display: 'inline-block',
    })
    .to(`#testAn${i}`, {
      duration: .25,
      display: 'none',
    })
  }
  landingTl.to(`#testAn10`, {
    duration: 2,
    display: 'inline-block',
    opacity: '100%',
  })
  .to('.enter', {
    duration: 1,
    display: 'inline-block'
  })
}
