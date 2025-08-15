const   inputText = document.getElementById("inputText"),
        userInput = document.getElementById("userInput"),
        output = document.getElementById("output");

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const text2 = "The quick brwon fox jumps over a lazy dog. The end.";

let startTime, endTime;

function start(){
    // Clears the user input
    userInput.value = "";
    // Clears the output value
    output.innerHTML = "";
    // Lets the user type directly
    userInput.focus();
    // Shows the text to type o the text input field
    inputText.value = text2;
    // Get the start time 
    startTime = new Date().getTime();

}

function end(){
    if(startTime){
        endTime = new Date().getTime();
        let timeElapsed = (endTime - startTime)/ 1000;
        const userIn = userInput.value;
        userInput.value = "";
        
        let typed = userIn.split(' ').filter((word)=> word !== "");
        
        let wpm = 0;
        let accuracy = 0.0;
        
        // Check if ended accidentally or if no text was typed
        if(timeElapsed != 0 && typed.length > 0){

            // Check for accuracy
            let correctText = text2.split(" ");
            
            let typedCorrectly = 0;
            for (let index = 0; index < correctText.length; index++) {
                
                if(typed.length-1 >= index && typed[index] === correctText[index]){
                    typedCorrectly++;
                }
            }

            // Gets the words per minute
            wpm = Math.round((typed.length/timeElapsed)*60);
            // Gets the accuracy
            accuracy = typedCorrectly/correctText.length*100;

            // display the output
            let out = "<h2>Typing resuts:</h2><p>Words typed: "+typed.length+"</p><p>Time elapsed: "+timeElapsed.toFixed(2)+" seconds</p><p>Words Mer Minute: "+wpm+" WPM</p><p>Accuracy: "+accuracy.toFixed(2)+"%</p>"
            output.innerHTML = out;
        }
        else{
            alert("Please fill in something");
            userInput.focus();
        }
        
    }
}

userInput.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        end();
    }
});