var game;
var model;
var emitter;
var G;
var controller;
var curVocab;
var words;
var definitions;
var curIndex;

window.onload=function()
{
	var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 640,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
                debug: false
            }
        },
        scene: [SceneTitle, SceneMain, SceneOver]
    };
    G = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
    curVocab = "curVocab";
    words = ["cat", "mango", "avocado", "Santi", "Angela"];
    definitions = ["A cute animal", "Sweet, exotic fruit", "Green fruit with a pit", "The bear", "The Grizz"];
    curIndex = Phaser.Math.Between(0, 4);

}