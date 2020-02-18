class Car{
  constructor(color){
    this.color = color;
  }

  run(){
    console.log('It runs');
  }
  // 加上static
  static showBrand(){
    console.log('It is Toyota');
  }
}



let car1 = new Car('red');

car1.run();

Car.showBrand();
