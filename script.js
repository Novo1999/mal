import { malCodes } from "./malCodes.js";
import { algoCodes } from "./algoCodes.js";

const list = document.querySelectorAll(".list-item");
const content = document.querySelector(".content");
const code = document.getElementById("code");
const cross = document.querySelector(".cross");
const heading = document.querySelector(".heading");
const container = document.querySelector(".container");
const change = document.querySelector(".changeBtn");
const change2 = document.querySelector(".changeBtn2");
const flex = document.querySelector(".flex");
const flex2 = document.querySelector(".flex-2");

change.addEventListener("click", () => {
  heading.innerHTML = "Algorithm Codes";
  flex.classList.add("content-change");
  flex2.classList.remove("content-change");
});
change2.addEventListener("click", () => {
  heading.innerHTML = "Microprocessor Codes";
  flex2.classList.add("content-change");
  flex.classList.remove("content-change");
});

list.forEach((item) =>
  item.addEventListener("click", (e) => {
    content.style.display = "block";
    target("odd", e);
    target("y", e);
    target("lower", e);
    target("upper", e);
    target("add", e);
    target("smaller", e);
    target("largest", e);
    target("average", e);
    target("factorial", e);
    target("ascend", e);
    target("reverse", e);
    target("macro", e);
    target("lowerUpper", e);
    // Algo
    target2("Binary", e);
    target2("maxmin", e);
    target2("measureBubbleQuick", e);
    target2("fractionalKnapsack", e);
    target2("knapsack01", e);
    target2("prim", e);
    target2("singleSourceShortest", e);
    target2("dynamicAllPairShortest", e);
    target2("nQueen", e);
    target2("coloring", e);
    target2("towerOfHanoi", e);
  })
);

cross.addEventListener("click", () => {
  content.style.display = "none";
});
function target(className, e) {
  if (e.target.classList.contains(className)) {
    code.value = malCodes[className];
  }
}
function target2(className, e) {
  if (e.target.classList.contains(className)) {
    code.value = algoCodes[className];
  }
}
