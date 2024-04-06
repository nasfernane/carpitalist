let score = 0;
let scoreText;


const initScore = (scene) => {
  scoreText = scene.add.text(10, 20, 'Score: 0', { fontSize: '24px', fill: '#fff', fontFamily: '"Press Start 2P"'}).setText(`Score:${score}`);
}

const increaseScore = (scene, points = 10) => {
  score += points;
  scoreText.setText(`Score:${score}`);

  if (score == 30) playSound(scene, 'impressive')
}