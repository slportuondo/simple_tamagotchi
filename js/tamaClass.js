class Tamagotchi {
  constructor() {
    this.hunger = 1;
    this.sleepiness = 1;
    this.boredom = 1;
  }
  eat(){
    if (this.hunger >= 3) {
      this.hunger -= 2;
    } else {
      this.hunger = 1;
    }
  }
  sleep(){
    this.sleepiness = 1;
  }
  play(){
    if (this.boredom >= 2) {
      this.boredom -= 1;
    } else {
      this.boredom = 1;
    }
  }
}
