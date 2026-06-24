// // let a = 0;
// // function outer() {
// //     let b = 1;
// //     function inner() {
// //         let c = 2;
// //         console.log(a); // Accessing variable from global scope
// //         console.log(b); // Accessing variable from outer function scope
// //         console.log(c); // Accessing variable from inner function scope
// //     }
// //     inner();
// // }
// // outer();

// function calculateSum() {
//     let num1 = 5;
//     let num2 = 10;
//     let sum = num1 + num2;
//     console.log("The sum is: " + sum);
// }

//class
class student {
    name  = "abhi1";
    age = 20;
    
    study() {
        console.log(this.name + " is studying.");
    }
}
let s1 = new student();
s1.study();
console.log(s1.name);
console.log(s1.age);
