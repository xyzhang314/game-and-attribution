// End scene to inform participants they have finished the task, and route them to the post-task questions

// import js game element modules (sprites, ui, outcome animations)
import InstructionsPanel from "../elements/instructionsPanel.js";

// import our custom events centre for passsing info between scenes and data saving function
import eventsCenter from "../eventsCenter.js";

// this function extends Phaser.Scene and includes the core logic for the scene
export default class GameEndScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameEndScene'
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

        var titleText = '游戏结束'
        ///////////////////PAGE ONE////////////////////
        var mainTxt = ( "  接下来，我们将询问你一些  \n"+
                        "  关于 [b]当前[/b] 感受的小问题。 \n\n"+
                       
                        "请点击下方按钮。\n");
        var buttonTxt = "继续";
        var pageNo = 1;
        this.endPanel = new InstructionsPanel(this, gameWidth/2, gameHeight/2,
                                                pageNo, titleText, mainTxt, buttonTxt);
        // end scene
        eventsCenter.once('page1complete', function () {
            this.nextScene();
        }, this);
    }
    
    update(time, delta) {
    }
    
    nextScene() {
        this.scene.start('PostTaskQuestions');
    } 
}