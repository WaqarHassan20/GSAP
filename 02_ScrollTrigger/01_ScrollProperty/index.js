// const timeline = gsap.timeline(); cannot use here as it runs the animation in the order we write the code.
// But we want to run the animation when the user scrolls down the page. And we don't know when the user will scroll down the page.
// So we will use the ScrollTrigger.

gsap.from("#page1 #box", {
  scale: 0,
  duration: 1.5,
  delay: 0.5,
  rotate: 240,
});
gsap.from("#page2 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 70%",
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: "#page3 #box",
});
