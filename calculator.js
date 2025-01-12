function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    let result;
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
                break;
            case "%":
                result = num1 % num2;
                break;
            case "^":
                result = Math.pow(num1, num2);
                break;
            default:
                result = "Invalid operation";
        }

    document.getElementById("result").innerText = `Result: ${result}`;
}
function clearAll() {
    document.getElementById("num1").value = ""; 
    document.getElementById("num2").value = ""; 
    document.getElementById("result").innerText = "";
}