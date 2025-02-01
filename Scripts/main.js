//Unmute audio after user interaction
document.addEventListener("click", () => {
    speakTextCustom();
}, { once: true }); //Ensures it runs only once

//Function that is responsible for correctly displaying the next story part
function displayStoryPart(part) {
    
    //Assigning the current story part, text, and options to be displaye don the screen
    const storyText = document.getElementById("storyText");
    const optionsDiv = document.getElementById("options");
    const currentPart = storyParts[part];

    stopSpeak();

    //If story part doesn't exist or some other error then print error message
    if (!currentPart) {
        storyText.textContent = "Something went wrong. Unable to load this part of the story.";
        optionsDiv.innerHTML = "";
        return;
    }

    //To prevent users from spam-clicking, if they clicked more times then possible for actually following the story, then it says that their journey has ended
    clickCount++;
    if (clickCount >= maxClicks && currentPart.options.length > 0) {
        storyText.textContent = "Your adventure comes to an end. Thank you for exploring the Enchanted Forest!";
        optionsDiv.innerHTML = "";
        journey.push("Story ended automatically after reaching the maximum choices.");
        return;
    }

    //Displaying the text on the screen
    storyText.textContent = currentPart.text;
    document.body.style.backgroundImage = currentPart.background;
    journey.push(currentPart.text);
    journeyText.push(part);

    //If accessible mode, then speak the text no matter what
    if (alwaysSpeak) {
        speakText();
    }

    //Displaying the correct options for each screen
    optionsDiv.innerHTML = "";
    currentPart.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => displayStoryPart(option.next);
        optionsDiv.appendChild(button);
    });
}

//Function that is used to stop the story when an ending screen is reached
function stopStory() {
    const storyText = document.getElementById("storyText");
    const optionsDiv = document.getElementById("options");

    // Set final message and remove all buttons
    stopSpeak();
    storyText.textContent = "Thank you for playing! We hope to see you again soon.";
    optionsDiv.innerHTML = ""; //Clear all story options

    helpButton.style.visiblity = "hidden";
    backButton.style.visibility = "hidden";
    stopButton.style.visibility = "hidden";
    restartButton.style.visibility = "visible";
    journey.push("Story ended by user.");
}

//Funciton for the help button
function openHelp() {
    document.getElementById("helpModal").style.display = "block";
}

//Function for closing the help button
function closeHelp() {
    document.getElementById("helpModal").style.display = "none";
}

//Function for opening the summary with the button
function showSummary() {
    const summaryList = document.getElementById("journeyList");
    summaryList.innerHTML = journey.map((step, index) => {
        return `
            <li>
                <input type="text" data-index="${index}" value="${step}" />
            </li>
        `;
    }).join("");

    //Check if the save button already exists
    const existingSaveButton = document.querySelector("#summaryModal .saveButton");
    if (!existingSaveButton) {
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save Changes";
        saveButton.classList.add("saveButton");  //Add a class to uniquely identify the button
        saveButton.onclick = saveSummaryChanges;
        document.getElementById("summaryModal").appendChild(saveButton);
    }

    document.getElementById("summaryModal").style.display = "block";
}

//Displaying the starting story part at the beginning of the adventure
displayStoryPart("start");