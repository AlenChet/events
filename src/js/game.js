export default class Game {
  constructor(elem) {
      this.elem = elem;
      this.infoMsg = elem.querySelector(".info .msg");
      this.infoMiss = elem.querySelector(".info .miss");
      this.msg = 0;
      this.miss = 0;
  }

  init() {
      this.elem.addEventListener("click", (e) => {
          const cell = e.target.closest(".grid-cell");
          if (cell) {
              const icon = cell.querySelector(".icon");
              if (icon) {
                  this.hit();
                  icon.remove();
              }
          }
      });
  }

  hit() {
      this.msg += 1;
      this.infoMsg.textContent = this.msg;
  }

  missed() {
      this.miss += 1;
      this.infoMiss.textContent = this.miss;
      if (this.miss === 5) {
          alert("Game Over");
          this.resetGame();
      }
  }

  resetGame() {
      this.msg = 0;
      this.miss = 0;
      this.infoMsg.textContent = "0";
      this.infoMiss.textContent = "0";
  }
}
