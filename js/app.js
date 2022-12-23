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

counterShow.textContent = initialCounter;

decrease.addEventListener("click", () => {
  initialCounter += counter("decrease");
  counterShow.textContent = initialCounter;
});

increase.addEventListener("click", () => {
  initialCounter += counter("increase");
  counterShow.textContent = initialCounter;
});

reset.addEventListener("click", () => {
  initialCounter = counter("reset");
  counterShow.textContent = initialCounter;
});
