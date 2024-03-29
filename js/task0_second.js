// import js modules that hold the game/experiment scenes
// instructions and practice/calibration task:
import InstructionsScene from "./scenes/instructionsScene.js";
import PracticeTask from "./scenes/practiceTask.js";
import StartTaskScene from "./scenes/startTaskScene.js";
// first run of task + questions:
import MainTask from "./scenes/mainTask.js";
import GameEndScene from "./scenes/taskEndScene.js";
import PostTaskQuestions from "./scenes/postTaskQuestions.js";
// finish up and return to any other content:
import TheEndSecond from "./scenes/theEnd_second.js";

// allow access to mobile devices?
import { allowDevices } from "./versionInfo.js";

// create the phaser game, based on the following config
const config = {
    type: Phaser.AUTO,           // rendering: webGL if available, otherwise canvas
    width: 850,  
    height: 600, 
    physics: {
        default: 'arcade',       // add light-weight physics to our world
        arcade: {
            gravity: { y: 600 }, // need some gravity for a side-scrolling platformer
            debug: false         // TRUE for debugging game physics, FALSE for deployment
        }
    },
    parent: 'game-container',    // ID of the DOM element to add the canvas to
    dom: {
        createContainer: true    // to allow text input DOM element
    },
    backgroundColor: "#d0f4f7",  // pale blue sky color [black="#222222"],
    scene: [//
            InstructionsScene,
            PracticeTask,
            StartTaskScene,
            //
            MainTask, 
            GameEndScene,
            PostTaskQuestions,
            //
            TheEndSecond
            ],              // construct the experiment from componenent scenes
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: rexuiplugin,  // load the rexUI plugins here for all scenes
            mapping: 'rexUI'
        }]
    }
};

// wrap game creation in a function so that it isn't created until consent completed
export function runTask0Second() {
    // create new phaser game configured as above
    var game = new Phaser.Game(config);  

    // if desired, allow game window to resize to fit available space 
    function resizeApp () {
        // Width-height-ratio of game resolution
        //let game_ratio = 1000/600;
        
        // Make div full height of browser and keep the ratio of game resolution
        // let div = document.getElementById('game-container');
        // div.width  = '0px';
        // div.height = '0px';
        
        // // Check if device DPI messes up the width-height-ratio
        let canvas  = document.getElementsByTagName('canvas')[0];
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var windowRatio = windowWidth / windowHeight;
        var gameRatio =  game.config.width / game.config.height;
        if (windowRatio < gameRatio) {
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        } else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    };
    window.addEventListener('resize', resizeApp);
};

// if desired, block access to game on phones/tablets
if (allowDevices == false) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
       alert("Sorry, this game does not work on mobile devices!");
    }
}
