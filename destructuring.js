/* 
    1. Array destructuring
*/
const numbers = [23, 33, 45, 46, 76];
const [a, b, ...all] = numbers;

/* 
    2. Object destructuring
*/
const student = {
    name: 'Ab Naeem',
    age: 23,
    movies: ['King Khan', 'Dhakar Mastan']
}
const {name, age, movies} = student;
const about = `My name is ${name} age of ${age} also liked movies ${movies[0]}`;


