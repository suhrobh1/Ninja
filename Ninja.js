class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }

    showstats(){
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

const ninjaA = new Ninja("Kazama", 100);

ninjaA.showstats();
ninjaA.drinkSake();
ninjaA.showstats();