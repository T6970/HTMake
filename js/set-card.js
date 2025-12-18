/**
 * Creates a card and appends it to preview.
 * @param {number} x X position of the card
 * @param {number} y Y position of the card
 * @param {number} width Width of the card
 * @param {number} height Height of the card
 * @returns {HTMLDivElement} The created card element
 */

export const newCard = (x, y, width, height) => {
  const card = document.createElement("div")
  card.className = "card"
  card.style.position = "absolute"
  card.style.left = `${x}px`
  card.style.top = `${y}px`
  card.style.width = `${width}px`
  card.style.height = `${height}px`
  preview.body.appendChild(card)
  return card
}