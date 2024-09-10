// Good Luck! You got this 💪🏾
// Write your code here.
function calculator(num1, num2, operator) {
    let calculate;

    if (operator === "+") {
        calculate = num1 + num2;
    } else if (operator === "-") {
        calculate = num1 - num2;
    } else if (operator === "*") {
        calculate = num1 * num2;
    } else if (operator === "/") {
            calculate = num1 / num2;
    } else {
        console.log("Error: Invalid operator.");
        return;
    }


    console.log(calculate);
}

calculator(50,5,"/")
