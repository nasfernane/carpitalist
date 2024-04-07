let music

const initMusic = (scene) => {
  music = scene.sound.add('music');
  music.play();
}

const pauseMusic = () => music.pause();

const playSound = (scene, sound, volume = 0.2) => scene.sound.add(sound).setVolume(volume).play();

const playEatSound = (scene) => {
  const randomEatSound = 'eat_' + randomValueBetween(1, 5);
  playSound(scene, randomEatSound, 0.1);
}