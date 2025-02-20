const headingText = document.querySelector("h2").innerText;

console.log(headingText);

const splitText = headingText.split("");

console.log(splitText);

splitText.forEach((num) => {
  console.log(num);
});
