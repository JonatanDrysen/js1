class Animal {
//"konstruerar" själva klassen när den triggas
    constructor(name, legs) {
//variabler med "this" specifierar att variabeln tillhör klassen, existerar inte utanför klassen
        this.name = name
        this.legs = legs
    }
//metoder i klassen
    speech() {
        return `${this.name} makes a noise`
    }
    numberOfLegs() {
        return `this animal has ${this.legs} legs`
    }
}
//instans av klass
const dog = new Animal("Dog", 4)
console.log( dog.speech() )
console.log( dog.numberOfLegs() )

const cat = new Animal("Cat", 4)
console.log( cat.speech() )
console.log( cat.numberOfLegs() )

const spider = new Animal("Spider", 8)
console.log( spider.speech() )
console.log( spider.numberOfLegs() )