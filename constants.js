// screen
const screenWidth = 1200;
const screenHeight = 900;
const offScreenDistance = 100;

// carp
const carpSpeed = 300;
const carpInerty = carpSpeed / 3;

// health bar
const healthBarWidth = 200;
const healthBarHeight = 20;
const healthBarColor = 0x00ff00;
const healthBarBorderColor = 0x000000;
const healthBarX = 50;
const healthBarY = 50;
const maxHealth = 100;

// end game
const endGameRectangleWidth = screenWidth;
const endGameRectangleHeight = 150;
const endGameRectangleColor = 0x000000;
const endGameRectangleOpacity = 0.5;
const endGameRectangleX = 0;
const endGameRectangleY = (screenHeight / 2) - (endGameRectangleHeight / 2);

// backgrounds
const backgrounds = createArray('background', 5);

// fishes
const fishModels = createArray('fish', 18);

const plantModels = createArray('plant', 10);

// sounds
const sounds = {
  'music': 'on_a_fishy_mission.mp3',
  'excellent': 'excellent.wav', 
  'holyshit': 'holyshit.wav', 
  'impressive': 'impressive.wav', 
  'sudden_death': 'sudden_death.wav', 
  'you_suck': 'yousuck.wav',
  'water_in': 'water_in.wav',
  'eat_1': 'eat_1.wav',
  'eat_2': 'eat_2.wav',
  'eat_3': 'eat_3.wav',
  'eat_4': 'eat_4.wav',
  'eat_5': 'eat_5.wav'
}
