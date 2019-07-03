console.log('hello world');

const game = {
  clock: [0, 0, 0],
  tama: null,
  time: new Date(),
  updateClock() {
    // const time = new Date();
    this.clock[0] = this.time.getHours();
    this.clock[1] = this.time.getMinutes();
    this.clock[2] = this.time.getSeconds();
    console.log(this.clock[0], this.clock[1], this.clock[2]);
  }
}
setInterval(game.updateClock(), 1000);
// setInterval(()=> console.log('hello'), 1000)










//
//
// // Event Listeners
// $('.but1').on('click', game.tama.eat());
// $('.but2').on('click', game.tama.play());
// $('.but3').on('click', game.tama.sleep());
