const main = document.getElementById("main");

const cursor = document.getElementById("cursor");

const imageDiv = document.getElementById("image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 1,
    ease: "back.out(1.5)",
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Explore more";

  gsap.to("#cursor", {
    scale: 4,
    backgroundColor: "#ffffffb6",
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";

  gsap.to("#cursor", {
    scale: 1,
    backgroundColor: "#fff",
  });
});

// window.addEventListener("keypress", (dets) => {
//   console.log(dets);
// });
