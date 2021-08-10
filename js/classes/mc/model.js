class Model{
    constructor(){
        this._score=0;  
        this.soundOn=true; 
        this.musicOn=true;

    }

    set score(val){
        this._score = val;
        console.log("score updated");
        emitter.emit(G.SCORE_UPDATED);
    }

    get score(){
        return this._score;
    }

}