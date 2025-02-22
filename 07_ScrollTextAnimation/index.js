window.addEventListener("wheel", (dets) => {
  if (dets.deltaY > 0) {
    movingStraight();
  } else {
    movingBackward();
  }
});

function movingStraight() {
  gsap.to(".marque", {
    transform: "translateX(-200%)",
    duration: 3,
    repeat: -1,
    ease: "none",
  });

  gsap.to(".marque img", {
    rotate: 180,
  });
}

function movingBackward() {
  gsap.to(".marque", {
    transform: "translateX(0)",
    duration: 3,
    ease: "none",
    repeat: -1,
  });

  gsap.to(".marque img", {
    rotate: 0,
  });
}
