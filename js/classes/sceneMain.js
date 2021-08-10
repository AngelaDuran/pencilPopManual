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
    }
    create() {
       //define our objects
       //score stuff
       emitter = new Phaser.Events.EventEmitter();  //should be first in create
       controller = new Controller();

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
       */

       //button stuff
       var fireText ={color:'black', fontSize:30};
       var flatButton = new FlatButton({scene: this, key: 'button1', text: 'Fire!', x:game.config.width/2, y:200, event:'button_pressed', params:'fire_lasers', textConfig:fireText});
       var flatButton2 = new FlatButton({scene: this, key: 'button2', text: 'Destruct!', x:240, y:400, event:'button_pressed', params: 'self_destruct'});

        emitter.on('button_pressed', this.buttonPressed,this);


    }

    buttonPressed(params){
        console.log(params);
    }

    update() {
        //constant running loop
    }
    //can put custom functions after (TEST)

}