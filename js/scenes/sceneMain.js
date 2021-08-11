class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    	//load our images or sounds 
        this.load.image('bee', 'images/bee.png');
        this.load.image('button1', 'images/ui/buttons/2/1.png');
        this.load.image('button2', 'images/ui/buttons/2/3.png');
        this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
        this.load.audio('backgroundMusic', ['audio/background.mp3', 'audio/background.ogg']);

        this.load.image('toggleBack', 'images/ui/toggles/1.png');
        this.load.image('sfxOff', 'images/ui/icons/sfx_off.png');
        this.load.image('sfxOn', 'images/ui/icons/sfx_on.png');
        this.load.image('musicOff', 'images/ui/icons/music_off.png');
        this.load.image('musicOn', 'images/ui/icons/music_on.png');
    }
    create() {
        /*
       //define our objects
    
       //ONLY NEEDED IN FIRST SCENE
       //emitter = new Phaser.Events.EventEmitter();  //should be first in create
       //controller = new Controller();

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
        var bar = new Bar({scene:this, x:240, y:320});
        //bar.setPercent(.5);

        console.log("finished scene main!");

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
    }
    //can put custom functions after (TEST)

}