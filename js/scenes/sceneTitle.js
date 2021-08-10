class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
    	this.load.image('title','images/title.png');
        this.load.image('button1', 'images/ui/buttons/2/1.png');
    }
    create() {
        console.log("SceneTitle!");

        //need to put this in first scene of the game
       emitter = new Phaser.Events.EventEmitter();  //should be first in create
       controller = new Controller();

        this.alignGrid=new AlignGrid({rows:11, cols:11, scene:this});
        //this.alignGrid.showNumbers();
        //this.alignGrid.show();

        var title = this.add.image(0,0, 'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var btnStart = new FlatButton({scene:this, key:'button1', text:'start', event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        emitter.on('start_game', this.startGame, this);        

    }

    startGame(){
        this.scene.start('SceneMain');
    }
    update() {}
}