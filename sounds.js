let music

const initMusic = (scene) => {
  music = scene.sound.add('music');
  music.setLoop(true);
  music.play();
}

const pauseMusic = (scene, duration = 1000) => {
  scene.tweens.add({
    targets: music,
    volume: 0,
    duration: duration,
    onComplete: () => {
        music.pause();
    }
});
}
const resumeMusic = (scene) => {
  music.resume();
  scene.tweens.add({
      targets: music,
      volume: 1,
      duration: 2000 
  });
}

const playSound = (scene, sound, volume = 0.2) => scene.sound.add(sound).setVolume(volume).play();

const playEatSound = (scene) => {
  const randomEatSound = 'eat_' + randomValueBetween(1, 5);
  playSound(scene, randomEatSound, 0.1);
}