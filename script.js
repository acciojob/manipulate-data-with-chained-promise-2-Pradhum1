// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbersArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);  // The initial array
        }, 3000);  // Resolve after 3 seconds
    });
}

// Function to filter out odd numbers
function filterOddNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            resolve(evenNumbers);
        }, 1000);  // Resolve after 1 second
    });
}

// Function to multiply all even numbers by 2
function multiplyEvenNumbers(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const multipliedNumbers = array.map(num => num * 2);
            resolve(multipliedNumbers);
        }, 2000);  // Resolve after 2 seconds
    });
}

// Function to update the text content of the HTML element with ID "output"
function updateOutput(text) {
    document.getElementById('output').textContent = text;
}

// Chaining the promises
getNumbersArray()
    .then((numbers) => {
        return filterOddNumbers(numbers);
    })
    .then((evenNumbers) => {
        updateOutput(`Even numbers: ${evenNumbers.join(', ')}`);
        return multiplyEvenNumbers(evenNumbers);
    })
    .then((multipliedNumbers) => {
        updateOutput(`Multiplied numbers: ${multipliedNumbers.join(', ')}`);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });