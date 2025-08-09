
class Animal{
    constructor(age){
        this.age=age
    }
    speak(){
        console.log("speek")
    }
}

class Dog extends Animal{
    speak(){
        console.log("The dog speak")
    }
}
const myDog = new Dog(3);
myDog.speak();