// forEach()

let numbers = [1, 2, 3, 4, 5]
let h2 = document.querySelector('h2');

numbers.forEach(number =>{
    h2.textContent = number;
    console.log(number);
})


const square = numbers.map(number =>{
    return Math.pow(number, 2)
})

console.log(square)
