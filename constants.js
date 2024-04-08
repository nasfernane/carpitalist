// screen
const screenWidth = 1200;
const screenHeight = 900;
const offScreenDistance = 100;

// levels
const levelDuration = 60000;
const levelsAmount = 3;

// transitions
const transitions = [
  [
    { position: -10, fontSize: '36px', label: "Hello Carp'tain!" },
    { position: 40, fontSize: '20px', label: "Your mission here is simple:" },
    { position: 80, fontSize: '20px', label: "You gotta eat everything that crosses your path" },
    { position: 120, fontSize: '20px', label: "Hunger is irrelevant, you need to get it all!" },
    { position: 160, fontSize: '20px', label: "Why? Erm... I don't know... Freedom?" },
    { position: 200, fontSize: '20px', label: "Yes, definitely freedom!" },
    { position: 300, fontSize: '20px', label: "Press $ to start" },
  ],
  [
    { position: -10, fontSize: '36px', label: "What the fuck was that?" },
    { position: 40, fontSize: '20px', label: "You barely ate anything..." },
    { position: 80, fontSize: '20px', label: "Stop fooling around like a Marlin Monroe and" },
    { position: 120, fontSize: '20px', label: "become Gengis Kharp, conqueror of the abysses!" },
    { position: 200, fontSize: '20px', label: "You need to consume more... MORE!!!" },
    { position: 300, fontSize: '20px', label: "You still need to press $ to continue, tho" },
  ],
  [
    { position: -10, fontSize: '36px', label: "It's Kawai Haiku time!" },
    { position: 40, fontSize: '20px', label: "Take some time to rest and reflect" },
    { position: 80, fontSize: '20px', label: "on the consequences of your actions..." },
    { position: 140, fontSize: '18px', label: "Empty seas, silent tides", fontStyle: 'italic' },
    { position: 180, fontSize: '18px', label: "Woosh!", fontStyle: 'italic' },
    { position: 220, fontSize: '18px', label: "We're all gonna die", fontStyle: 'italic' },
    { position: 300, fontSize: '18px', label: "Remember the key to press?" },
  ],
  [
    { position: -10, fontSize: '36px', label: "Remarkarpable!" },
    { position: 40, fontSize: '20px', label: "You single-handedly extinguished several species" },
    { position: 80, fontSize: '20px', label: "and devastated countless corals" },
    { position: 120, fontSize: '20px', label: "An entire ecosystem collapsed due to your sole efforts!" },
    { position: 160, fontSize: '18px', label: "In the end, there were no resources left" },
    { position: 200, fontSize: '18px', label: "and you met a tragic demise... but it was totally" },
    { position: 240, fontSize: '18px', label: "worthwhile to assert your alpha carp dominance" },
    { position: 300, fontSize: '18px', label: "Press $ to face another inevitable doom" },
  ],
]

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
const backgrounds = createArray('background', 6);

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
