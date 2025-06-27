let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

while (true) { 
    console.log(fruits.length); // Output: 5
    break; // Prevent infinite loop
}

// Add new Array
// []

let number = [1, 2, 3, 4, 5, 20, 35, 40, 50, 60, 70, 80, 90, 100];
let sum = 0;

for (let i = 0; i < number.length; i++) 
{
  sum = sum + number[i];
}
  console.log("sum of all numbers is: " + sum); // Output: sum of all numbers is: 505
let average = sum / number.length;
 console.log("average of all numbers is: " + average); // Output: average of all numbers is: 36.07142857142857

 function sumOfArray(numnbers) 
 {    return sumOfArray(numbers);

    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += arr[i];
    }
    console.log sum;
  }