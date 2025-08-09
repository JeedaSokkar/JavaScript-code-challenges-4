

class Car{
    constructor(make,model){
        this.make=make
        this.model=model
    }

    start(){
        console.log("Car started")
    }
}
const objCar=new Car("a","2022")
objCar.start()
console.log(objCar.make)