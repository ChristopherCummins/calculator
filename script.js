function add (a, b) {
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
            add(a,b);
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

const integers = document.getElementsByClassName("integer");

for (i = 0; i < integers.length; i++) {
    integers[i].addEventListener("click", displayValue);
}

function displayValue (e) {
    let fired_button = $(this).val();
    displayWindow.value += fired_button;
}

