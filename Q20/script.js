class Shape{
  
    area(){    throw new Error("Abstract method");}

}
class Circle  extends Shape{
  
    constructor(r){
         super(); 
        this.r=r
    }
    area(){
        return this.r*this.r*Math.PI
    }
}
class Rectangle extends Shape{
    constructor(l,w){
         super(); 
        this.l=l
        this.w=w
    }
    area(){
        return this.l*this.w
    }
}

const c=new Circle(3);
console.log(c.area())
const r=new Rectangle(3,4);
console.log(r.area())