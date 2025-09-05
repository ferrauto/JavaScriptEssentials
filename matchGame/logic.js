const   containerElement = document.getElementById("game-container"),
        scoreElement = document.getElementById("score"),
        timer = document.getElementById("timer"),
        startBtn = document.getElementById("startBtn");

const   colors = ["red","blue", "green", "purple", "orange", "pink", "red", "blue", "green", "purple", "orange", "pink"]; 
let     cards = shuffleCards();
let     selectedCards = [];
let     score = 0;
let     timeLeft = 30;
let     gameInterval;


function shuffle(array){
    for (let i = array.length-1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i+1));
        [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
}

function shuffleCards(){
    return shuffle(colors.concat(colors));
}

function ShowScore(){
    scoreElement.textContent = "Score: "+score;
}

function ShowTimer(){
    timer.textContent = "Time left: "+timeLeft;
}

function ClearSelected(){
    selectedCards.length = 0;
}

function generateCards(){
    for (const color of cards) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.color = color;
        card.textContent = "?";
        containerElement.appendChild(card);
    }
}
function OnClick(event){
    const card = event.target;
    if(!card.classList.contains("card") || card.classList.contains("matched") || selectedCards.includes(card))
        return;
    card.textContent = card.dataset.color;
    card.style.backgroundColor = card.dataset.color;
    selectedCards.push(card);
    if(selectedCards.length === 2)
        setTimeout(checkMatch, 500); 
}
function checkMatch(){
    const [c1, c2] = selectedCards;
    if(c1.dataset.color === c2.dataset.color){
        c1.classList.add("matched");
        c2.classList.add("matched");
        score++;
        ShowScore();
    }
    else {
        c1.style.backgroundColor = "#ddd";
        c1.textContent = "?";
        c2.style.backgroundColor = "#ddd";
        c2.textContent = "?";
    }
    ClearSelected();
}

function ClearAll(){
    // Reset the remaining time
    timeLeft = 30;
    ShowTimer();

    // Reset & show score
    score = 0;
    ShowScore();

    // Reset cards
    cards.length = 0;

    // Clear all selected cards
    ClearSelected();

    // Clear the cards container
    containerElement.innerHTML = "";
    containerElement.removeEventListener("click", OnClick);

    // Enable start button
    startBtn.disabled = false;
}

function StartTimer(){
    ShowTimer();

    gameInterval = setInterval(()=>{
        timeLeft--;
        ShowTimer();

        if(timeLeft <= 0){
            clearInterval(gameInterval);
            ClearAll();
            showIdle();
            alert("Game Over");
        }
    },1000);
}

function Start(){
    
    ClearAll();

    // Disable the start button
    startBtn.disabled = true;
    
    // Reshufle cards
    cards = shuffleCards();

    // Start timer
    StartTimer();

    // Generate all the cards
    generateCards();

    // Check for click on container then call OnClick event
    containerElement.addEventListener("click", OnClick);
}

function showIdle(){
    for (let index = 0; index < colors.length * 2; index++) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = "?";
        containerElement.appendChild(card);
    }
}

startBtn.addEventListener("click", Start);

showIdle();