class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds 
        this.load.image('bee', 'images/bee.png');
        this.load.image('pencil', 'images/pencil128.png');
        this.load.image('balloon', 'images/balloonG.png');
        this.load.image('background', 'images/sky.jpg');

        this.load.image('V0', 'images/vocab balloons/V0.png');
        this.load.image('V1', 'images/vocab balloons/V1.png');
        this.load.image('V2', 'images/vocab balloons/V2.png');
        this.load.image('V3', 'images/vocab balloons/V3.png');
        this.load.image('V4', 'images/vocab balloons/V4.png');

        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('button2', 'images/ui/buttons/2/3.png');
        //this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
        //this.load.audio('backgroundMusic', ['audio/background.mp3', 'audio/background.ogg']);

    }
    create() {
        this.background=this.add.image(0,0,'background');
        this.background.setOrigin(0,0);
        
        emitter = new Phaser.Events.EventEmitter();  //should be first in create
        controller = new Controller();

        //CODING THE PENCIL POP GAME 8/10
        var gridConfig={rows:8, cols:10, scene:this};
        var alignGrid=new AlignGrid(gridConfig);
        //alignGrid.show();
        //alignGrid.showNumbers();

        
        //var words = ["cat", "mango", "avocado", "Santi", "Angela"];
        //var definitions = ["A cute animal", "Sweet, exotic fruit", "Green fruit with a pit", "The bear", "The Grizz"];//add one more for loop

        var textD = this.add.text(50, 500, "Def GLOBAL", {color : '#f2ed57'});
        textD = this.change(textD);


        //Text format referance
        /*
        //this.changeDef(definitions);
        var textD = this.add.text(50, 300, "Def GLOBAL", {color : '#f7fc53'});
        //textD.destroy();
        textD = this.change(textD, definitions);
        */
    

        //want random numbers for velocity set

        this.balloon0 = this.physics.add.sprite(100,200, 'V0');
        this.balloon0.setScale(.3);
        this.balloon0.body.setVelocity(50, 200);
        this.balloon0.setCollideWorldBounds(true);
        this.balloon0.setBounce(1, 1);
        this.balloon0.setName(words[0]);

        this.balloon1 = this.physics.add.sprite(150,200, 'V1');
        this.balloon1.setScale(.3);
        this.balloon1.body.setVelocity(70, 100);
        this.balloon1.setCollideWorldBounds(true);
        this.balloon1.setBounce(1, 1);
        this.balloon1.setName(words[1]);

        this.balloon2 = this.physics.add.sprite(200,200, 'V2');
        this.balloon2.setScale(.3);
        this.balloon2.body.setVelocity(100, 100);
        this.balloon2.setCollideWorldBounds(true);
        this.balloon2.setBounce(1, 1);
        this.balloon2.setName(words[2]);

        this.balloon3 = this.physics.add.sprite(250,200, 'V3');
        this.balloon3.setScale(.3);
        this.balloon3.body.setVelocity(150, 80);
        this.balloon3.setCollideWorldBounds(true);
        this.balloon3.setBounce(1, 1);
        this.balloon3.setName(words[3]);

        this.balloon4 = this.physics.add.sprite(300,200, 'V4');
        this.balloon4.setScale(.3);
        this.balloon4.body.setVelocity(80, 90);
        this.balloon4.setCollideWorldBounds(true);
        this.balloon4.setBounce(1, 1);
        this.balloon4.setName(words[4]);


        this.pencil = this.physics.add.sprite(300,600, 'pencil');
        this.pencil.setScale(.3);
        this.pencil.body.drag.set(250);
        this.pencil.body.maxVelocity.set(200);
        this.pencil.setCollideWorldBounds(true);
        
        var arr = [this.balloon0, this.balloon1, this.balloon2, this.balloon3, this.balloon4];

        /*
        for(var i = 0; i <= 4; i++){
            this.physics.add.collider(this.pencil, arr[i], function(pencil, balloon){
                if (balloon.name == "jeff") { //change it to be cur def
                    balloon.destroy();
                  }
                else { //reset location if incorrect
                    this.balloon.setX(10);
                    this.balloon.setY(20);
                  }
            }.bind(this));
        }*/


        //Balloon pop mechanics
        var balloonBin = [this.balloon0,this.balloon1, this.balloon2,this.balloon3, this.balloon4];
        
        for(var i = 0; i <= 4; i++ ){
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
        var rand = Phaser.Math.Between(0, 4);
        while(definitions[rand] == ""){
            rand = Phaser.Math.Between(0, 4);
            console.log("Random Num Update");
        }
        console.log("Rand: " + rand);

        
        curVocab = words[rand];
        var wordHolder = definitions[rand];
        definitions[rand] = "";
        for(var i = 0; i <=3 ; i ++){
            console.log(definitions[i]+ " ");
        }

        return (this.add.text(50,500, "UPDATED: " + wordHolder, {color: '#f2ed57'}));
    }
    /*
    change(textD, def, words){
        textD.destroy();

        var rand = Phaser.Math.Between(0, 4);
        console.log("Rand: " + rand);
        while(def[rand] == ""){
            rand = Phaeser.Math.Between(0, 4);
        }
        console.log(def[rand]);
        
        curVocab = words[rand];
        var wordHolder = def[rand];
        def[rand] = "";

        return (this.add.text(50,500, "UPDATED: " + wordHolder, {color: '#f2ed57'}));
    }*/


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