let intervalId = null;

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener("click", setColor);
refs.stopBtn.addEventListener("click", removeColor);

function setColor() {
  disableBtn(refs.startBtn, true);
  intervalId = setInterval(() => {
    changeBgColor(colors[randomIntegerFromInterval(0, 5)]);
  }, 1000);
}

function removeColor() {
  clearInterval(intervalId);
  changeBgColor("");
  disableBtn(refs.startBtn, false);
}

function changeBgColor(color) {
  refs.body.style.backgroundColor = color;
}
function disableBtn(btn, bool) {
  btn.disabled = bool;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
