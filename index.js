// Import stylesheets
import './style.css';

// Example of arrays
const fruits = ['Water Melon', 'Apple', 'Mango', 'Orange'];
const temp = [45, -32, 77, 10];
const ids = ['23', '45', '12', '5'];
const favoriteFruits = ['cherries', 'Apple', 'Mango', 'Orange']; // lowercase and uppercase mixed

// 1. Sort an Array of Strings

// function to sort in ascending order
function sortArray(arr) {
  return arr.sort();
}

// function to sort in descending order
function sortDescendingArray(arr) {
  return arr.sort((a, b) => b.localeCompare(a));
}

console.log(sortArray(fruits)); // ["Apple", "Mango", "Orange", "Water Melon"]
console.log(sortArray(temp)); // [-32, 10, 45, 77]
console.log(sortArray(ids)); // Not sorted correctly: ["12", "23", "45", "5"]
console.log(sortArray(favoriteFruits)); // Wrong: ["Apple", "Mango", "Orange", "cherries"]

// sorted in descending order
console.log(sortDescendingArray(fruits)); // ["Water Melon", "Orange", "Mango", "Apple"]
console.log(sortDescendingArray(ids)); // not sorted correctly: ["5", "45", "23", "12"]
// console.log(sortDescendingArray(temp));   // Error: b.localeCompare is not a function

// 2. Case-insensitive Sort an Array of Strings

const sortCaseSensitiveArray = arr => {
  return arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

console.log(sortCaseSensitiveArray(favoriteFruits));
// ["Apple", "cherries", "Mango", "Orange"]

// sorting by case sensitive in descending order
const sortCaseDescendingArray = arr => {
  return arr.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
};

console.log(sortCaseDescendingArray(favoriteFruits));
// ["Orange", "Mango", "cherries", "Apple"]


