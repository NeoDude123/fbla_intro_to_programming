const storyParts = {
    start: {
        text: "You find yourself at the edge of a mysterious forest. The air is thick with magic.",
        options: [
            { text: "Follow the sound of the brook.", next: "brook" },
            { text: "Follow the glowing footprints.", next: "footprints" }
        ],
        background: "url('Images/forest.jpg')"
    },
    brook: {
        text: "You follow the sound of water and find a crystal-clear brook. The air feels heavier.",
        options: [
            { text: "Reach in and grab the shiny object.", next: "gem" },
            { text: "Continue along the path.", next: "path" }
        ],
        background: "url('Images/brook.jpg')"
    },
    footprints: {
        text: "You follow the glowing footprints to a clearing with a giant tree.",
        options: [
            { text: "Open the door in the tree.", next: "insideTree" },
            { text: "Explore the glowing clearing.", next: "clearing" }
        ],
        background: "url('Images/footprints.jpg')"
    },
    gem: {
        text: "You reach into the brook and pull out a sparkling gem. It vibrates violently.",
        options: [
            { text: "Keep the gem and continue along the path.", next: "gemPath" },
            { text: "Throw the gem back into the brook.", next: "deathGem" }
        ],
        background: "url('Images/gem.jpg')"
    },
    deathGem: {
        text: "The gem explodes as you throw it back. Darkness engulfs you. Your journey ends here.",
        options: [],
        background: "url('Images/explosion.jpg')"
    },
    gemPath: {
        text: "With the gem in hand, you feel a surge of courage. The path splits ahead.",
        options: [
            { text: "Take the left path toward the mountains.", next: "mountains" },
            { text: "Take the right path into a dark cave.", next: "deathCave" }
        ],
        background: "url('Images/split.jpg')"
    },
    path: {
        text: "You continue along the forest path, surrounded by shimmering leaves.",
        options: [
            { text: "Follow the trail to a meadow.", next: "deathMeadow" },
            { text: "Head toward a distant hill.", next: "hill" }
        ],
        background: "url('Images/leaves.jpg')"
    },
    insideTree: {
        text: "Inside the tree, you find a friendly gnome offering you two items.",
        options: [
            { text: "Take the map.", next: "map" },
            { text: "Take the magical potion.", next: "deathPotion" }
        ],
        background: "url('Images/hole.jpg')"
    },
    clearing: {
        text: "The clearing is filled with glowing stones inscribed with ancient runes.",
        options: [
            { text: "Touch the glowing stones.", next: "runes" },
            { text: "Sit and rest by the stones.", next: "deathRest" }
        ],
        background: "url('Images/runes.jpg')"
    },
    deathRest: {
        text: "You sit by the stones, but their energy consumes you. Your journey ends here.",
        options: [],
        background: "url('Images/explosion.jpg')"
    },
    runes: {
        text: "Touching the stones teleports you to a hidden cave filled with treasure!",
        options: [
            { text: "Explore the treasure.", next: "treasure" },
            { text: "Find a way to teleport back.", next: "deathTeleport" }
        ],
        background: "url('Images/caveChest.jpg')"
    },
    deathTeleport: {
        text: "The teleportation fails, and you vanish into the void. Your journey ends here.",
        options: [],
        background: "url('Images/void.jpg')"
    },
    treasure: {
        text: "Among the treasure, you find ancient gold and a magical staff radiating power.",
        options: [
            { text: "Take the staff and leave the cave.", next: "endTreasure" },
            { text: "Take the gold and teleport back.", next: "deathGold" }
        ],
        background: "url('Images/wand.jpg')"
    },
    deathGold: {
        text: "The gold was cursed! You collapse as the curse takes hold. Your journey ends here.",
        options: [],
        background: "url('Images/explosion.jpg')"
    },
    endTreasure: {
        text: "With the staff in hand, you feel the forest's power coursing through you. You have succeeded!",
        options: [],
        background: "url('Images/wandVictory.jpg')"
    },
    map: {
        text: "The map reveals a hidden trail leading to a mysterious castle.",
        options: [
            { text: "Follow the map's trail.", next: "castle" }
        ],
        background: "url('Images/map.jpg')"
    },
    deathPotion: {
        text: "The potion was poisonous! You collapse as your vision fades. Your journey ends here.",
        options: [],
        background: "url('Images/explosion.jpg)"
    },
    deathMeadow: {
        text: "The meadow is beautiful, but it was a trap! You are surrounded by creatures. Your journey ends here.",
        options: [],
        background: "url('Images/darkMeadows.jpg')"
    },
    mountains: {
        text: "The mountain path is steep but rewarding. You find an abandoned camp.",
        options: [
            { text: "Search the camp.", next: "camp" },
            { text: "Climb higher up the mountain.", next: "deathPeak" }
        ],
        background: "url('Images/abandonCamp.jpg')"
    },
    deathPeak: {
        text: "As you climb higher, the air thins and the trail disappears. You lose your footing and fall. Your journey ends here.",
        options: [],
        background: "url('Images/cliff.jpg')"
    },
    deathCave: {
        text: "The cave is dark, and a monstrous roar echoes. You don't make it out alive. Your journey ends here.",
        options: [],
        background: "url('Images/darkCave.jpg')"
    },
    camp: {
        text: "The camp holds old supplies and a journal hinting at a hidden artifact.",
        options: [
            { text: "Follow the journal's clues.", next: "artifact" },
            { text: "Take the supplies and return to the path.", next: "path" }
        ],
        background: "url('Images/notebook.jpg')"
    },
    artifact: {
        text: "You find the artifact deep in the forest. It grants you wisdom and peace.",
        options: [
            { text: "Use the artifact to end your journey.", next: "endArtifact" }
        ],
        background: "url('Images/peace.jpg')"
    },
    endArtifact: {
        text: "With the artifact in hand, you feel a profound connection to the forest. You have succeeded!",
        options: [],
        background: "url('Images/connection.jpg')"
    },
    hill: {
        text: "The hill offers a stunning view of the entire forest. You feel at peace but vulnerable.",
        options: [
            { text: "Descend back to the path.", next: "path" }
        ],
        background: "url('Images/hill.jpg')"
    },
    castle: {
        text: "The castle looms in the distance, ancient and foreboding.",
        options: [
            { text: "Enter the castle.", next: "deathCastle" }
        ],
        background: "url('Images/castle.jpg')"
    },
    deathCastle: {
        text: "The castle was a trap! Its walls close in, and darkness engulfs you. Your journey ends here.",
        options: [],
        background: "url('Images/darkness.jpg')"
    }
};
let journey = [];
let journeyText = [];
let clickCount = 0;
const maxClicks = 10;
const helpButton = document.getElementById("helpButton");
const backButton = document.getElementById("backButton");
const restartButton = document.getElementById("restartButton");
const stopButton = document.getElementById("stopButton");
restartButton.style.display = "none";
helpButton.style.display = "block";
backButton.style.display = "block";
stopButton.style.display = "block";

