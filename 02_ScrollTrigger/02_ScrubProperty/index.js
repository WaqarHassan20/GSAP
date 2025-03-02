gsap.from("#page1 #box", {
  scale: 0,
  duration: 2,
  delay: 0.5,
  rotate: 360,
});

// this is the second div and page of the screen with the animation of scrolling
gsap.from("#page3 #box", {
  scale: 0,
  opacity: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page3 #box",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    scrub: 2,
    // For true value it will tightly bound the animation within the limits.
    // Scrub make the limits for the start and end trigger values to animate within the start and end values
    // For any number value it will give the animation relaxation of the given value to start and end the animations.
    // scrub: true
  },
});

gsap.from("#page2 h1", {
  opacity: 0,
  x: 500,
  duration: 2.5,
  scale: 1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
gsap.from("#page2 h2", {
  opacity: 0,
  x: -500,
  duration: 2.5,
  scale: 1,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
