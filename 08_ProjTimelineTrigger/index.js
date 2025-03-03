function page1Animation() {
  const timeline = gsap.timeline();

  // Self tried code for one by one differnt animations
  // timeline.from("nav h1", {
  //   x: -100,
  //   duration:0.5,
  //   delay: 1,
  //   opacity: 0,
  // });

  // timeline.from("nav h4", {
  //   y: -30,
  //   duration: 0.5,
  //   opacity: 0,
  //   stagger: 0.2,
  // });

  // timeline.from("nav button", {
  //   x: 100,
  //   duration: 0.5,
  //   opacity: 0,
  // });

  timeline.from("nav h1, nav h4, nav button", {
    y: -40,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  timeline.from(".center-part1 h1", {
    x: -200,
    opacity: 0,
    duration: 0.6,
  });

  timeline.from(".center-part1 p", {
    x: -100,
    opacity: 0,
    duration: 0.4,
  });

  timeline.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  timeline.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 1,
      x: 200,
    },
    "-=0.7"
  );

  timeline.from(".section1Bottom img", {
    y: 30,
    duration: 0.5,
    opacity: 0,
    stagger: 0.15,
  });
}

function page2Animation() {
  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers: true,
      start: "top 70%",
      end: "top -60%",
      scrub: 2,
    },
  });

  timeline2.from(".services", {
    y: -100,
    opacity: 0,
    duration: 1,
  });

  timeline2.from(
    ".line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "one"
  );
  timeline2.from(
    ".line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "one"
  );

  timeline2.from(
    ".line2.left",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "two"
  );
  timeline2.from(
    ".line2.right",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "two"
  );

  timeline2.from(
    ".line3.left",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "three"
  );
  timeline2.from(
    ".line3.right",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "three"
  );

  timeline2.from(
    ".line4.left",
    {
      x: -300,
      opacity: 0,
      duration: 3,
    },
    "four"
  );
  timeline2.from(
    ".line4.right",
    {
      x: 300,
      opacity: 0,
      duration: 3,
    },
    "four"
  );
}

page1Animation();

page2Animation();
