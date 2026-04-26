function setBoxText(value) {
  const newOutputBox = document.createElement("input");
  newOutputBox.setAttribute("id", "output-box");
  newOutputBox.setAttribute("type", "text");
  newOutputBox.setAttribute("disabled", "");
  newOutputBox.setAttribute("value", value);
  const outputBox = document.querySelector("#output-box");
  outputBox.replaceWith(newOutputBox);
}

function resetCalculator() {
  outputBoxText = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  result = { value: 0, error: "" };
  setBoxText(outputBoxText);
}

let outputBoxText = "";
let num1 = 0;
let num2 = 0;
let operator = "";

// Result is like this so that
// operate() can return a consistent
// object, otherwise the case becomes
// operate() => May return number or string.
let result = {
  value: 0,
  error: "",
};

const btnNums = document.querySelectorAll(".btn-num");
for (const btnNum of btnNums) {
  btnNum.addEventListener("click", () => {
    if (outputBoxText === "0") {
      setBoxText("");
    }

    // Condition 1 is for when then is error like "Division by zero" on
    // the outputbox. In this case if the user enters a number the
    // calculator should behave as if it is starting a new calculation
    // because last calculation gave an error and it shouldn't be
    // keeping anything from last calculation.
    // Condition 2 is for when the user has successfully got a result
    // but when they press a number calculator shouldn't append the number
    // to the result, it should start a new calculation.
    if (result.error !== "" || (result.value !== 0 && operator === "")) {
      resetCalculator();
    }

    outputBoxText += btnNum.textContent;
    // If there is no operator then there is only one number
    // so it becomes num1. Else if there is an operator
    // then the user is trying to enter the second number
    // num2.
    if (operator === "") {
      num1 = Number.parseInt(outputBoxText);
    } else {
      num2 = Number.parseInt(outputBoxText.split(operator)[1].trim());
    }
    setBoxText(outputBoxText);
  });
}

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener("click", () => {
  resetCalculator();
});

function operate(num1, num2, operator) {
  if (operator === "+") {
    return { value: num1 + num2, error: "" };
  } else if (operator === "-") {
    return { value: num1 - num2, error: "" };
  } else if (operator === "*") {
    return { value: num1 * num2, error: "" };
  } else if (operator === "/") {
    if (num2 !== 0) {
      return { value: num1 / num2, error: "" };
    }

    return { value: 0, error: "Cannot divide by zero" };
  }
}

function handleFloatingPoint(btnText) {
  if (btnText === ".") {
    if (operator === "") {
      outputBoxText += ".";
    }
  }
}

const btnOps = document.querySelectorAll(".btn-op");
for (const btnOp of btnOps) {
  btnOp.addEventListener("click", () => {
    // If the operator is not set and the button pressed
    // by the user is not = then set the operator.
    // Else if button pressed is = and operator is
    // already set like 5 + 3, then evaluate the
    // expression and return the result.
    // Else if the expression is 5 + and the user
    // presses the - button then replace + with -
    // so the expression becomes 5 -
    if (operator === "" && btnOp.textContent !== "=") {
      outputBoxText += ` ${btnOp.textContent} `;
      operator = btnOp.textContent;
      setBoxText(outputBoxText);
    } else if (btnOp.textContent === "=" && operator !== "") {
      result = operate(num1, num2, operator);
      if (result.error !== "") {
        outputBoxText = result.error;
      } else {
        num1 = result.value;
        outputBoxText = result.value.toString();
        operator = "";
        num2 = 0;
      }
      setBoxText(outputBoxText);
    } else if (operator !== "" && btnOp.textContent !== "=" && num2 === "") {
      outputBoxText = `${num1} ${btnOp.textContent} `;
      operator = btnOp.textContent;
      setBoxText(outputBoxText);
    } else {
      setBoxText("0");
    }
  });
}

function initialize() {
  setBoxText("0");
}

initialize();

// TODO: Allow user to do operations on
// floating point numbers 5.332, 123123.122, etc.
// Handle rounding properly in order to keep the
// output within the outputbox.
