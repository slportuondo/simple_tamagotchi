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
  animateChar (width, height) {
    $('#character').css({'width': width, 'height': height});
  },
  startClock() {
    this.interval = setInterval(() => {
      // if checks -- increase stuff
      $('#time').text(`${this.clock[0]}: ${this.clock[1]}: ${this.clock[2]}`);

      this.clock[2]++; // this.clock[2] is equal to time in seconds
      if (this.clock[2] % 2 === 1) {
        this.animateChar('50px', '65px')
      }
      if (this.clock[2] % 2 === 0) {
        this.animateChar('40px', '40px');
        this.moreBored();
        if (this.clock[2] % 4 === 0) {
          this.moreTired();
        }
      }
      if (this.clock[2] % 3 === 0) {
        this.moreHungry();
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
  decreaseHealth (tamaAttr, posHealthTag, negHealthTag) {
    this.tama[tamaAttr]++;
    const healthType = this.tama[tamaAttr];
    $(posHealthTag).css('flex-grow', (10 - healthType));
    $(negHealthTag).css('flex-grow', healthType);
  },
  moreHungry() {
    let hunger = this.tama.hunger;
    if (hunger < 10) {
      this.decreaseHealth('hunger', '#notHungry', '#addHunger');
    } else {
      this.tamaDeath();
    }
  },
  moreTired() {
    let sleepiness = this.tama.sleepiness;
    if (sleepiness < 10) {
      this.decreaseHealth('sleepiness','#notSleepy', '#addSleepy');
    } else {
      this.tamaDeath();
    }
  },
  moreBored() {
    let boredom = this.tama.boredom;
    if (boredom < 10) {
      this.decreaseHealth('boredom', '#notBored', '#addBored');
    } else {
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

// Event Listeners
$('#but1').on('click', () => {
  game.tama.eat()
});
$('#but2').on('click', () => {
  game.tama.play();
});
$('#but3').on('click', () => {
  game.tama.sleep();
});
$('#startButton').on('click', () => {
  game.newGame();
});
