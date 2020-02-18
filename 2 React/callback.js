let req = new XMLHttpRequest();
req.open("get", "data.txt");

req.onload = function(){
  alert(this.responseText);
}

req.send();

alert("立刻執行");



// function getData(){
//   let req = new XMLHttpRequest();
//   req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");
//
//   req.onload = function(){
//     alert(this.responseText);
//   };
//
//   req.send();
// }
//
// getData();

function getData(callback){
  let req = new XMLHttpRequest();
  req.open("get", "https://training.pada-x.com/resources/javascript-es6-react/data.out");

  req.onload = function(){
    callback(this.responseText);
  };

  req.send();
}

getData(function(result){
  alert(result);
});
