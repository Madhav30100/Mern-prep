//=================================
//Exercise 1: Arrow function 
//=================================

const calculateArea = (radius) => 3.14 * radius * radius;
console.log(`Area of circle with radius 5: ${calculateArea(5)}`)

//================================
//Exercise 2: Template literals
//================================

const firstName = "Kallu";
const lastName = "Kachori";
//Notice the backticks()` and ${}
console.log(`Hello, my name is, ${firstName} ${lastName}`);

//================================
//Exercise 3: Destructuring
//================================

const book = {title:"JS Basics",author:"Kallu",pages:208};
const{title,author} = book
console.log(`Book title: ${title}, Author: ${author}`);

//================================
//Exercise 4: map()
//================================

const numbers = [5,10,15];
const multiplied = numbers.map(num => num * 10);
console.log("Map result",multiplied);

//======================================
//Exercise 5: filter() + reduce() Combo
//======================================

const mixedNumbers = [55, 12, 8, 130, 44, 7, 20]

const finalSum = mixedNumbers
.filter(num => num > 10)
.reduce((acc,curr) => acc + curr, 0);

console.log("Filtered and summed Total", finalSum)
