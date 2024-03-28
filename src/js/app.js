import Character from "./init";
import Game from "./game";

const container = document.querySelector(".grid-container");
const game = new Game(container);
game.init();

const character = new Character(container);
character.init();