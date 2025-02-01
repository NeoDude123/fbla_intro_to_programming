//Function for closing the summary when the close button is clicked
function closeSummary() {
    document.getElementById("summaryModal").style.display = "none";
}

//Function for saving the summary changes
function saveSummaryChanges() {
    const inputs = document.querySelectorAll("#journeyList input");
    
    //Update the journey array with the edited values
    inputs.forEach(input => {
        const index = input.dataset.index;
        if(input.value.length < 100){
            journey[index] = input.value;  //Save the edited value back to the journey array
        }
        
    });

    //Close the modal after saving changes
    closeSummary();
}

//Function for the back button to be functional
function goBack() {
    stopSpeak();
    if(journeyText.length > 1){
        journeyText.pop();
        displayStoryPart(journeyText.pop());
        journey.pop();
        journey.pop();
    }
    
}

//Function for restarting the story when the restart button is hit
function restart() {

    restartButton.style.visibility = "hidden";
    
    //Resetting all the values when the story is reset
    journey = [];
    journeyText = [];
    clickCount = 0;
    helpButton.style.visibility = "visible";
    backButton.style.visibility = "visible";
    stopButton.style.visibility = "visible";
    displayStoryPart("start");
}