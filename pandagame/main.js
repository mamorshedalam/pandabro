
function saveScore(score){
    console.log("save score")
}

class Main extends Phaser.Scene
{
    constructor ()
    {
        super();

        this.gameOver = false
        this.score = 0
    }

    preload ()
    {
        this.load.spritesheet('magic', 'assets/magic.png', { frameWidth: 128, frameHeight: 128 });
        this.load.spritesheet('player_idle', 'assets/player_idle.png', { frameWidth: 32, frameHeight: 27 });
        this.load.spritesheet('player_run', 'assets/player_run.png', { frameWidth: 48, frameHeight: 26 });

        this.load.image("bg","assets/bg2.png")
        this.load.image("player","assets/player.png")
        this.load.image("coin","assets/coin.png")
        this.load.image("redCoin","assets/redCoin.png")

        this.load.image("smallCoin","assets/smallCoin.png")

    }

    create ()
    {
        this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        // const bg = this.add.image(this.cameras.main.centerX,this.cameras.main.centerY,"background")
        
        this.bg = this.add.tileSprite(0, 0, 600, 700, "bg").setOrigin(0,0)


        this.player = new Player(this)

        this.coins = []
        this.particles = []
        this.gameOver = false

        this.scoreText = this.add.text(this.sys.game.canvas.width/2 - 40, 20, 'score: 0', { font: 'atari' });
        this.scoreText.setFont('atari');
        this.scoreText.setFontSize(16)
        this.scoreText.setTint(0xffff);
        this.scoreText.x = 10

        this.anims.create({
            key: 'magicAnim',
            frames: this.anims.generateFrameNumbers('magic', { frames: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27 ] }),
            frameRate: 60,
            repeat: 0
        });

        let that = this
        this.movePlayer = false

        this.input.on('pointerdown', function (pointer) {
            that.movePlayer = true
        });
        this.input.on('pointerup', function (pointer) {
            that.movePlayer = false
        });

        // this.add.particles(500, 200, 'star', {
        //     speed: 100,
        //     lifespan: 3000,
        //     gravityY: 200
        // });
    }

    replay(){
        this.gameOver = false
        this.score = 0
        this.coins.forEach((coin)=>{
            coin.destroy()
        })
        this.particles.forEach((p)=>{
            p.destroy()
        })
        this.coins = []
        this.player.p.body.position.x = this.sys.game.canvas.width/2
        this.gameOverText.destroy()
        this.movePlayer = false
    }
    
    randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    spawnCoin(){
        let rand = Math.floor(Math.random() * 300)
        if(rand < 5){
            let coinType = "coin"
            if (this.randomRange(0,10) < 3){
                coinType = "redCoin"
            }
            let coin = this.physics.add.sprite(this.randomRange(32,this.sys.game.canvas.width-32), -50,coinType);
            coin.body.velocity.y = this.randomRange(120,300)
            coin.body.setSize(32,32)
            coin.setScale(1);
            coin.coinType = coinType
            this.physics.add.overlap(this.player.p, coin, this.checkCoinCollide, null, this);
            this.coins.push(coin)
        }
    }
    checkCoinCollide(player,coin){
        let playerBounds = new Phaser.Geom.Rectangle(player.x - 16, player.y - 13.5, 32, 27); // Adjust these values as needed
        let coinBounds = new Phaser.Geom.Rectangle(coin.x - 16, coin.y - 16, 32, 32);
    
        if (!Phaser.Geom.Intersects.RectangleToRectangle(playerBounds, coinBounds)) {
           return
        }
        if(coin.coinType == "redCoin"){
            this.gameOver = true;
            this.gameOverText = this.add.text(this.sys.game.canvas.width/2 - 40, 20, 'game over!', { font: 'atari' });
            this.gameOverText.setFont('atari');
            this.gameOverText.setFontSize(48)
            this.gameOverText.setTint(0xff2212);
            this.gameOverText.x = this.sys.game.canvas.width/2 - this.gameOverText.width/2 
            this.gameOverText.y = this.sys.game.canvas.height/2 - this.gameOverText.height/2 
            this.gameOverText.setInteractive()
            this.gameOverText.on('pointerdown', () => { this.replay() });

            this.player.p.body.velocity.x = 0
            saveScore(this.score)

        }

        let particlePosX = coin.body.position.x
        let particlePosY = coin.body.position.y

        const index = this.coins.indexOf(coin);
        if (index > -1) {
            this.coins.splice(index, 1);
        }
        coin.destroy()
        this.score += this.randomRange(1,5)
        this.scoreText.text = "score: " + this.score
        this.magic = this.physics.add.sprite(particlePosX , particlePosY,'player');
        this.magic.anims.play('magicAnim')
        this.particles.push(this.magic)
    }

    update(){
        if(this.gameOver){
            if(this.keyEnter.isDown){
                this.replay()
            }
            return
        }
        if(this.movePlayer){
            this.player.p.body.position.x = this.sys.game.input.activePointer.x - 32
            // this.player.p.body.position.y = game.input.mousePointer.y
        }

        this.spawnCoin()

        // this.bg.tilePositionX += 0.02 * this.sys.game.loop.delta;
        // this.bg.tilePositionY -= 0.01 * this.sys.game.loop.delta;

        // for(let i = 0 ; i < this.grounds.length;i++){
        //     this.grounds[i].body.velocity.x = -1
        // }

        this.player.update()
    }

}

const config = {
    type: Phaser.CANVAS,
    parent: 'phaser-example',
    width: 600,
    height: 700,
    pixelArt: true,
    parent :'game',
    scene: [ Main ],
    scale: {
        // mode: Phaser.Scale.FIT,
    },
    willReadFrequently: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false 
        }
    }
};

const game = new Phaser.Game(config);
