class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
        //this.words = ["Potato", "Mango", "Cat"];
    }
    preload()
    {
    	//load our images or sounds 
        this.load.image('bee', 'images/bee.png');
        this.load.image('pencil', 'images/pencil128.png');
        this.load.image('balloon', 'images/balloonG.png');
        this.load.image('background', 'images/sky.jpg');

        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('button2', 'images/ui/buttons/2/3.png');
        //this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
        //this.load.audio('backgroundMusic', ['audio/background.mp3', 'audio/background.ogg']);

        this.load.image('toggleBack', 'images/ui/toggles/1.png');
        this.load.image('sfxOff', 'images/ui/icons/sfx_off.png');
        this.load.image('sfxOn', 'images/ui/icons/sfx_on.png');
        this.load.image('musicOff', 'images/ui/icons/music_off.png');
        this.load.image('musicOn', 'images/ui/icons/music_on.png');
        
    }
    create() {
        this.background=this.add.image(0,0,'background');
        this.background.setOrigin(0,0);
        /*

       //toggle button stuff
       var toggleBUtton = new ToggleButton({scene:this, backKey:'toggleBack', onIcon:'musicOn', offIcon:'musicOff', event:G.TOGGLE_MUSIC, x:240, y:500});

       //media stuff
       var mediaManager = new MediaManager({scene:this});
       mediaManager.setBackgroundMusic('backgroundMusic');
    

       //score stuff
       this.sb=new ScoreBox({scene:this});
       this.sb.x=game.config.width/2;
       this.sb.y=50;

       model.score = 100;
       console.log("Ready!");


       //grid stuff
       /*
       var gridConfig={rows:5, cols:5, scene:this};
       var alignGrid=new AlignGrid(gridConfig);
       alignGrid.show();

       //var bee = this.add.image(0,0,'bee');
       //Align.center(bee);

       //placing image in grid
       alignGrid.showNumbers();
       this.bee=this.add.sprite(0,0,'bee');
       //this.bee.setOrigin(0.5, 0.5);
       //alignGrid.placeAt(2,2,this.bee);
       alignGrid.placeAtIndex(7, this.bee);
       // ** add back later

       //button stuff
       var fireText ={color:'black', fontSize:30};
       var flatButton = new FlatButton({scene: this, key: 'button1', text: 'Fire!', x:game.config.width/2, y:200, event:'button_pressed', params:'fire_lasers', textConfig:fireText});
       var flatButton2 = new FlatButton({scene: this, key: 'button2', text: 'Destruct!', x:240, y:400, event:'button_pressed', params: 'self_destruct'});

        emitter.on('button_pressed', this.buttonPressed,this);
        */
        emitter = new Phaser.Events.EventEmitter();  //should be first in create
        controller = new Controller();

        
        var mediaManager = new MediaManager({scene:this});
        var sb = new SoundButtons({scene:this});
        /*
        //Progress bar?
        var bar = new Bar({scene:this, x:240, y:320});
        //bar.setPercent(.5);
        */

        //CODING THE PENCIL POP GAME 8/10
        var gridConfig={rows:8, cols:10, scene:this};
        var alignGrid=new AlignGrid(gridConfig);
        //alignGrid.show();
        //alignGrid.showNumbers();

        
        var words = ["cat", "mango", "avocado"];
        
        //THIS WORKS (Word in Ballon - singular)
        /*
        var balloonGroup = this.add.group();
        this.balloon = this.physics.add.sprite(100, 100, 'balloon');
        this.balloon.setScale(.3);
        balloonGroup.add(this.balloon);
        this.text1 = this.add.text(100, 100, words[1]);
        this.text1.setOrigin(0.5,0.5);
        */
        var balloonGroup = this.add.group();
        this.balloon = this.physics.add.sprite(100, 100, 'balloon');
        this.balloon.setScale(.3);
        balloonGroup.add(this.balloon);
        this.text1 = this.add.text(100, 100, words[1]);
        this.text1.setOrigin(0.5,0.5);


        
        
       /*
        var balloonGroup=this.add.group();
        for (var i = 0; i <= 10; i++){
            var rng = Phaser.Math.Between(0,69);
            var balloon = this.physics.add.sprite(0, 0, 'balloon');
            balloon.setScale(.3);
            alignGrid.placeAtIndex(rng, balloon);
            balloonGroup.add(balloon);
        }*/
        


        //console.log("this.text1 " + this.text1);
        //this.text1.destroy();


        this.pencil = this.physics.add.sprite(300,600, 'pencil');
        //this.pencil.displayWidth=50;
        //this.pencil.scaleY=this.pencil.scaleX;
        this.pencil.setScale(.3);
        this.pencil.body.drag.set(250);
        this.pencil.body.maxVelocity.set(200);
        this.pencil.setCollideWorldBounds(true);
        //this.pencil.body.colliderWorldBounds = true;

        this.bee = this.physics.add.sprite(300, 200, 'bee');

        //groups?
        this.balloonGroup= this.physics.add.group({
            key: 'balloon',
            //frame: [0,1,2],
            frameQuantity: 10,
            bounceX: 1,
            bounceY: 1,
            //angularVelocity: 1,
            collideWorldBounds: true
        });
        this.balloonGroup.children.iterate(function(child){
            var xx = Math.floor(Math.random() * this.background.displayWidth);
            var yy = Math.floor(Math.random() * this.background.displayHeight);

            child.x = xx;
            child.y = yy;
            child.setScale(.3);
            //AlignGrid.scaleToGameW(child.image,.3);
            var vx = Math.floor(Math.random()*2)-1;
            var vy = Math.floor(Math.random()*2)-1;
            if(vx == 0 && vy == 0){
                vx=1;
                vy=1;
            }
            console.log("CODE UPDATED 11:00am");

            var speed = Math.floor(Math.random()*100)+10;
            child.body.setVelocity(vx*speed, vy*speed);
        }.bind(this));

        this.physics.add.collider(this.balloonGroup);

        this.physics.add.collider(this.pencil, this.balloonGroup,this.destroyBalloon, null, this);

        this.physics.add.collider(this.pencil, this.bee, function(pencil, bee){
            bee.destroy();
            
        });

        
        this.physics.add.collider(this.pencil, this.balloon, function(pencil, balloon){
            balloon.destroy();
            this.text1.destroy();
        }.bind(this));
        


        this.cursors = this.input.keyboard.createCursorKeys();

    }

    destroyBalloon(pencil, balloon){
        balloon.destroy();
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
    }
    //can put custom functions after (TEST)

}