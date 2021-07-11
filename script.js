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
    b = displayWindow.value;
    console.log(b);
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
    operator = this.value;
    console.log(operator);
    a = displayWindow.value;
    clear();
    console.log(a);
}