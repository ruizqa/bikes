class Bike {
    constructor(public price: number, public max_speed:string){
        this.price = price;
        this.max_speed = max_speed;
    }
    
    public miles= 0;
 
    displayInfo = ():Bike =>
     {console.log(`Bike Price: ${this.price} Maximum Speed: ${this.max_speed} Miles: ${this.miles}`)
     return this;} 
 
    ride = ():Bike =>
    {console.log('Riding')
    this.miles +=10;
    return this;
    }
 
    reverse = ():Bike =>
    {console.log('Reversing')
       if(this.miles - 5 >0){
          this.miles -=5;
       }
       return this;
    }
 
 
 }
 
 let bike1 = new Bike(200, "25mph");
 bike1.ride().ride().ride().reverse().displayInfo()
 let bike2 = new Bike(100, "15mph");
 bike2.ride().ride().reverse().reverse().displayInfo();
 let bike3 = new Bike(500, "75mph");
 bike3.reverse().reverse().reverse().displayInfo();
 
 
 