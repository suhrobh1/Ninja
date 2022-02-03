class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(
            "Name:", this.name, 
            "Health:", this.health,
            "Speed:", this.speed,
            "Strength:", this.strength
        );
    }

    drinkSake(){
        this.health += 10;
    }

}


class Sensei extends Ninja{
    constructor(name, health=200, speed = 10, strength = 10){
        super(name, health, speed, strength);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Drink, but keep DRY!")
    }
}


console.log("---Kazama---");
const ninjaA = new Ninja("Kazama", 100, 5, 5);
ninjaA.showStats();
ninjaA.drinkSake(); 

console.log("---Kenji---");
const ninjaB = new Ninja("Kenji", 100, 7, 7);
ninjaB.showStats();
ninjaB.drinkSake();
 
console.log("---Sensei Masatoshi---");
const senseiA = new Sensei("Masatoshi");
senseiA.showStats();
senseiA.speakWisdom();



