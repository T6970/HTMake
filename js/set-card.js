/**
 * Sets size of DOM element.
 * @param {*} el A DOM element.
 * @param {*} top Amount of pixels between top of element and screen edge
 * @param {*} bottom Amount of pixels between bottom of element and screen edge
 * @param {*} left Amount of pixels between left of element and screen edge
 * @param {*} right Amount of pixels between right of element and screen edge
 */
export const setCard = (el, top, bottom, left, right) => {
  el.style.top    = `${top}px`   ;
  el.style.bottom = `${bottom}px`;
  el.style.left   = `${left}px`  ;
  el.style.right  = `${right}px` ;
}