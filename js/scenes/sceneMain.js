class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds 
        this.load.image('bee', 'images/bee.png');
        this.load.image('pencil', 'images/pencilOutlined.png');
        this.load.image('balloon', 'images/balloonG.png');
        this.load.image('background', 'images/sky.jpg');
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
        //this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
        //this.load.audio('backgroundMusic', ['audio/background.mp3', 'audio/background.ogg']);

    }
    create() {
        
        //this.background=this.add.image(0,0,'background');
        //this.background.setOrigin(0,0);
        this.bigSky = this.add.image(0,0, 'bigSky');
        this.bigSky.setOrigin(0,0);

        emitter = new Phaser.Events.EventEmitter();  //should be first in create
        controller = new Controller();

        //CODING THE PENCIL POP GAME 8/10
        var gridConfig={rows:8, cols:10, scene:this};
        var alignGrid=new AlignGrid(gridConfig);
        //alignGrid.show();
        //alignGrid.showNumbers();

        
        //var words = ["cat", "mango", "avocado", "Santi", "Angela"];
        //var definitions = ["A cute animal", "Sweet, exotic fruit", "Green fruit with a pit", "The bear", "The Grizz"];//add one more for loop

        
        //Intiial word display setup
        var textD = this.add.text(50, 550,"Definition: " + definitions[curIndex], {fontFamily: "Doppio One", color : '#000000'});
        textD.setScale(1.2);
        curVocab = words[curIndex];


        //Text format referance
        /*
        //this.changeDef(definitions);
        var textD = this.add.text(50, 300, "Def GLOBAL", {color : '#f7fc53'});
        //textD.destroy();
        textD = this.change(textD, definitions);
        */
    
        console.log("Dimsension update");

        
        //set of 10 balloon creation
        //in future may want to figure out a loop if possible to cleanup

        this.balloon0 = this.physics.add.sprite(100,200, 'V0');
        this.balloon0.setScale(.4);
        this.balloon0.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon0.setCollideWorldBounds(true);
        this.balloon0.setBounce(1, 1);
        this.balloon0.setName(words[0]);

        this.balloon1 = this.physics.add.sprite(150,200, 'V1');
        this.balloon1.setScale(.4);
        this.balloon1.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon1.setCollideWorldBounds(true);
        this.balloon1.setBounce(1, 1);
        this.balloon1.setName(words[1]);

        this.balloon2 = this.physics.add.sprite(200,200, 'V2');
        this.balloon2.setScale(.4);
        this.balloon2.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon2.setCollideWorldBounds(true);
        this.balloon2.setBounce(1, 1);
        this.balloon2.setName(words[2]);

        this.balloon3 = this.physics.add.sprite(250,200, 'V3');
        this.balloon3.setScale(.4);
        this.balloon3.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon3.setCollideWorldBounds(true);
        this.balloon3.setBounce(1, 1);
        this.balloon3.setName(words[3]);

        this.balloon4 = this.physics.add.sprite(300,200, 'V4');
        this.balloon4.setScale(.4);
        this.balloon4.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon4.setCollideWorldBounds(true);
        this.balloon4.setBounce(1, 1);
        this.balloon4.setName(words[4]);
        
        this.balloon5 = this.physics.add.sprite(320,200, 'V5');
        this.balloon5.setScale(.4);
        this.balloon5.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon5.setCollideWorldBounds(true);
        this.balloon5.setBounce(1, 1);
        this.balloon5.setName(words[5]);
        
        this.balloon6 = this.physics.add.sprite(340,200, 'V6');
        this.balloon6.setScale(.4);
        this.balloon6.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon6.setCollideWorldBounds(true);
        this.balloon6.setBounce(1, 1);
        this.balloon6.setName(words[6]);
        
        this.balloon7 = this.physics.add.sprite(360,200, 'V7');
        this.balloon7.setScale(.4);
        this.balloon7.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon7.setCollideWorldBounds(true);
        this.balloon7.setBounce(1, 1);
        this.balloon7.setName(words[7]);
        
        this.balloon8 = this.physics.add.sprite(380,200, 'V8');
        this.balloon8.setScale(.4);
        this.balloon8.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon8.setCollideWorldBounds(true);
        this.balloon8.setBounce(1, 1);
        this.balloon8.setName(words[8]);
        
        this.balloon9 = this.physics.add.sprite(400,200, 'V9');
        this.balloon9.setScale(.4);
        this.balloon9.body.setVelocity(Phaser.Math.Between(40, 90), Phaser.Math.Between(40, 90));
        this.balloon9.setCollideWorldBounds(true);
        this.balloon9.setBounce(1, 1);
        this.balloon9.setName(words[9]);


        this.pencil = this.physics.add.sprite(300,600, 'pencil');
        this.pencil.setScale(.4);
        this.pencil.body.drag.set(250);
        this.pencil.body.maxVelocity.set(200);
        this.pencil.setCollideWorldBounds(true);

        
        
        

        var balloonBin = [this.balloon0,this.balloon1, this.balloon2,this.balloon3, this.balloon4, this.balloon5, this.balloon6, this.balloon7, this.balloon8, this.balloon9];
        
        //Balloon pop mechanics
        for(var i = 0; i <= 9; i++ ){
            this.physics.add.collider(this.pencil, balloonBin[i], function(pencil, balloon){
                if (balloon.name == curVocab) { //change it to be cur def
                    textD = this.change(textD);
                    console.log(this.textD);
                    balloon.destroy();
                }
                else { //reset location if incorrect
                    balloon.setX(Phaser.Math.Between(20, 750));
                    balloon.setY(Phaser.Math.Between(20, 600));
                }
            }.bind(this));
        }
        


        this.cursors = this.input.keyboard.createCursorKeys();

    }


    change(textD){

        textD.destroy();
        definitions[curIndex] = "";
        var counter = 0; //escape loop if array is empty

        while(definitions[curIndex] == "" && counter < 10){
            curIndex = Phaser.Math.Between(0, 9);
            console.log("Random Num Update To: " + curIndex);
            counter ++;
        }

        if (counter < 10){
        curVocab = words[curIndex];
        }
        else{ //all words used
            curVocab = "";
        }

        var textHolder = this.add.text(50,550, "Definition: " + definitions[curIndex], {fontFamily: "Doppio One", color: '#000000'})
        textHolder.setScale(1.2);

        return (textHolder);
    }


/*
    buttonPressed(params){
        console.log(params);
        var switched = !model.musicOn;
        model.musicOn = switched;
    }
    */

    update() {
        //constant running loop
        if (this.cursors.left.isDown) {
            this.pencil.rotation -= 0.1;
        }
        else if (this.cursors.right.isDown) {
            this.pencil.rotation += 0.1;
        }
        if (this.cursors.up.isDown) {
          console.log("key presssed");
          this.physics.velocityFromRotation(this.pencil.rotation - Math.PI/2, 200, this.pencil.body.acceleration);
        }
        else {
          this.pencil.body.acceleration.set(0);
        }

        //console.log(this.curWord);

    }
    //can put custom functions after (TEST)

}