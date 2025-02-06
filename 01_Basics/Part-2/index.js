const navbarTimeLine = gsap.timeline();

navbarTimeLine.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1.5,
});

navbarTimeLine.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
});

navbarTimeLine.from("h1", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 3,
});
