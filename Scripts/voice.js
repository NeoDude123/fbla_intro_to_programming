voiceButton.onclick = () => {
    voiceClick();
};

function voiceClick() {
    
    recognition.start();
    
    //When speech is recognized
    recognition.onresult = (event) => {
        processVoiceCommand(event.results[0][0].transcript.toLowerCase());
    };
};

//Process the recognized command
function processVoiceCommand(command) {
    const currentPart = storyParts[journeyText[journeyText.length - 1]];
    if (!currentPart) return;

    //Match the spoken command with one of the available options
    for (const option of currentPart.options) {
        if (command.includes(option.text.toLowerCase())) {
            displayStoryPart(option.next);
            return;
        }
    }

    //Match the spoken command with one of the permanent buttons that are always on the screen

    //Stop button open
    if (command.includes("stop")) {
        stopB = true;
        stopStory();
        return;
    }

    //View Journey Summary Button Open
    if (command.includes("view journey summary")) {
        journeySummary = true;
        showSummary();
        if(alwaysSpeak){
            speakSummary();
        }
        return;
    }

    //Help Button Open
    if (command.includes("help")) { 
        help = true;
        openHelp();
        if(alwaysSpeak){
            speakHelp();
        }
        return;
    }

    //Back Button
    if (command.includes("back")) { 
        backButton();
        return;
    }

    //Read Text
    if (command.includes("read text")) { 
        speakText();
        return;
    }

    //Restart button open
    if (stopB) {
        if (command.includes("restart")) {
            stopB = false;
            restart();
            return;
        }
    }

    //Journey Summary close
    if (journeySummary) {
        if (command.includes("close")) {
            journeySummary = false;
            closeSummary();
            setTimeout(() => {
                speakText();
            }, 1000)
            return;
        }
    }

    //Help Button Close
    if (help) {
        if (command.includes("close")) {
            help = false;
            closeHelp();
            setTimeout(() => {
                speakText();
            }, 1000)
            return;
        }
    }

    //If the user picks accessible mode
    if (command.includes("accessible")) {
        alwaysSpeak = true;
        speakText();
        return;
    }

    voiceClick();
}

//Method that speaks out the text based on what the current part of the story is
function speakText() {

    //Getting the current story part to figure out what to say
    const part = journeyText.pop();
    const currentPart = storyParts[part];
    let num = 1;
    let text = "";
    text += currentPart.text + ", ";
    
    //Adding the different options that the user can pick from based on what story part they are on
    currentPart.options.forEach(option => {
        text += "Option " + num.toString() + ", ";
        num++;
        text += option.text + ", ";
    });

    //Adding the different options that are permanently on the screen
    text += "Other options are, ";
    text += "Back, Stop, Help, View Journey Summary"

    //Setting up the actual speech with its settings
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; //Set language (change if needed)
    speech.volume = 1; //Volume (0.0 to 1.0)
    speech.rate = 1; //Speed (0.1 to 10)
    speech.pitch = 1; //Pitch (0 to 2)

    //Actually speaking to the user
    window.speechSynthesis.speak(speech);
    journeyText.push(part);

    //Activating the user's voice activation system after it is done reading
    speech.onend = function (){
        voiceClick();
    }
}
    
//Function that is used just for speaking out whatever is written on the help page
function speakHelp(){
    
    //Speech settings
    const speech = new SpeechSynthesisUtterance("This is an interactive journey that takes the user's input to decide how it ends. Choose an option to progress the story. Your choices shape the adventure. Be careful, as every step along the journey, dangers await! Are you up for the challenge? Any time you wish to back out, you may say Stop to exit the forest story. However, those who manage to stay on the path, avoiding all the dangers possible, will be rewarded at the end. Many people however, will not meet such a favorable fate");
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    //Speaking
    window.speechSynthesis.speak(speech);

    //When the speaking is done, activate voice-activation again
    speech.onend = function () {
        voiceClick();
    }
}

//Method just for stopping all speaking
function stopSpeak(){
    window.speechSynthesis.cancel();
}

//Method for speaking the text at the beginning of the program to check fro accessability
function speakTextCustom() {

    //Speech settings
    const speech = new SpeechSynthesisUtterance("Welcome to the Dreamwood Adventures. If you would like to keep auto-speak on and auto-voice recognition on, then please say accessible");
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    //Speaking
    window.speechSynthesis.speak(speech);

    //When the speaking is done, activate voice-activation again
    speech.onend = function () {
        voiceClick();
    }
}

//Method for speaking the journey summary
function speakSummary(){

    //Adding each part of the journey to the text
    let text = "";
    journey.forEach(part => {
        text += part + ", ";
    });

    //Speech settings
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    //Speaking
    window.speechSynthesis.speak(speech);

    //Once speech is done, then activate voice-activation again
    speech.onend = function () {
        voiceClick();
    }
}

//Function for closing the accessabilty mode when the button is clicked
function oppositeAccessability() {
    alwaysSpeak = !alwaysSpeak;
    stopSpeak();
}

