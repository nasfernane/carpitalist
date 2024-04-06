const createArray = (category, number) => Array(number).fill().map((_, index) => `${category}_${index + 1}`);
const randomValueBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;