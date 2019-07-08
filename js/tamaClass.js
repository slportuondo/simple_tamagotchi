class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.hunger = 1;
    this.boredom = 1;
    this.sleepiness = 1;
  }
  eat(){
    if (this.hunger > 2) {
      console.log(this.hunger);
      this.hunger -=2;
      console.log(this.hunger);
      $('notHungry').css('flex-grow', (10 - this.hunger));
      $('addHunger').css('flex-grow', this.hunger);
    }
  }
  play(){
    if (this.boredom > 2){
      console.log(this.boredom);
      this.boredom -= 2;
      console.log(this.boredom);
      $('notBored').css('flex-grow', (10 - this.boredom));
      $('addBored').css('flex-grow', this.boredom);
    }
  }
  sleep(){

    if (this.sleepiness > 2) {
      console.log(this.sleepiness);
      this.sleepiness -= 2;
      console.log(this.sleepiness);
      $('notSleepy').css('flex-grow', (10 - this.sleepiness));
      $('addSleepy').css('flex-grow', this.sleepiness);
    }
  }
}
