console.log('hello world');

const game = {
  clock: [0, 0, 0],
  tama: null,
  newGame() {
    // prompt user for name
    //instantiate and store
    //and start clock
  },
  getName() {
    //ask for userInput
    //Return name
  },
  moreHungry() {
    let howHungry = this.tama.hungry;
    if (howHungry < 10) {
      howHungry++;
    }
    if (howHungry >= 10) {
      this.tamaDeath();
    }
  },
  moreTired() {
    let howTired = this.tama.sleepiness;
    if (howTired < 10) {
      howTired++;
    }
    if (howTired >= 10) {
      this.tamaDeath();
    }
  },
  moreBored() {
    let howBored = this.tama.hungry;
    if (howBored < 10) {
      howBored += 2;
    }
    if (howBored >= 10) {
      this.tamaDeath();
    }
  },
  tamaDeath() {
    let beginAgain = prompt('Your tama has died because you are a terrible parent. Begin again? Y/N');
    if (beginAgain === "Y" || beginAgain === "y") {
      this.tama = new Tamagotchi(getname());
      this.clock = [0, 0, 0];
      this.newGame();
    } else {
      alert("Don't have children!");
    }
  },
  startClock() {
    setInterval(() => {
      // if checks -- increase stuff
      console.log(`The time is ${this.clock[0]}: ${this.clock[1]}: ${this.clock[2]}`);

      this.clock[2]++;

      if (this.clock[2] % 60 === 0) {
        this.clock[2] = 0;
        this.clock[1]++;
          if (this.clock[1] % 60 === 0) {
            this.clock[1] = 0;
            this.clock[0]++;
            if (this.clock[0] % 24 === 0) {
              this.clock = [0, 0, 0];
            }
          }
      }
    }, 1000);
  }
}



// click any button starts game -- game.start()

//
//
// Event Listeners
// $('.but1').on('click', game.tama.eat);
$('.but1').on('click', () => {
  game.tama.eat()
});
$('.but2').on('click', () => {
  game.tama.play();
});
$('.but3').on('click', () => {
  game.tama.sleep
});
