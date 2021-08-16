var game;
var model;
var emitter;
var G;
var controller;
var curVocab;

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

}