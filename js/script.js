import { tagList } from "./html-tags.js";
import { setCard } from "./set-card.js";
const toolbar = document.getElementById("toolbar");

toolbar.style.overflow = "auto"
toolbar.style.display  = "flex"
toolbar.style.flexDirection = "column"
setCard(toolbar, 20, 20, 20, 20)

tagList.tags.forEach((tag) => {
  const eachButton = document.createElement("button");
  eachButton.name = tag;
  eachButton.addEventListener("click", () => {});
  eachButton.className = "card";
  eachButton.innerText = tag;

  toolbar.appendChild(eachButton);
})