const generateRandomPlant = (scene) => {
  const model = plantModels[Math.floor(Math.random() * plantModels.length)]

  const plant = plants.create(randomValueBetween(0, screenWidth), screenHeight - 30, model);
  plant.alpha = 0;
  scene.tweens.add({
      targets: plant,
      alpha: 1,
      duration: 1000,
      ease: 'Linear',
      onComplete: () => {
          scene.physics.add.collider(carp, plant, () => collectPlant(carp, plant, scene));
      }
  });
}

const collectPlant = (carp, plant, scene) => {
  plant.destroy();
  increaseScore(scene);
  growCarp();
  updateHealth(scene, 10);
}