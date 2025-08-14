// Gets the span element
const countDisplay = document.getElementById("countDisplay");
// initialize counter to 0
let count = 0;

function displayCount()
{
    // Edit the inner HTML of the span and set it to count
    countDisplay.innerHTML = count;
}

function checkCount()
{
    if(count == 10){
        alert("Your post has reached 10 followers! Congrats!");
    }else if (count == 20){
        alert("Your post has reached 20 followers! Keep it up!");
    }
}

function increaseCount()
{
    // increase counter
    count++;
    // display counter
    displayCount();
    // Check followers count
    checkCount();
}
function resetCount(){
    count = 0;
    displayCount();
    alert("Your post has been reset to 0 followers!");
}
