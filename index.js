var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    this.load.image('sky', 'assets/img/sky.png');
    this.load.image('ground', 'assets/img/platform.png');
    this.load.image('star', 'assets/img/star.png');
    this.load.image('bomb', 'assets/img/bomb.png');
    this.load.spritesheet('dude', 'assets/img/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );
}

function create (){
    this.add.image(400, 300, 'sky');
}

function update (){
    console.log("hol5")
}