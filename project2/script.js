// Accept User Input


//Easy way by utilizing the window Prompt

// let input = prompt("What is your Name Boy?")

// document.getElementById('spanId').textContent = input;

let username;

document.getElementById("mySubmit").onclick = function(){

    username = document.getElementById("text").value;
    document.getElementById("username").textContent = `Welcome user ${username}`
}

// Type conversion = change the datatype of a value to another (string, number, booleans)

// let age = prompt('How old are you?')
// console.log(typeof age)
// let int_age = Number(age)

// console.log(int_age, typeof int_age)


// const, var, let
const PI = 3.14159

document.getElementById("Submit").onclick = function(){
    let radius = document.getElementById("radius").value;
    let area = PI * Math.pow(radius,2)
    document.getElementById("pRadius").textContent = `The radius of the Circle is ${area.toFixed(2)}`
}

document.getElementById("clear").onclick = function(){
    document.getElementById("pRadius").textContent = ""
}

