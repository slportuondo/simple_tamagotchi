console.log('hello world');

const game = {
  clock: [0, 0, 0],
  timer: null,
  time: 0,
  // displayClock(){
  //     console.log(this.clock[0], this.clock[1], this.clock[2]);
  //     this.updateClock();
  // },
  updateClock() {
    const time = new Date();
    this.clock[0] = time.getHours();
    this.clock[1] = time.getMinutes();
    this.clock[2] = time.getSeconds();
    console.log(this.clock[0], this.clock[1], this.clock[2]);
  }
}
setInterval(game.updateClock(), 1000);
// setInterval(()=> console.log('hello'), 1000)
