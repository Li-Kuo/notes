class Car{
  constructor(color, age){
    this.color = color;
    this.age = age;
  }

  run(){
    console.log('It is running');
  }

  stop(){
    console.log('It stops');
  }

}




class ECar extends Car{
  constructor(color, age, battery){
    super(color, age);
    this.battery = battery;
  }

  //改寫stop()
  stop(){
    console.log('Electric Car Stops');
  }

}

let eCar1 = new ECar("blue", 3, 100);
console.log(eCar1);


eCar1.run();
eCar1.stop();
