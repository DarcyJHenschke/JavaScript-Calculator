// gettting the buttons and both screen elements
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".button");

// giving each button functionality when clicked
buttons.forEach((button) => {
    button.addEventListener("click", evaluate);
});

// this will be used to count the number of decimals in the output screen
let decimalCounter = 0;

function evaluate() {
    // (this) refers to the button being clicked hence the inner text of the button be clicked is targeted here
    let buttonText = this.innerText;

    console.log(buttonText);
    // this clears the output screen completely and returns zero on the result screen when 'C' is clicked
    if (buttonText === "C") {
        output.innerText = "";
        result.innerText = "0";
        decimalCounter = 0;
        return;
    }
    // increments decimal counter each time decimal button is pressed
    if (buttonText === ".") {
        decimalCounter++;
    }
    console.log(decimalCounter);
    // this will prevent numbers from containing multiple decimals by first checking if if there is a decimal already present
    if (buttonText === "." && decimalCounter > 1) {
        return;
    }

    // resets decimal counter to zero when an operator is clicked
    if (
        buttonText === "x" ||
        buttonText === "÷" ||
        buttonText === "÷" ||
        buttonText === "-"
    ) {
        output.textContent += buttonText;
        decimalCounter = 0;
        return;
    }

    // when '=' is clicked it calls upon the current string in the output screen to run through the expr function listed below
    if (buttonText === "=") {
        decimalCounter = 0;
        if (output.innerText.length <= 12)
            result.innerText = expr(output.innerHTML);

        if (output.innerText.length > 12) {
            result.innerText = expr(output.innerHTML).toExponential(4);
        }

        // concatenates a string of numbers and operators together when any button besides 'C' or '=' is  presed
    } else {
        output.textContent += buttonText;
        return;
    }
}

function expr(expr) {
    // variable that defines an array of characters of string provided
    let chars = expr.split("");
    // defines an empty array which will hold the numbers from the string
    let n = [],
        // defines the array which will hold the operators
        op = [],
        index = 0,
        oplast = true;

    n[index] = "";

    // This loop essentially seperates the numbers and operators from the chars array into two seperate arrays
    for (let i = 0; i < chars.length; i++) {
        // if the character is not a number or decimal it is pushed into the op array
        if (isNaN(parseInt(chars[i])) && chars[i] !== "." && !oplast) {
            op[index] = chars[i];
            index++;
            n[index] = "";
            oplast = true;

            // if the character is number it is pushed into the number array
        } else {
            n[index] += chars[i];
            oplast = false;
        }
    }

    // this calculates the expression by looping through both the number and operator arrays
    // the expr is the inital number in the number array and num is every number after this intial number
    expr = parseFloat(n[0]);
    for (let i = 0; i < op.length; i++) {
        let num = parseFloat(n[i + 1]);
        switch (op[i]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "x":
                expr = expr * num;
                break;
            case "÷":
                expr = expr / num;
                break;
        }
    }
    // returns answer to a maximum of 4 decimal places and removes trailing zeros if number is an integer

    return parseFloat(expr.toFixed(4));
}
