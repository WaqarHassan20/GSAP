const main = document.getElementById("main");

const cursor = document.getElementById("cursor");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 1,
    ease: "back.out(1.5)"
  });
});

// window.addEventListener("keypress", (dets) => {
//   console.log(dets);
// });
