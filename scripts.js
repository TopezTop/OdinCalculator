let prevOperand = "";
let currOperand = "";
let operator = "";
let topText = "";
let operatorPressedFlag = false; // true if operator is pressed
// let decimalPlaces = 0;
let alreadyCalculatedFlag = false;

const screenMain = document.getElementById("screen-main");
const screenTop = document.getElementById("screen-top");

let numberButtons = document.querySelectorAll("[data-number]");
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    numberBtnClicked(btn.dataset.number);
  });
});

let operatorButtons = document.querySelectorAll("[data-operator]");
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operatorBtnClicked(btn.dataset.operator);
  });
});

const decimalBtnClicked = document.getElementById("pointBtn");
decimalBtnClicked.addEventListener("click", setDecimalPoint);

const clearBtnClicked = document.getElementById("clearButton");
clearBtnClicked.addEventListener("click", clearMemory);

const deleteBtnClicked = document.getElementById("deleteButton");
deleteBtnClicked.addEventListener("click", deleteLastChar);

const equalsBtnClicked = document.getElementById("equalsBtn");
equalsBtnClicked.addEventListener("click", calculateResult);

function numberBtnClicked(btn) {
  if (currOperand.length < 60) {
    if (!operatorPressedFlag) {
      currOperand += btn;
    } else {
      currOperand = btn;
      operatorPressedFlag = false;
    }
    alreadyCalculatedFlag = false;
    updateScreen();
  }
}

function operatorBtnClicked(myOperator) {
  if (!operatorPressedFlag) {
    prevOperand = currOperand;
    operator = myOperator;
    topText = prevOperand + " " + operator;
    updateScreen();
    operatorPressedFlag = true;
    alreadyCalculatedFlag = false;
  }
}

function updateScreen() {
  screenMain.textContent = currOperand;
  screenTop.textContent = topText;
}

function setDecimalPoint() {
  if (!currOperand.includes(".")) {
    if (currOperand === "") {
      currOperand = "0.";
    } else {
      currOperand += ".";
    }
    //decimalActive = true;
    updateScreen();
  }
}

function deleteLastChar() {
  currOperand = currOperand.slice(0, -1);
  updateScreen();
}

function calculateResult() {
  if (!alreadyCalculatedFlag) {
    let result = 0;
    if (operator === "+") {
      result = parseFloat(prevOperand) + parseFloat(currOperand);
    }
    if (operator === "-") {
      result = parseFloat(prevOperand) - parseFloat(currOperand);
    }
    if (operator === "x") {
      result = parseFloat(prevOperand) * parseFloat(currOperand);
    }
    if (operator === "÷") {
      result = parseFloat(prevOperand) / parseFloat(currOperand);
    }

    topText = prevOperand + " " + operator + " " + currOperand;
    currOperand = String(result);
    updateScreen();
    alreadyCalculatedFlag = true;
  }
}

function clearMemory() {
  prevOperand = "";
  currOperand = "";
  topText = "";
  //decimalActive = false;
  updateScreen();
}
