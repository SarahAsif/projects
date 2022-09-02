const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateText();
});
updateText();
function updateText() {
  let x = textareaEl.value.length;
  totalCounterEl.innerText = x;
  remainingCounterEl.innerText = textareaEl.getAttribute("maxLength") - x;
}
