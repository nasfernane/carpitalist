let healthBar;
let heartIcon;
let currentHealth = 100;

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
    }, 2000);
}

const updateHealth = (scene, increment) => {
    currentHealth += increment;
    if (currentHealth < 0) endGame(scene);

    const healthWidth = ((currentHealth) / maxHealth) * healthBarWidth;

    healthBar.clear();
    healthBar.fillStyle(healthBarColor, 1);
    healthBar.fillRect(50, 50, healthWidth, healthBarHeight);
}

const endGame = (scene) => {
  scene.scene.pause();
  scene.add.image(600, 450, 'endgame');
}
