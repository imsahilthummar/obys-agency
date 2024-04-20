let tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5
})
tl.from("#line-part1", {
  opacity: 0,
  onStart: function () {
    let h5text = document.querySelector("#line1-part1 h5");
    let grow = 0
    let intervalId = setInterval(function () {
      if (grow < 100) {
        grow++;
        console.log(grow);
        h5text.innerHTML = grow;
      } else {
        clearInterval(intervalId);
      }
    }, 30);
  }
})
tl.to(".line h2", {
  animationName: "textAnime",
  opacity: 1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3
})
tl.from("#page1", {
  y: 1600,
  opacity: 0,
  delay: 0.2,
  duration: 0.5,
  ease: Power4
})
tl.to("#loader", {
  display: "none"
})