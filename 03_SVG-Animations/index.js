let InitialPath = `M 10 100 Q 500 100 909 100`;
let finalPath = `M 10 100 Q 500 100 909 100`;

const string = document.querySelector("#string");
string.addEventListener("mousemove", (dets) => {
  InitialPath = `M 10 100 Q ${dets.x} ${dets.y} 909 100`;

  gsap.to("svg path", {
    attr: { d: InitialPath },
    duration: 0.5,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 2,
    ease: "elastic.out(1, 0.2)",
  });
});

// This format of backtick and dollar sign with braces is called template literals
// const name = "Waqar";
// console.log(`Hello, ${name}!`); // Output: Hello, Waqar!

// // ===================================== //
// // Self practiced the code of svg animation
// // ===================================== //
// let InitialPath = `M 10 100 Q 500 100 909 100`;
// let finalPath = `M 10 100 Q 500 100 909 100`;

// const string = document.querySelector("#string");
// string.addEventListener("mousemove", (dets) => {
//   InitialPath = `M 10 100 Q ${dets.x} ${dets.y} 909 100`;

//   gsap.to("svg path", {
//     attr: { d: InitialPath },
//     duration: 0.5,
//     ease: "power.out",
//   });
// });

// string.addEventListener("mouseleave", () => {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 2,
//     ease: "elastic.out(1,0.2)",
//   });
// });
