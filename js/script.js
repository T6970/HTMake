import { newCard } from "./card.js";

const pframe = document.getElementById("preview")
pframe.addEventListener("load", () => {
  pframe.srcdoc = '<!DOCTYPE html><html><head></head><body>Write here</body></html>'
  const preview = pframe.contentDocument || pframe.contentWindow.document
  preview.designMode = "on"
  const stylesheet = preview.createElement("link")
  stylesheet.rel = "stylesheet"
  stylesheet.href = "css/preview.css"
  preview.head.appendChild(stylesheet)

  const test = newCard(100, 100, 200, 300, preview)
  console.log(test)
  console.log(newCard)
})