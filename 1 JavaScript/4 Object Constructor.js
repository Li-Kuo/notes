// 建立空白物件
let player1 = new Object();

// properties
player1.name = "Jack";
player1.age = 19;

// methods
player1.getInfo = function(){
return "Name: " + this.name + " Age: " + this.age;
}


alert(player1.getInfo());




// constructor
function Player(name, age){
  this.name = name;
  this.age = age;

  this.getInfo = function(){
    return "Name: " + this.name + " Age: " + this.age;
  }
}


let player2 = new Player("Lee", 25);

alert(player2.getInfo());
