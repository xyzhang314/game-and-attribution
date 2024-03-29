// End scene to thank participants for their time

// import js game element modules (sprites, ui, outcome animations)
import InstructionsPanel from "../elements/instructionsPanel.js";

// import our custom events centre for passsing info between scenes and data saving function
import eventsCenter from "../eventsCenter.js";

// import relevant data saving function
import { saveEndData } from "../saveGameData.js";
import { runStudy0Second } from "../constructStudy0_second.js"

// This function extends Phaser.Scene and includes the core logic for the scene
export default class TheEnd0First extends Phaser.Scene {
    constructor() {
        super({
            key: 'TheEnd0First'
        });
    }

    preload() {
        // load cloud sprites to add texture to background
        this.load.image('cloud1', './assets/imgs/cloud1.png');
    } 
    
    create() {
        // load a few cloud sprites dotted around
        const cloud1 = this.add.sprite(180, 100, 'cloud1');
        const cloud2 = this.add.sprite(320, 540, 'cloud1');
        const cloud3 = this.add.sprite(630, 80, 'cloud1');
        var gameHeight = this.sys.game.config.height;
        var gameWidth = this.sys.game.config.width;

        var titleText = '第一部分完成！'
        ///////////////////PAGE ONE////////////////////
        var mainTxt = ("  测验的第一部分结束！\n" +
                       "  请点击下方按钮。\n");
        var buttonTxt = "继续";
        var pageNo = 1;
        this.endPanel2 = new InstructionsPanel(this, gameWidth/2, gameHeight/2,
                                                pageNo, titleText, mainTxt, buttonTxt);
        // end scene
        eventsCenter.once('page1complete', function () {
            document.getElementById('game-container').style.display = "none";
            // save task data backup
            saveEndData(taskN);
            runStudy0Second(); //game then choice
            // window.removeEventListener('resize', resizeApp);
        }, this);
    }
    
    update(time, delta) {
    }
    
}
