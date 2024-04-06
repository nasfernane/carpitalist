
let currentVelocityX = 0;
let currentVelocityY = 0;
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