class Car{
  constructor(color){
    this.color = color;
  }

  run(){
    console.log('It is running');
  }

}




let car1 = new Car('red');
console.log(car1.color);


car1.run();

// add properties and methods on an objet
car1.name = 'Samuel';

car1.showName = function(){
  console.log(this.name);
};

car1.showName();
