// Counter Program

// store each element in a variable

const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const reset = document.getElementById("reset");
const countLabel = document.getElementById("countLabel");

var currentCount = countLabel.textContent;

// reset button
reset.onclick = function(){
    currentCount = 0
    countLabel.textContent = currentCount;
}

// decrease button
decreaseBtn.onclick = function(){
    currentCount--;
    countLabel.textContent = currentCount;
}

// increase button
increaseBtn.onclick = function(){
    currentCount++;
    countLabel.textContent = currentCount;
}