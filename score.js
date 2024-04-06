let score = 0;
let scoreText;


const initScore = (scene) => {
  scoreText = scene.add.text(10, 15, 'Score: 0', { fontSize: '24px', fill: '#fff', fontFamily: '"Press Start 2P"'});
}

const increaseScore = (points = 10) => {
  score += points;
  scoreText.setText(`Score:${score}`);
}