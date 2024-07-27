class Player {
    constructor(scene) {
        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNumbers('player_idle', { frames: [0, 1, 2, 3] }),
            frameRate: 24,
            repeat: -1
        });
        scene.anims.create({
            key: 'run',
            frames: scene.anims.generateFrameNumbers('player_run', { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 24,
            repeat: -1
        });

        this.p = scene.physics.add.sprite(scene.sys.game.canvas.width / 2, scene.sys.game.canvas.height - 70, 'player_idle');
        this.p.anims.play('idle');
        this.p.setScale(2);
        this.p.body.setSize(64, 64);
        this.moveSpeed = 350;
        this.scene = scene;

        this.keyLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (this.keyLeft.isDown) {
            if (this.p.body.velocity.x !== -this.moveSpeed) {
                this.p.setVelocityX(-this.moveSpeed);
            }
            if (this.p.anims.currentAnim.key !== 'run') {
                this.p.anims.play('run');
            }
            this.p.setFlipX(true); // Flip the sprite horizontally when moving left
        } else if (this.keyRight.isDown) {
            if (this.p.body.velocity.x !== this.moveSpeed) {
                this.p.setVelocityX(this.moveSpeed);
            }
            if (this.p.anims.currentAnim.key !== 'run') {
                this.p.anims.play('run');
            }
            this.p.setFlipX(false); // Do not flip the sprite when moving right
        } else {
            this.p.setVelocityX(0);
            if (this.p.anims.currentAnim.key !== 'idle') {
                this.p.anims.play('idle');
            }
        }

        if (this.p.body.position.x < -50) {
            this.p.body.position.x = -50;
        }
        if (this.p.body.position.x > this.scene.sys.game.canvas.width - 90) {
            this.p.body.position.x = this.scene.sys.game.canvas.width - 90;
        }
    }

    stop() {
        this.p.body.velocity.x = 0;
        this.p.body.velocity.y = 0;
    }
}
