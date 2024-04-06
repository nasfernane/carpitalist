let carp;
let currentVelocityX = 0;
let currentVelocityY = 0;
let carpScale = 0.3
let currentDirection = 'right';

const initCarp = (scene) => {
  carp = scene.physics.add.sprite(100, screenHeight / 2, 'carp');
  carp.setScale(carpScale);
  carp.setBounce(0);
  carp.setCollideWorldBounds(true);

  createCarpAnimations(scene);

  cursors = scene.input.keyboard.createCursorKeys();
}

createCarpAnimations = (scene) => {
  scene.anims.create({
    key: 'left',
    frames: scene.anims.generateFrameNumbers('carp', { start: 0, end: 2 }),
    frameRate: 5,
    repeat: 0
  });

  scene.anims.create({
    key: 'standingLeft',
    frames: [ { key: 'carp', frame: 2 } ],
    frameRate: 5,
  });

  scene.anims.create({
    key: 'standingRight',
    frames: [ { key: 'carp', frame: 0 } ],
    frameRate: 5,
  });

  scene.anims.create({
    key: 'right',
    frames: scene.anims.generateFrameNumbers('carp', { start: 2, end: 4 }),
    frameRate: 5,
    repeat: 0
  });
 
}

handleCarpMovements = () => {
  if (cursors.left.isDown) {
    if (currentDirection !== 'left') {
      currentVelocityX = -carpSpeed
      carp.anims.play('left', true);
      currentDirection = 'left';
    }
  } else if (cursors.right.isDown) {
    if (currentDirection !== 'right') {
      currentVelocityX = carpSpeed
      carp.anims.play('right', true);
      currentDirection = 'right';
    }
  } else if (currentDirection == 'left') {
    carp.anims.play('standingLeft', true);
    currentVelocityX =  -carpInerty;
  } else {
    carp.anims.play('standingRight', true);
    currentVelocityX =  carpInerty;
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