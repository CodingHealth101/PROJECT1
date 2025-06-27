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
    return max;
} 

console.log("Maximum number in the array is: " + maxOfArray(numbers)); // Output: Maximum number in the array is: 474

// object
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'black',
    start: function() {
        console.log('Car started');
    },
    stop: function() {
        console.log('Car stopped');
    },
    speed: function() {
        console.log('Car is moving at 60 mph');
    }
};
console.log("Car make: " + car.make); // Output: Car make: Toyota
console.log("Car model: " + car.model); // Output: Car model: Camry
car.start(); // Output: Car started
console.log("function call: " + car.speed()); // Output: Car is moving at 60 mph
car.stop(); // Output: Car stopped
car.speed(); // Output: Car is moving at 60 mph

// more Arrays. 

let fruits = ['cherry', 'date', 'elderberry'];
fruits.push('fig'); // Add 'fig' to the end
fruits.pop(); // Remove the last element ('fig')
fruits.shift(); // Remove the first element ('cherry')
fruits.unshift('grape'); // Add 'grape' to the beginning
console.log(fruits)
// Output: ['grape', 'date', 'elderberry']

let nums = [3,4,5];
let doubled = nums.map(n => n * 2);
console.log("Doubled numbers:", doubled); // Output: Doubled numbers: [6, 8, 10]

let numbers = [4,6,8];
numbers.forEach(function(num) {
    console.log ("double:" + num  + (num * 2));

}); // Output: double:4 8, double:6 12, double:8 16  

// objects
let Bike = {
    brand: 'Yamaha',
    model: 'YZF-R3',
    year: 2021,
    color: 'blue',
} 
console.log("Bike brand: " + Bike.brand); // Output: Bike brand: Yamaha
console.log("Bike model: " + Bike.model); // Output: Bike model: YZF-R3
console.log("Bike year: " + Bike.year); // Output: Bike year: 2021
console.log("Bike color: " + Bike.color); // Output: Bike color: blue