// let X = 25;
// console.log(X);

// let name = 'Yousef';
// let age  = 30; 

// console.log(typeof name);
// console.log(typeof age);

// let language = 'JavaScript';
// let message ='Welcome to ' + language +'.';
// console. log(message);

// colors  =['red','green','blue'];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors.includes('red'));
// let PopColors=colors.pop();
// console.log(colors);
// console.log(PopColors);
// colors.push('black')
// console.log(colors);

// value=[
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]
// console.log(value[2][2]);

// X=[];
// console.log(X.length)

// let aga = 10;
// if(age<10){
//     console.log('You can not paly game.');

// }
// else{
//     console.log('You can paly game.');
// }

// let number =-10;
// if(number >= 1){
// console.log(" the number is +");
// }else if(number <=-1){
//  console.log('the number is -');
// }else{
//  console.log('the number is zero');
// }


// // 10/17/2020
// const d = new Date(2020,9,17);
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getFullYear());

// const number1 = Math.ceil(-9.12);
// console.log(number1);

// const number2 = Math.floor(9.12);
// console.log(number2);


// const number3 = Math.round(9.52);
// console.log(number3);

// const number4 = Math.abs(-8);
// console.log(number4);

// const  numbers = [4, 2, -9,9,7];

// const num = Math.min(...numbers)
// console.log(num); 

// const num1 = Math.max(...numbers)
// console.log(num1); 

// const str = '1.45'
// const floatNumber = parseFloat(str);
// console.log(floatNumber+1);


// const str1 ='9090'
// const intNumber = parseInt(str1)
// console.log(intNumber + 1);

// const number6 = Math.trunc(4.9)
// console.log(number6);



// const number7 =3.12;
// const isInt = Number.isInteger(number7);
// console.log(isInt);

// const number8 = Math.pow(2,3);
// console.log(number8);

// const number9 =16
// const sqrtNamer = Math.sqrt(number9);
// console.log(sqrtNamer);



// javaScrpt_3

const myString = 'I love javascript'
const regex = /javascript/
const containsRegex = regex.test(myString)
console.log(containsRegex)

const myString1 = 'I love javascript'
const regex1 = /javascript/
let containsRegex1 = myString1.replace(regex1, 'kotlin')
console.log(containsRegex1)

let A = myString.search(/javascript/)
console.log(A)


let numbers = [1,2,3,4,5];
let [first,second,...third]=numbers;
console.log(first,second,third)
console.log(first,second,third[0])

let first1 = [1, 2, 3]
let second1 = [4, 5]
let third1 = [...first1, ...second1]
console.log(third1);

function sum(first, second, ...others){
    console. log(...others)
    return first + second
}
console.log(sum(1, 2, 6, 80, 75))
    
let student = {
    name : 'yousef',
    age : 18
    
}
let {name, nickname = 'unknown'} = student
console.log(name, nickname)
    
let colors  =['white' , 'blue' ,'silver' ]
let [color]=colors
console.log(color)









