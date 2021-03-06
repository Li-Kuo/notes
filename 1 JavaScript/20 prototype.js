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


// ECar prototype
let eCarPrototype = Object.getPrototypeOf(eCar1);
console.log(eCarPrototype);

// Car prototype
let carPrototype = Object.getPrototypeOf(eCarPrototype);
console.log(carPrototype);

// Object prototype
let objectPrototype = Object.getPrototypeOf(carPrototype);
console.log(objectPrototype);

// null prototype
let nullPrototype = Object.getPrototypeOf(objectPrototype);
console.log(nullPrototype);
