class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.boredom = 0;
    this.sleepiness = 0;
  }
  eat(){
      this.hunger -= 1;

  }
  sleep(){
    this.sleepiness -= 1;

  }
  play(){
      this.boredom -= 1;
  }
}
