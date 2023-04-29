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
