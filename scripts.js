let prevOperand = 0;
let currOperand = 0;
let decimalActive = false;
let decimalPlaces = 0;

let numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    numberBtnClicked(btn.dataset.number);
  });
});

const decimalBtnClicked = document.getElementById("pointBtn");
decimalBtnClicked.addEventListener("click", setDecimalPoint);

const clearBtnClicked = document.getElementById("clearButton");
clearBtnClicked.addEventListener("click", clearMemory);

function numberBtnClicked(btn) {
  if (!decimalActive) {
    currOperand = currOperand * 10 + parseInt(btn);
  } else {
    decimalPlaces += 1;
    currOperand += parseInt(btn) / Math.pow(10, decimalPlaces);
  }
  updateScreen();
}

function updateScreen() {
  let screenMain = document.getElementById("screen-main");
  screenMain.textContent = currOperand.toFixed(decimalPlaces);
}

function setDecimalPoint() {
  decimalActive = true;
}

function clearMemory() {
  prevOperand = 0;
  currOperand = 0;
  decimalActive = false;
  decimalPlaces = 0;
  updateScreen();
}
