/* function add (a, b) {
    total = a + b;
    console.log(total);

}

function subtract (a, b) {
    total = a - b;
    console.log(total);

}

function multiply (a, b) {
    total = a * b;
    console.log(total);

}

function divide (a, b) {
    total = (a / b);
    console.log(total);

}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            add(a, b);
            break;
        case "-":
            subtract(a,b);
            break;
        case "x":
            multiply(a,b);
            break;
        case "/":
            divide(a,b);
            break;
    }

}


const displayWindow = document.getElementById("calculatorWindow");

const allClear = document.querySelector("[value='clear']");
allClear.addEventListener("click", clear);

const backSpace = document.querySelector("[value='backspace']");
backSpace.addEventListener("click", backSpaceOne);

const changeSign = document.querySelector("[value='changeSign']");
changeSign.addEventListener("click", change);

const equals = document.querySelector("[value='=']");
equals.addEventListener("click", operate);

const added = document.querySelector("[value='+']");
added.addEventListener("click", setOperator);

const subtracted = document.querySelector("[value='-']");
subtracted.addEventListener("click", setOperator);

const divided = document.querySelector("[value='/']");
divided.addEventListener("click", setOperator);

const multiplied = document.querySelector("[value='x']");
multiplied.addEventListener("click", setOperator);

const integers = document.getElementsByClassName("integer");
for (i = 0; i < integers.length; i++) {
    integers[i].addEventListener("click", displayValue);
}

function displayValue (e) {
    let fired_button = this.value;
    displayAsArray = Array.from(displayWindow.value);

    if (displayWindow.value === "0") {
        displayWindow.value = fired_button;
    } 
    
    else if (displayAsArray.length >= 9) {
        displayWindow.value = displayWindow.value;
    }

    else {
    displayWindow.value += fired_button;
    }
}

function clear (e) {
    displayWindow.value = "0";
}

function backSpaceOne(e) {
    let newdisplayWindow = displayWindow.value.slice(0, -1);
    displayWindow.value = newdisplayWindow;
}

function change(e) {
    displayWindow.value = displayWindow.value * -1;
}

function setOperator(e) {
    let operator = this.value;
    console.log(operator);
    let firstNumber = displayWindow.value;
    clear();
    console.log(firstNumber);
    return operator;
} */

const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector(".calculatorKeys")
const display = document.querySelector('.calculatorWindow');

keys.addEventListener("click", e => {
 if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNumber = display.textContent;
    const previousKeyType = calculator.dataset.previousKeyType;
    if (!action) {
        calculator.dataset.previousKeyType = "number"
        if (displayedNumber === "0" || previousKeyType === "operator" || previousKeyType === "calculate") {
            display.textContent = keyContent;
        } else if (previousKeyType === "number") {
            display.textContent = displayedNumber + keyContent;

        }
      }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
        calculator.dataset.previousKeyType = "operator"
        calculator.dataset.firstValue = displayedNumber;
        calculator.dataset.operator = action;
    }
    if (action === 'decimal') {
        if (!displayedNumber.includes('.')) {
          display.textContent = displayedNumber + '.'
        } else if (previousKeyType === "operator") {
          display.textContent = "0."
        }
      calculator.dataset.previousKeyType = 'decimal'
      }
    if (action === 'clear') {
        calculator.dataset.previousKeyType = "clear";
        display.textContent = "0";
    }
    if (action === 'backspace') {
        calculator.dataset.previousKeyType = "backspace";
        let newDisplay = display.textContent.slice(0,-1);
        display.textContent = newDisplay;
    }
    if (action === 'changeSign') {
        calculator.dataset.previousKeyType = "changeSign";
        let newDisplay = parseFloat (display.textContent) * ("-1");
        display.textContent = newDisplay;
    }

    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNumber;
        display.textContent = calculate(firstValue, operator, secondValue);
        calculator.dataset.previousKeyType = "calculate";
    }
 }
})

const calculate = (n1, operator, n2) => {
    let result = "";
    if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === "subtract") {
        result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === "multiply") {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === "divide") {
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result;
}
