/* 
    Truthy - 'Naeem', 5, true, {}, []
    Falsy - '', 0, false, null, undefine
*/

// Check any truthy
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}else{
    myVar = 0;
}

// You can check negative or falsy anything
let myMoney = 50;
if(!myMoney){

}

// 
const money = 80;
let food;
if (money > 100) {
    food = 'biryani'
}else{
    food = 'Dhore giya mor!'
}
/* 
    Shortcut way
        ternary ?
*/
let food1 = money > 100 ? 'biryani' : 'Dhore giya mor'; // Single condition
let drink = (money > 100 && myVar > 100) ? 'Coke' : 'Filter water'; // Multi condition

// Shortcut number to string and string to number conversion 
const num1 = 50;
const numStr = num1 + '';
// String to number
const input = '50';
const inputNum = +input;

// 
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();

// Toggle Boolean
isActive = !isActive;






