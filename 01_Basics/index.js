gsap.to("#box1", {
  x: 600,
  duration: 3,
  delay: 1,
  rotate: 360,
  scale: 0.7,
  backgroundColor: "white",
  borderRadius: "30%",
});
gsap.to("#box2", {
  x: 600,
  y: 100,
  duration: 3,
  delay: 1,
  rotate: 360,
  scale: 0.7,
  backgroundColor: "green",
  borderRadius: "30%",
});

gsap.from("h1", {
  opacity: 0,
  duration: 2,
  y: 30,
  delay: 1,
  stagger: 0.3,
});
