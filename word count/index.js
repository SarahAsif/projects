const textareaEl = document.querySelector("#textarea");
const wordCounterEl = document.querySelector("#total-counter");
const remainingCounterEl = document.querySelector("#remaining-counter");

// Get the value of textarea
// and calculate the total word
const getTotalWord = () => {
  let text = textareaEl.value;
  let totalWord = text.split(" ").length;

  return text === " " ? 0 : totalWord;
};

// Update the word counter element
const setWordCounter = (element, value) => {
  element.textContent = value;
};

// Fire this function when the user is typing
textareaEl.addEventListener("keyup", () => {
  let totalWord = getTotalWord(textareaEl);
  setWordCounter(wordCounterEl, totalWord);
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - totalWord;
});
