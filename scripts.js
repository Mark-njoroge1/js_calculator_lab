const calculationHistory = [];

function addToHistory(num1, num2, operator, result) {
    const calculationObject = {
        operands: [num1, num2],
        operator: operator,
        result: result
    };
    calculationHistory.push(calculationObject);
}

function add(n1, n2) {
    const res = n1 + n2;
    addToHistory(n1, n2, '+', res);
    return res;
}

function subtract(n1, n2) {
    const res = n1 - n2;
    addToHistory(n1, n2, '-', res);
    return res;
}

function multiply(n1, n2) {
    const res = n1 * n2;
    addToHistory(n1, n2, '*', res);
    return res;
}

function divide(n1, n2) {
    if (n2 === 0) return "Error: Cannot divide by zero";
    const res = n1 / n2;
    addToHistory(n1, n2, '/', res);
    return res;
}

function displayHistory() {
    if (calculationHistory.length === 0) {
        console.log("No calculations found in history.");
    } else {
        console.log("--- Calculation History ---");
    }
}