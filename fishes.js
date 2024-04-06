const fishModels = ['fish_1', 'fish_2', 'fish_3', 'fish_4']
const directions = ['_left', 'bottom_left', 'top_left', '_right', 'bottom_right', 'top_right']

const fishes = [
  {
    direction: '_left',
    startX: 1200,
    startY: 450,
    endX: -100,
    endY: 200,
    duration: 9000
  }
]

const generateRandomFish = (scene) => {
  const movementDirection = directions[Math.floor(Math.random() * directions.length)]
  const modelDirection = movementDirection.includes('_left') ? '_left' : '_right'
  const model = fishModels[Math.floor(Math.random() * fishModels.length)] + modelDirection

  const { startX, startY, endX, endY } = randomFishTrajectory(movementDirection)
  fish = scene.physics.add.sprite(startX, startY, model);

  scene.tweens.add({
    targets: fish,
    x: endX,
    y: endY,
    duration: randomFishSpeed(),
    onComplete: function () {
        fish.destroy();
    }
  });
}

const randomFishTrajectory = (movementDirection) => {
  switch (movementDirection) {
    case '_left':
      return {
        startX: screenWidth + offScreenDistance,
        startY: randomValueBetween(0, screenHeight),
        endX: -offScreenDistance,
        endY: randomValueBetween(0, screenHeight)
      }
    case 'top_left':
      return {
        startX: randomValueBetween(screenWidth / 2, screenWidth),
        startY: screenHeight + offScreenDistance,
        endX: randomValueBetween(0, screenWidth / 2),
        endY: -offScreenDistance,
      }
    case 'bottom_left':
      return {
        startX: randomValueBetween(screenWidth / 2, screenWidth + offScreenDistance),
        startY: -offScreenDistance,
        endX: randomValueBetween(-offScreenDistance, screenWidth / 2),
        endY: screenHeight + offScreenDistance,
      }
    case '_right':
      return {
        startX: -offScreenDistance,
        startY: randomValueBetween(0, screenHeight),
        endX: screenWidth + offScreenDistance,
        endY: randomValueBetween(0, screenHeight)
      }
    case 'top_right':
      return {
        startX: randomValueBetween(0, screenWidth / 2),
        startY: screenHeight + offScreenDistance,
        endX: randomValueBetween(screenWidth / 2, screenWidth),
        endY: -offScreenDistance,
      }
    case 'bottom_right':
      return {
        startX: randomValueBetween(0, screenWidth / 2),
        startY: -offScreenDistance,
        endX: randomValueBetween(screenWidth / 2, screenWidth),
        endY: screenHeight + offScreenDistance,
      }
    default:
      break;
  }
}

randomFishSpeed = (min = 5, max = 15) => randomValueBetween(min, max) * 1000;
