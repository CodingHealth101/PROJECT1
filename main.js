let numbers =[1, 7, 50, 25, 6, 7];

let found = numbers.find(function(num){
    return num > 10;
});
console.log("first number greater than 10 :", found); // Output: 50

// filter method
let filteredNumbers = numbers.filter(function(num) {
    return num > 10;
});

let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
fruits. push('fig');
fruits. pop();
fruits.shift();
fruits.unshift('grape');
fruits.unshift('grape');
console.log("fruits array after modifications:", fruits); // Output: ['grape', 'banana', 'cherry', 'date']

let numbers = [1, 2, 3, 474, 59, 36, 7, 8, 9, 10]; 

function maxOfArray(numbers)
{
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log("Maximum number in the array is: " + maxOfArray(numbers)); // Output: Maximum number in the array is: 474
} 
