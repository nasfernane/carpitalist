let carp;
let currentVelocityX = 0;
let currentVelocityY = 0;
let carpScale = 1

const createCarpAnimations = (scene) => {
  carp = scene.physics.add.sprite(100, screenHeight / 2, 'carp');

  carp.setBounce(0);
  carp.setCollideWorldBounds(true);

  scene.anims.create({
    key: 'left',
    frames: [ { key: 'carp', frame: 1 } ],
    frameRate: 20
  });

  scene.anims.create({
    key: 'right',
    frames: [ { key: 'carp', frame: 0 } ],
    frameRate: 20
  });

  cursors = scene.input.keyboard.createCursorKeys();
}

handleCarpMovements = () => {
  if (cursors.left.isDown) {
    currentVelocityX = -carpSpeed
    carp.anims.play('left', true);
  } else if (cursors.right.isDown) {
    currentVelocityX = carpSpeed
    carp.anims.play('right', true);
  } else {
    currentVelocityX = currentVelocityX < 0 ? -carpInerty : carpInerty
    carp.anims.play('right', true);
  }

  if (cursors.up.isDown) {
    currentVelocityY = -carpSpeed
  } else if (cursors.down.isDown) {
    currentVelocityY = carpSpeed
  } else {
    currentVelocityY = currentVelocityY < 0 ? -carpInerty : carpInerty
  }

  carp.setVelocityX(currentVelocityX);
  carp.setVelocityY(currentVelocityY);
}