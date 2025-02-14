const storyParts = {

    //The starting scene for the story
    start: {

        //The text displayed on the scene
        text: "You find yourself at the edge of a mysterious forest. The air is thick with magic.",

        //Button options for the user with navigation
        options: [
            { text: "Follow the sound of the brook.", next: "brook" },
            { text: "Follow the glowing footprints.", next: "footprints" }
        ],
        background: "url('Images/forest.jpg')" //Background image
    },

    //The brook scene for the story
    brook: {

        //The text displayed on the scene
        text: "You follow the sound of water and find a crystal-clear brook. The air feels heavier.",

        //Button options for the user with navigation
        options: [
            { text: "Reach in and grab the shiny object.", next: "gem" },
            { text: "Continue along the path.", next: "path" }
        ],
        background: "url('Images/brook.jpg')" //Background image
    },

    //The scene with footprints on the path
    footprints: {

        //The text displayed on the scene
        text: "You follow the glowing footprints to a clearing with a giant tree.",

        //Button options for the user with navigation
        options: [
            { text: "Open the door in the tree.", next: "insideTree" },
            { text: "Explore the glowing clearing.", next: "clearing" }
        ],
        background: "url('Images/footprints.jpg')" //Background image
    },

    //The scene with the gem in the story
    gem: {

        //The text displayed on the scene
        text: "You reach into the brook and pull out a sparkling gem. It vibrates violently.",

        //Button options for the user with navigation
        options: [
            { text: "Keep the gem and continue along the path.", next: "gemPath" },
            { text: "Throw the gem back into the brook.", next: "deathGem" }
        ],
        background: "url('Images/gem.jpg')" //Background image
    },

    //The ending scene where the gem explodes
    deathGem: {

        //The text displayed on the scene
        text: "The gem explodes as you throw it back. Darkness engulfs you. Your journey ends here.",

        //No options because no buttons at story ending
        options: [],
        background: "url('Images/explosion.jpg')" //Background image
    },

    //Following the path even after picking up the gem
    gemPath: {

        //The text displayed on the scene
        text: "With the gem in hand, you feel a surge of courage. The path splits ahead.",

        //Button options for the user with navigation
        options: [
            { text: "Take the left path toward the mountains.", next: "mountains" },
            { text: "Take the right path into a dark cave.", next: "deathCave" }
        ],
        background: "url('Images/split.jpg')" //Background image
    },

    //The scene with continuing on the path
    path: {

        //The text displayed on the scene
        text: "You continue along the forest path, surrounded by shimmering leaves.",

        //Button options for the user with navigation
        options: [
            { text: "Follow the trail to a meadow.", next: "deathMeadow" },
            { text: "Head toward a distant hill.", next: "hill" }
        ],
        background: "url('Images/leaves.jpg')" //Background image
    },

    //The scene with the tree and the gnome inside of it
    insideTree: {

        //The text displayed on the scene
        text: "Inside the tree, you find a friendly gnome offering you two items.",

        //Button options for the user with navigation
        options: [
            { text: "Take the map.", next: "map" },
            { text: "Take the magical potion.", next: "deathPotion" }
        ],
        background: "url('Images/hole.jpg')" //Background image
    },

    //The scene of the story with the clearing
    clearing: {

        //The text displayed on the scene
        text: "The clearing is filled with glowing stones inscribed with ancient runes.",

        //Button options for the user with navigation
        options: [
            { text: "Touch the glowing stones.", next: "runes" },
            { text: "Sit and rest by the stones.", next: "deathRest" }
        ],
        background: "url('Images/runes.jpg')" //Background image
    },

    //Ending scene with the stones
    deathRest: {

        //The text displayed on the scene
        text: "You sit by the stones, but their energy consumes you. Your journey ends here.",

        //No options as story ending
        options: [],
        background: "url('Images/explosion.jpg')" //Background image
    },

    //Exploring the stones and teleporting to a cave scene
    runes: {

        //The text displayed on the scene
        text: "Touching the stones teleports you to a hidden cave filled with treasure!",

        //Button options for the user with navigation
        options: [
            { text: "Explore the treasure.", next: "treasure" },
            { text: "Find a way to teleport back.", next: "deathTeleport" }
        ],
        background: "url('Images/caveChest.jpg')" //Background image
    },

    //Ending scene where your teleportation doesn't work and you die
    deathTeleport: {

        //The text displayed on the scene
        text: "The teleportation fails, and you vanish into the void. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/void.jpg')" //Background image
    },

    //Scene where they find the treasure 
    treasure: {

        //The text displayed on the scene
        text: "Among the treasure, you find ancient gold and a magical staff radiating power.",

        //Button options for the user with navigation
        options: [
            { text: "Take the staff and leave the cave.", next: "endTreasure" },
            { text: "Take the gold and teleport back.", next: "deathGold" }
        ],
        background: "url('Images/wand.jpg')" //Background image
    },

    //Ending scene where the user picks up the gold and so they end up dying
    deathGold: {

        //The text displayed on the scene
        text: "The gold was cursed! You collapse as the curse takes hold. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/explosion.jpg')" //Background image
    },

    //Ending scene where the user picks up a staff and wins
    endTreasure: {

        //The text displayed on the scene
        text: "With the staff in hand, you feel the forest's power coursing through you. You have succeeded!",

        //No options because story ending
        options: [],
        background: "url('Images/wandVictory.jpg')" //Background image
    },

    //Scene with the map where it reveals a hidden trail
    map: {

        //The text displayed on the scene
        text: "The map reveals a hidden trail leading to a mysterious castle.",

        //Button options for the user with navigation
        options: [
            { text: "Follow the map's trail.", next: "castle" }
        ],
        background: "url('Images/map.jpg')" //Background image
    },

    //Ending scene with the death potion
    deathPotion: {

        //The text displayed on the scene
        text: "The potion was poisonous! You collapse as your vision fades. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/explosion.jpg)" //Background image
    },

    //Ending scene where the meadow was a trap
    deathMeadow: {

        //The text displayed on the scene
        text: "The meadow is beautiful, but it was a trap! You are surrounded by creatures. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/darkMeadows.jpg')" //Background image
    },

    //Scene where the user continues along the path and finds a camp in the mountains
    mountains: {

        //The text displayed on the scene
        text: "The mountain path is steep but rewarding. You find an abandoned camp.",

        //Button options for the user with navigation
        options: [
            { text: "Search the camp.", next: "camp" },
            { text: "Climb higher up the mountain.", next: "deathPeak" }
        ],
        background: "url('Images/abandonCamp.jpg')" //Background image
    },

    //Ending scene where the user hikes up higher and dies
    deathPeak: {

        //The text displayed on the scene
        text: "As you climb higher, the air thins and the trail disappears. You lose your footing and fall. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/cliff.jpg')" //Background image
    },

    //Ending scene where the cave has a monster and you die
    deathCave: {

        //The text displayed on the scene
        text: "The cave is dark, and a monstrous roar echoes. You don't make it out alive. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/darkCave.jpg')" //Background image
    },

    //Scene with the camp and the supplies
    camp: {

        //The text displayed on the scene
        text: "The camp holds old supplies and a journal hinting at a hidden artifact.",

        //Button options for the user with navigation
        options: [
            { text: "Follow the journal's clues.", next: "artifact" },
            { text: "Take the supplies and return to the path.", next: "path" }
        ],
        background: "url('Images/notebook.jpg')" //Background image
    },

    //Scene where you find an artifact and you win
    artifact: {

        //The text displayed on the scene
        text: "You find the artifact deep in the forest. It grants you wisdom and peace.",

        //Button options for the user with navigation
        options: [
            { text: "Use the artifact to end your journey.", next: "endArtifact" }
        ],
        background: "url('Images/peace.jpg')" //Background image
    },

    //Find artifact and win ending scene
    endArtifact: {

        //The text displayed on the scene
        text: "With the artifact in hand, you feel a profound connection to the forest. You have succeeded!",

        //No options because story ending
        options: [],
        background: "url('Images/connection.jpg')" //Background image
    },

    //Scene with a hill and the views
    hill: {

        //The text displayed on the scene
        text: "The hill offers a stunning view of the entire forest. You feel at peace but vulnerable.",

        //Button options for the user with navigation
        options: [
            { text: "Descend back to the path.", next: "path" }
        ],
        background: "url('Images/hill.jpg')" //Background image
    },

    //Scene with a castle and the option to enter
    castle: {

        //The text displayed on the scene
        text: "The castle looms in the distance, ancient and foreboding.",

        //Button options for the user with navigation
        options: [
            { text: "Enter the castle.", next: "deathCastle" }
        ],
        background: "url('Images/castle.jpg')" //Background image
    },

    //Ending scene in the castle where it kills you
    deathCastle: {

        //The text displayed on the scene
        text: "The castle was a trap! Its walls close in, and darkness engulfs you. Your journey ends here.",

        //No options because story ending
        options: [],
        background: "url('Images/darkness.jpg')" //Background image
    }
};

//Defining 
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const voiceButton = document.getElementById("voiceButton");
voiceButton.textContent = "Voice Command";
document.body.appendChild(voiceButton);

var stopB = false;
var readText = false;
var help = false;
var journeySummary = false;
var alwaysSpeak = false;

let journey = [];
let journeyText = [];
let clickCount = 0;
const maxClicks = 10;
const toggleAccessability = document.getElementById("toggleAccessability");
const textButton = document.getElementById("textButton");
const helpButton = document.getElementById("helpButton");
const backButton = document.getElementById("backButton");
const restartButton = document.getElementById("restartButton");
const stopButton = document.getElementById("stopButton");
restartButton.style.visibility = "hidden";