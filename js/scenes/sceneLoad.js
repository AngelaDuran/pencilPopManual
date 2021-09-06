class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }

    preload(){
        
        //progress udpate (load exclusive)
        this.staticText=this.add.text(game.config.width/2, game.config.height/2-50,"Game Load Progress",{fontFamily: "Doppio One", color: '#ffffff'});
        this.staticText.setOrigin(0.5, 0.5);
        this.staticText.setScale(2);

        this.progText=this.add.text(game.config.width/2, game.config.height/2,"0%",{fontFamily: "Doppio One", color: '#ffffff'});
        this.progText.setOrigin(0.5, 0.5);
        this.progText.setScale(2);
        this.load.on('progress', this.onProgress, this);

        //load our images or sounds 
        this.load.image('keyboard', 'images/keyboard2.png');

        this.load.image('bee', 'images/bee.png');
        this.load.image('pencil', 'images/pencilOutlined.png');
        this.load.image('balloon', 'images/balloonG.png');
        this.load.image('bigSky', 'images/newSky.jpg');

        this.load.image('V0', 'images/vocab balloons/apt.png');
        this.load.image('V1', 'images/vocab balloons/knave.png');
        this.load.image('V2', 'images/vocab balloons/conscience.png');
        this.load.image('V3', 'images/vocab balloons/obliged.png');
        this.load.image('V4', 'images/vocab balloons/promptly.png');
        this.load.image('V5', 'images/vocab balloons/prose.png');
        this.load.image('V6', 'images/vocab balloons/stockade.png');
        this.load.image('V7', 'images/vocab balloons/tallow.png');
        this.load.image('V8', 'images/vocab balloons/testy.png');
        this.load.image('V9', 'images/vocab balloons/wharf.png');

        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('button2', 'images/ui/buttons/2/3.png');
        this.load.audio('pop', 'audio/pop3.mp3');
        this.load.audio('backgroundMusic', 'audio/SOSOtrim.mp3');
    }

    onProgress(value){
        var per = Math.floor(value * 100);
        this.progText.setText(per + "%");
    }

    create(){
        this.scene.start("SceneTitle");
    }
}