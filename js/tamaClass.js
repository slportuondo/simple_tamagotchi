class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.boredom = 1;
    this.sleepiness = 1;
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
