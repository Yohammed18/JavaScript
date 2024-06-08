console.log("Welcome to JavaScript Tutorial.");


// var box = document.querySelector("p");

// box.addEventListener("click", function (){
//     window.alert(`This is an alert!`)
// })

document.getElementById("myH1").textContent = "Welcome To JavaScript";
document.getElementById("myIp").innerHTML = "<strong>Kobe Bryant</strong> is my favorite Basketball player.";


//variables - a container that stores a value
//decleration 
let x;
//assignment
x = "100";
console.log(`The Value of x is ${x}.`)

let num = Math.round(12.92)
console.log(`Number: ${num}`)

console.log(typeof x)
console.log(typeof num)

// booleans - can either be true or false

let online = true;

if(online){
    console.log(`Bro online status: ${online}`)
}

let username = 'Yahoo Scammer'
let age = 35
let email = "temp021889@gmail.com"

let user = [username, age, email]

for (let index = 0; index < user.length; index++) {
    const element = user[index];
    let i = index+1
    document.getElementById(`${i}`).textContent = element
}

//arithmetic operators (operators +-*/)

let student = 31
console.log(`Number of Students: ${student}`)
console.log(`Addition (2): ${student+2}`)
console.log(`Subtraction (2): ${student-2}`)
console.log(`Multiplication (2): ${student*2}`)
console.log(`Division (2): ${student/2}`)
console.log(`Module (2): ${student%2}`)
console.log(--student)

// exponent
console.log(Math.pow(4,2))