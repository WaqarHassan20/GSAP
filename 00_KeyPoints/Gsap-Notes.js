// ============================= //
// ============================= //
// ============================= //

// if we give the parent the position relative then the child will be in the control of parent   //

gsap.to("#page2 h1", {
  // To make the animation repeat unlimited time , we always use the repeat and yoyo property together.
  yoyo: ture, // or we can give any numeric value too
  repeat: -1, // -1 will make it unlimited time to animate the given effect

  backgroundColor: "blue", // Change background

  height: "150px", // Increase height

  rotation: 360, // Full rotation

  width: "150px", // Increase width

  x: 150, // Move right

  y: 100, // Move down

  scale: 1.5, // Scale up

  opacity: 0.5, // Fade

  duration: 2, // Animation duration

  transform: "translateX(-150%)", // Move left

  transform: "translateY(-150%)", // Move up

  scrollTrigger: {
    trigger: "#page2",

    scroller: "body",

    markers: true,

    start: "top 0%",

    end: "top -150%",

    scrub: 2, // Scrubbing speed

    pin: true, // Pin the element to the top
  },
});

// ============================= //
// ============================= //
// ============================= //

// Animation on the SVG path
gsap.to("svg path", {
  attr: { d: finalPath },

  duration: 2,

  ease: "elastic.out(1, 0.2)",
});

// ============================= //
// ============================= //
// ============================= //

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

    // Scrub make the limits for the start and end trigger values to animate within the start and end values
    // For any number value it will give the animation relaxation of the given value to start and end the animations.
    // For true value it will tightly bound the animation within the limits.
    // scrub: true
  },
});
