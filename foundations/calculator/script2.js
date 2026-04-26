function setOutputBoxText(value) {
  const newOutputBox = document.createElement("input");
  newOutputBox.setAttribute("id", "output-box");
  newOutputBox.setAttribute("type", "text");
  newOutputBox.setAttribute("disabled", "");
  newOutputBox.setAttribute("value", value);
  const outputBox = document.querySelector("#output-box");
  outputBox.replaceWith(newOutputBox);
}

function getOutputBoxText() {
  return document.querySelector("#output-box").value;
}

function isNumber(value) {
  return !isNaN(value);
}

let result = {
  value: "",
  hasError: "",
};

const operators = ["+", "-", "/", "*"];

function isExpressionValid(expression) {
  const parts = expression.split(" ");
  if (parts.length < 3 || parts.some((p) => p.length === 0)) {
    return false;
  }

  return true;
}

function operate(expression) {
  const parts = expression.split(" ");
  const num1 = parseFloat(parts[0].trim());
  const num2 = parseFloat(parts[2].trim());
  const operator = parts[1].trim();
  if (operator === "+") {
    return { value: num1 + num2, hasError: false };
  } else if (operator === "-") {
    return { value: num1 - num2, hasError: false };
  } else if (operator === "*") {
    return { value: num1 * num2, hasError: false };
  } else if (operator === "/") {
    if (num2 !== 0) {
      return { value: num1 / num2, hasError: false };
    }

    return { value: "Cannot divide by zero", hasError: true };
  }
}

function appendNumToOutputBox(btnNum) {
  if (getOutputBoxText() === "0" || result.value !== "") {
    setOutputBoxText(btnNum.textContent);
  } else if (isNumber(getOutputBoxText()) && result.value === "") {
    setOutputBoxText(getOutputBoxText() + btnNum.textContent);
  } else if (operators.some((op) => getOutputBoxText().includes(op))) {
    setOutputBoxText(getOutputBoxText() + btnNum.textContent);
  }
}

function appendOperatorToOutputBox(btnOp) {
  if (isNumber(getOutputBoxText()) && operators.includes(btnOp.textContent)) {
    setOutputBoxText(`${getOutputBoxText()} ${btnOp.textContent} `);
  } else if (
    operators.some((op) => getOutputBoxText().includes(op)) &&
    isExpressionValid(getOutputBoxText())
  ) {
    result = operate(getOutputBoxText());
    setOutputBoxText(result.value);

    if (operators.includes(btnOp.textContent) && !result.hasError) {
      setOutputBoxText(`${getOutputBoxText()} ${btnOp.textContent} `);
    }
  }
}

function putSymbolInOutputBox(btnSymbol) {
  if (btnSymbol.textContent === ".") {
    if (result.value !== "") {
      resetCalculator();
      setOutputBoxText("0.");
    } else if (
      isNumber(getOutputBoxText()) &&
      !getOutputBoxText().includes(".")
    ) {
      setOutputBoxText(`${getOutputBoxText()}.`);
    } else if (
      operators.some((op) => getOutputBoxText().includes(op)) &&
      !getOutputBoxText().includes(".")
    ) {
      setOutputBoxText(`${getOutputBoxText()}.`);
    }
  }
}

function resetResult() {
  result = { value: "", hasError: "" };
}

function resetCalculator() {
  setOutputBoxText("0");
  resetResult();
}

function addBtnNumEventListener(btnNums) {
  for (const btnNum of btnNums) {
    btnNum.addEventListener("click", () => {
      appendNumToOutputBox(btnNum);
    });
  }
}

function addBtnOperatorEventListener(btnOps) {
  for (const btnOp of btnOps) {
    btnOp.addEventListener("click", () => {
      appendOperatorToOutputBox(btnOp);
    });
  }
}

function addBtnSymbolEventListener(btnSymbols) {
  for (const btnSymbol of btnSymbols) {
    btnSymbol.addEventListener("click", () => {
      putSymbolInOutputBox(btnSymbol);
    });
  }
}

function addBtnClearEventListener(btnClear) {
  btnClear.addEventListener("click", () => {
    resetCalculator();
  });
}

function initialize() {
  const btnNums = document.querySelectorAll(".btn-num");
  addBtnNumEventListener(btnNums);
  const btnOps = document.querySelectorAll(".btn-op");
  addBtnOperatorEventListener(btnOps);
  const btnSymbols = document.querySelectorAll(".btn-symbol");
  addBtnSymbolEventListener(btnSymbols);
  const btnClear = document.querySelector("#btn-clear");
  addBtnClearEventListener(btnClear);
  setOutputBoxText("0");
}

initialize();
