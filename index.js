
//write code to find even number in the array

function findEvenNumbers(arr) {
    const evenNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = findEvenNumbers(numbers);

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]