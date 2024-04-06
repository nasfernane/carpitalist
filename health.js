let healthBar;
let heartIcon;
let currentHealth = 100;
let endGameText;
let gameHasEnded = false;

function initHealthBar(scene) {
    healthBar = scene.add.graphics();
    healthBar.lineStyle(2, healthBarBorderColor);
    healthBar.strokeRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);
    healthBar.fillStyle(healthBarColor, 1);
    healthBar.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

    heartIcon = scene.add.image(healthBarX - 40, healthBarY - 5, 'heart');
    heartIcon.setOrigin(0, 0); 
    heartIcon.displayWidth = 30;
    heartIcon.displayHeight = 30;

    setInterval(() => {
      updateHealth(scene, -5)
    }, 1000);
}

const updateHealth = (scene, increment) => {
    currentHealth += increment;
    if (currentHealth > 100) currentHealth = 100;
    if (currentHealth < 0) {
      currentHealth = 0;
      endGame(scene);
    }

    const healthWidth = ((currentHealth) / maxHealth) * healthBarWidth;

    healthBar.clear();
    healthBar.fillStyle(healthBarColor, 1);
    healthBar.fillRect(50, 50, healthWidth, healthBarHeight);
}

const endGame = (scene) => {
  if (gameHasEnded) return;
  pauseMusic();
  playSound(scene, 'you_suck');

  gameHasEnded = true;
  const screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
  const screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;

  const endGameRectangle = scene.add.graphics();
  endGameRectangle.fillStyle(endGameRectangleColor, endGameRectangleOpacity);
  endGameRectangle.fillRect(endGameRectangleX, endGameRectangleY, endGameRectangleWidth, endGameRectangleHeight);

  scene.scene.pause();
  scoreText = scene.add.text(screenCenterX, screenCenterY, 'YOU DIED', { fontSize: '70px', fill: '#CB1D11', fontFamily: '"Press Start 2P"'}).setOrigin(0.5);
}
