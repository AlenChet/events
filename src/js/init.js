import Game from "./game";

export default class Character {
  constructor(elem) {
    this.cell = elem.querySelectorAll(".grid-cell");
    this.game = new Game(elem);
    this.icon = document.createElement("img");
    this.icon.src = "img/goblin.png";
    this.icon.classList.add("icon");
  }

  init() {
    this.game.init();
    this.getRandomPosition();
  }

  getRandomPosition() {
    let previous = -1;
    let i = 0;

    const interval = setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * this.cell.length);
      }
      if (this.cell[previous] && this.cell[previous].querySelector(".icon")) {
        this.game.missed();
        if (this.game.miss === 5) {
          clearInterval(interval);
          alert("Вы проиграли!"); 
        }
      }
      previous = i;
      this.cell[i].appendChild(this.icon);
    }, 1000);
  }
}
