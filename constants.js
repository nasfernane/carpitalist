// screen
const screenWidth = 1200;
const screenHeight = 900;
const offScreenDistance = 100

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
const backgrounds = createArray('background', 5)
