let music

const initMusic = (scene) => {
  music = scene.sound.add('music');
  music.play();
}

const pauseMusic = () => music.pause();

const playSound = (scene, sound) => scene.sound.add(sound).setVolume(0.2).play();