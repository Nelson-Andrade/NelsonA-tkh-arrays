// Part 1
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); 

console.log(fruits.length); 

// Part 2: Adding and Removing Elements
fruits.push("orange");
console.log(fruits); 

// Using pop
let removedElement = fruits.pop();
console.log(fruits); 
console.log(removedElement);

fruits.push("grape", "kiwi");
console.log(fruits);

let poppedFruit = fruits.pop();
console.log(fruits); 
console.log(fruits.length); 

// Part 3: Looping Through Arrays
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].toUpperCase());
}

// Counting Specific Items (How many times "apple" appears)
let appleCount = 0;
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
        appleCount++;
    }
}
console.log(appleCount);

// Part 4
let cart = [];
cart.push("apple", "banana", "cherry");
console.log(cart); 

// Remove the last item
let removedItem = cart.pop();
console.log(cart); // ["apple", "banana"]
console.log(cart.length); // 2

// Reverse the Order (Without reverse method)
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers.push(numbers[i]);
}
console.log(reversedNumbers); 

// Part 5: Conditional Statements with Arrays
let array1 = ["a", "b", "c", "d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("Array1 is longer.");
} else if (array1.length < array2.length) {
    console.log("Array2 is longer.");
} else {
    console.log("Both arrays are of the same length.");
}

// Part 6: Print Even Indexed Elements
const array = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) { 
        console.log(array[i]);
    }
}

// Part 7: Push Challenge: Nested Loops
let students = ["Alice", "Bob", "Charlie"];
let subjects = ["Math", "Science"];

for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
        console.log(students[i] + " - " + subjects[j]);
    }
}
