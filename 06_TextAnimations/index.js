function BreakTheString() {
  let heading = document.querySelector("h2");

  let headingText = heading.innerText;

  let splitText = headingText.split("");

  let clutter = "";

  splitText.forEach((num) => {
    clutter += `<span>${num}</span>`;
  });

  heading.innerHTML = clutter;

  console.log(clutter);
}

BreakTheString();
