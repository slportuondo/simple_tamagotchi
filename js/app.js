console.log('hello world');

const game = {
  clock: [0, 0, 0],
  tama: null,
  start() {
    // prompt user for name
    //instantiate and store
    //and start clock
  },
  moreBored() {

  },
  moreTired() {

  },
  moreHungry() {

  },
  tamaDeath() {

  }
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
game.startClock();



// click any button starts game -- game.start()

//
//
// Event Listeners
// $('.but1').on('click', game.tama.eat);
$('.but1').on('click', () => {
  game.tama.eat()
});
// $('.but2').on('click', game.tama.play);
// $('.but3').on('click', game.tama.sleep);
