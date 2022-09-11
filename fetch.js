/* 
    1. JSON
        stringify, parse
*/
const student = {
    name: 'Ab Naeem',
    age: 23,
    movies: ['King Khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
const studentObj = JSON.parse(studentJSON);

/* 
    2. fetch
*/
fetch(`url`)
    .then(res => res.JSON())
    .then(data => console.log(data))

/* 
    3. keys and values
*/
const keys = Object.keys(student);
const values = Object.values(student);

/* 
    4. forEach and map
*/
const numbers = [23, 33, 45, 46, 76];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

/* 
    5. for of on array like object
    6. loop on an object using for in
*/

/* 
    7. add or remove from an array
*/
const products = [
    {name: 'Hp Laptop', price: 65000, brand: 'Hp', color: 'Silver'},
    {name: 'Lenovo Laptop', price: 60000, brand: 'Lenovo', color: 'Black'},
    {name: 'Apple Laptop', price: 150000, brand: 'Apple', color: 'Silver'},
    {name: 'Dell Laptop', price: 69000, brand: 'Dell', color: 'Gray'}
];

const newProduct = {name: 'Laptop', price: 50000, brand: 'Dell', color: 'Gray'};

// Copy products array and then add newProduct
const newProducts = [...products, newProduct];

/*
    Create a new array without one specific item
    Remove Dell Laptop means create a array without Dell Laptop 
*/
const remaining = products.filter(product => product.name !== 'Dell Laptop');






