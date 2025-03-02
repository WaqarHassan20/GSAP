gsap.to("#box1", {
  x: 1590,
  duration: 1.5, // how long it will take to animate the object
  delay: 1, // after how many time does the animation should start
  rotate: 360, // applies the rotations while animations
  scale: 0.7, // this ask either you want to increase or decrease the size of your object or not during animations
  backgroundColor: "white",
  borderRadius: "30%",
  repeat: -1, // how many times you want to repeat the animations applied
  yoyo: true, // if you want to reverse the whole animation after being performed
});
gsap.to("#box2", {
  x: 1590,
  y: 100,
  duration: 2,
  delay: 1,
  rotate: 360,
  scale: 0.7,
  backgroundColor: "green",
  yoyo: true,
  repeat: -1,
  borderRadius: "30%",
});

gsap.from("h1", {
  opacity: 0,
  duration: 1,
  y: 30,
  delay: 1,
  stagger: 0.3, // to get the things one by one instead of all of them at once
  repeat: -1,
  yoyo: true,
});

const tl = gsap.timeline();

tl.to("#div1", {
  x: 1590,
  yoyo: true,
  repeat: -1,
  duration: 1.5,
  delay: 1,
  scale: 0.8,
});

tl.to("#div2", {
  x: 1590,
  duration: 1.5,
  // delay: 1, because we are using the timeline function now so we dont need the dealy , it will automatically came to know when the process ends
  scale: 0.7,
  rotate: 360,
  borderRadius: "30%",
  yoyo: true,
  repeat: -1,
});

tl.to("#div3", {
  x: 1590,
  duration: 1.5,
  scale: 0.6,
  // delay: 1,
  borderRadius: "40%",
  yoyo: true,
  repeat: -1,
});
