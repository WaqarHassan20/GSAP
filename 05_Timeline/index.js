const menuIcon = document.querySelector("#nav i");

const closeIcon = document.querySelector("#full i");

const openTimeLine = gsap.timeline();

openTimeLine.to("#full", {
  right: "0",
  duration: 0.2,
  ease: "power1.one",
});

openTimeLine.from("#full h4", {
  x: 150,
  duration: 0.5,
  stagger: 0.2,
  opacity: 0,
});

openTimeLine.from("#full i", {
  opacity: 0,
  duration: 0.2,
  stagger: 0.3,
  y: -100,
});

openTimeLine.pause();

menuIcon.addEventListener("click", () => {
  openTimeLine.play();
});

closeIcon.addEventListener("click", () => {
  openTimeLine.reverse();
});
