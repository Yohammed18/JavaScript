// Built in Math

console.log(Math.PI)

let x = 3.5

console.log(Math.round(x))
console.log(Math.floor(123.9)) //round down
console.log(Math.ceil(123.9)) //round up

let y = 4
let z = 3
let w = 7

console.log(Math.sqrt(9))
console.log(Math.pow(4,3))
console.log(Math.log(144))
console.log(Math.abs(-312))

console.log(Math.max(y,z,w))
console.log(Math.min(y,z,w))


// Random Number Generator
let randomNum = Math.floor(Math.random()*6) + 1;


console.log(randomNum)

// Arrays
let numbers = [1,2,3,4,5]


numbers[0] = 'Dead'


numbers.push('Best')

console.log(typeof numbers)
console.log(numbers)


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    console.log(`Element at index ${i} is ${element}`)
}

// spread operators - allow an iterable such as an array or string to be expanded.

let elements =  [2,4,6,8,10]
let maximum = Math.max(...elements)

console.log(maximum)
console.log(...elements)

let username = 'Mohammed'
let letters = [...username].join("-")

console.log(letters)

// rest parameters (...rest) allow a function to work with a variable number of argument by bundling them into an array


function openFride(...foods){
    console.log(foods)
}

const food1 = 'pizza'
const food2 = 'pasta'
const food3 = 'hotdog'
const food4 = 'fish'


openFride(food1,food2, food3, food4)