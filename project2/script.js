// Accept User Input


//Easy way by utilizing the window Prompt

// let input = prompt("What is your Name Boy?")

// document.getElementById('spanId').textContent = input;

let username;

document.getElementById("mySubmit").onclick = function(){

    username = document.getElementById("text").value;
    document.getElementById("username").textContent = `Welcome user ${username}`
}