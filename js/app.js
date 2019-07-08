console.log('hello world');

const game = {
  clock: [0, 0, 0], //Hours, minutes, seconds -- resets at the end of the day
  interval: 0,
  tama: null,
  newGame() {
    // prompt user for name
    const name = this.getName();
    // instantiate and store
    this.tama = new Tamagotchi(name);
    // start clock
    this.clock = [0, 0, 0];
    this.startClock();
  },
  getName() {
    let name = prompt('A new tama has spawned! What would you like to name it?');
    while (name > 10) {
      name = prompt("Your Tama's name is too long – choose another name:");
    }
    return name;
  },
  startClock() {
    this.interval = setInterval(() => {
      // if checks -- increase stuff
      console.log(`The time is ${this.clock[0]}: ${this.clock[1]}: ${this.clock[2]}`);

      this.clock[2]++; // this.clock[2] is equal to time in seconds
      console.log(game.tama);

      if (this.clock[2] % 2 === 0) {
        this.moreBored();
      }
      if (this.clock[2] % 10 === 0) {
        this.moreHungry();
      }
      if (this.clock[2] % 15 === 0) {
        this.moreTired();
      }

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
  },
  decreaseHealth (tamaObjKey, posHealthTag, negHealthTag) {
    this.tama[tamaObjKey] ++;
    $(posHealthTag).css('flex-grow', '-=1');
    $(negHealthTag).css('flex-grow', '+=1');
  },
  moreHungry() {
    let howHungry = this.tama.hunger;
    if (howHungry <= 10) {
      this.decreaseHealth('hunger', '#notHungry', '#addHunger');
    } else {
      this.tamaDeath();
    }
  },
  moreTired() {
    let howTired = this.tama.sleepiness;
    if (howTired <= 10) {
      this.decreaseHealth('sleepiness','#notSleepy', '#addSleepy');
    }
    if (howTired >= 10) {
      this.tamaDeath();
    }
  },
  moreBored() {
    let howBored = this.tama.boredom;
    if (howBored <= 10) {
      this.decreaseHealth('boredom', '#notBored', '#addBored');
    }
    if (howBored >= 10) {
      this.tamaDeath();
    }
  },
  tamaDeath() {
    clearInterval(this.interval);
    let beginAgain = prompt('Your tama has died because you are a terrible parent. Begin again? Y/N');
    if (beginAgain === "Y" || beginAgain === "y") {
      this.newGame();
    } else {
      alert("Don't have children!");
    }
  }
}
// click any button starts game -- game.start()

// Event Listeners
$('#but1').on('click', () => {
  game.tama.eat()
});
$('#but2').on('click', () => {
  game.tama.play();
});
$('#but3').on('click', () => {
  game.tama.sleep
});
$('#startButton').on('click', () => {
  game.newGame();
});
