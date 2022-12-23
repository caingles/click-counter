const counterShow = document.querySelector("#counterShow");
const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
let initialCounter = 0;

const counter = (type) => {
  if (type === "increase") {
    return 1;
  }

  if (type === "decrease") {
    return -1;
  }

  if (type === "reset") {
    return 0;
  }
};

decrease.addEventListener("click", () => {
    initialCounter += counter("decrease");
});

increase.addEventListener("click", () => {
  initialCounter += counter("increase");
});

reset.addEventListener("click", () => {
  initialCounter = counter("reset");
});
