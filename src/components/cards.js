import svgFileNames from "./svgFileNames.js";

const cards = {};

for (let i = 0; i < 100; i++) {
  cards[i] = {
    id: i,
    clicked: false,
    src: svgFileNames[i],
  };
}

export default cards;
