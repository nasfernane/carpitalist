let score = 0;
let scoreText;


const initScore = (scene) => {
  scoreText = scene.add.text(10, 20, `Score: ${score}`, { fontSize: '24px', fill: '#fff', fontFamily: '"Press Start 2P"'})
}

const increaseScore = (scene, points = 10) => {
  score += points;
  scoreText.setText(`Score:${score}`);

  if (score == 300) playSound(scene, 'impressive')
  if (score == 1000) playSound(scene, 'excellent')
  if (score == 1500) playSound(scene, 'holyshit')
}