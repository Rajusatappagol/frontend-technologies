let stu_info = [102, "John", "Smith", 25, "john.smith@example.com"];
// Accessing elements
console.log(stu_info[0]);
console.log(stu_info[1]);
console.log(stu_info[2]);
console.log(stu_info[3]);
console.log(stu_info[4]);

//Array Constructor
let arr = new Array(5); // Creates an array of length 5
console.log(arr); // Output: 5

arr.pop(); // Removes the last element
console.log(arr); // Output: 4
arr.push(10); // Adds an element to the end of the array
console.log(arr); // Output: 5, 10
arr.unshift(20); // Adds an element to the beginning of the array
console.log(arr); // Output: 20, 5, 10
arr.shift();    
console.log(arr); // Output: 5, 10

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // Output: ["Apple", "Cherry"]
