const createArray = (category, number) => Array(number).fill().map((_, index) => `${category}_${index + 1}`);
const randomValueBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getScreenCenterCoordinates = (scene) => {
  const screenCenterX = scene.cameras.main.worldView.x + scene.cameras.main.width / 2;
  const screenCenterY = scene.cameras.main.worldView.y + scene.cameras.main.height / 2;

  return { screenCenterX, screenCenterY }
}