function displayStoryPart(part) {
    const storyText = document.getElementById("storyText");
    const optionsDiv = document.getElementById("options");
    const currentPart = storyParts[part];

    if (!currentPart) {
        storyText.textContent = "Something went wrong. Unable to load this part of the story.";
        optionsDiv.innerHTML = "";
        return;
    }

    clickCount++;
    if (clickCount >= maxClicks && currentPart.options.length > 0) {
        storyText.textContent = "Your adventure comes to an end. Thank you for exploring the Enchanted Forest!";
        optionsDiv.innerHTML = "";
        journey.push("Story ended automatically after reaching the maximum choices.");
        return;
    }

    storyText.textContent = currentPart.text;
    document.body.style.backgroundImage = currentPart.background;
    journey.push(currentPart.text);
    journeyText.push(part);

    optionsDiv.innerHTML = "";
    currentPart.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => displayStoryPart(option.next);
        optionsDiv.appendChild(button);
    });
}

function stopStory() {
    const storyText = document.getElementById("storyText");
    const optionsDiv = document.getElementById("options");

    // Set final message and remove all buttons
    storyText.textContent = "Thank you for playing! We hope to see you again soon.";
    optionsDiv.innerHTML = ""; // Clear all story options

    //document.querySelectorAll("button").forEach(button => button.remove);
    helpButton.style.display = "none";
    backButton.style.display = "none";
    stopButton.style.display = "none";
    restartButton.style.display = "block";
    //document.getElementById("restartModal").style.display = "block"; // Remove ALL buttons
    journey.push("Story ended by user.");
}

function openHelp() {
    document.getElementById("helpModal").style.display = "block";
}

function closeHelp() {
    document.getElementById("helpModal").style.display = "none";
}

function showSummary() {
    const summaryList = document.getElementById("journeyList");
    summaryList.innerHTML = journey.map((step, index) => `<li>${index + 1}: ${step}</li>`).join("");
    document.getElementById("summaryModal").style.display = "block";
}

function closeSummary() {
    document.getElementById("summaryModal").style.display = "none";
}

function goBack() {
    journeyText.pop();
    displayStoryPart(journeyText.pop());
}

function restart() {
    //document.getElementById("restartModal").style.display = "none";
    restartButton.style.display = "none";
    displayStoryPart("start");
    journey = [];
    journeyText = [];
    clickCount = 0;
}

displayStoryPart("start");