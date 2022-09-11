const numbers = [23, 33, 45, 46, 76];
const student = {
    name: 'Ab Naeem',
    age: 23,
    movies: ['King Khan', 'Dhakar Mastan']
}

/* 
    1. Template String
*/
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[1]}`;

/* 
    2. Array function
*/
const getFiftyFive = () => 55; // Write a array function get the 55 
const addSixtyFive = num => num + 65; // Write a single parameter array function and sum 65
const isEven = x => x % 2 == 0; // Write a array function and check the even number
const addThree = (a, b, c) => a + b + c; // Write a multi parameter array function
const doMath = (num1, num2) => { // Write a Multiline array function
    const sum = num1 + num2;
    return sum;
}

/* 
    3. Spread Operator
*/
const newNumbers = [...numbers, 45, 65, 89]; // Create a new array form an older array and add an elements
console.log(newNumbers);




