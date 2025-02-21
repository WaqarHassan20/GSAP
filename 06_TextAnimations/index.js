function BreakTheString() {
  let heading = document.querySelector("h2");

  let headingText = heading.innerText;

  let splitText = headingText.split("");

  let halfValue = Math.floor(splitText.length / 2);
  console.log(halfValue);

  let clutter = "";

  splitText.forEach((el, index) => {
    if (index < halfValue) {
      clutter += `<span class="first" >${el}</span>`;
    } else {
      clutter += `<span class="last" >${el}</span>`;
    }
  });

  heading.innerHTML = clutter;

  console.log(clutter);
}

BreakTheString();

// gsap.from("h2 span", {
//   y: 100,
//   opacity: 0,
//   duration: 0.8,
//   delay: 0.5,
//   // stagger: 0.1,
//   // stagger: () => Math.random() - 0.5,
//   // stagger: -0.15, this will reverse the animations
//   // stagger: (char) => (char % 2 === 0 ? -0.5 : 0.5),
// });

gsap.from("h2 .first", {
  y: 200,
  delay: 0.8,
  opacity: 0,
  stagger: 0.12,
  duration: 0.8,
});

gsap.from("h2 .last", {
  y: 200,
  delay: 0.8,
  opacity: 0,
  stagger: -0.12,
  duration: 0.8,
});
