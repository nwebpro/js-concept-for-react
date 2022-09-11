/* 
    1. How to declare a variable using let and const 
*/
const fatherName = 'Afroz Miha'; // const diye variable likle sey variable er man change kora jay na
let age = 52; // let diye variable likle sey variable er man change kora jay
age = 53;

/* 
    2. How to write a 6 basic condition like - >, <, ===, !==, <=, >=
        Multiline condition - &&, ||
*/
if(fatherName === 'afroz miha' || age === 53){
    console.log('Hello');
}else if (fatherName === 'Afroz Miha'){
    console.log('Hello', fatherName);
}else{
    console.log('Hi');
}

/* 
    3. How to write a Array
        index, length, push, pop, unshift, shift etc.
*/
const numbers = [23, 33, 45, 46, 76];

/* 
    4. How to write a Loop
        for loop, while loop, for of loop, for in loop etc.
*/
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

/* 
    5. How to write a Function
*/
function sum(num1, num2){
    const result = num1 + num2;
    return result;
}
const output = sum(25, 30);
console.log(output);

/* 
    6. How to write a Object
        3 ways to access property by name
*/
const student = {
    name: 'Ab Naeem',
    age: 23,
    movies: ['King Khan', 'Dhakar Mastan']
}
const myAge = 'age';

const first = student.age;      // Access direct by property
const second = student['age'];  // Access by property name string
const third = student[myAge];   // Access by property name in variable
