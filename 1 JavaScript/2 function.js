// 設計函式
function test(){
  alert("Hello World");
}
// 呼叫函式
test();










function call(message){
  alert(message);
}

call("Hi Jack Lee");







function add(n1, n2){
  return n1 + n2;
}

let result = add(1, 2) * add(2,3);
alert(result);









function getSum(max){
  let sum = 0;

  for (let i = 1; i <= max; i++){
    sum += i;
  }
  alert(sum);
  return sum;
}

getSum(100);


// 把函式當變數
let x = function(n1, n2){
  alert(n1 + n2);
  return n1 + n2;
};
// 呼叫函示
x(1, 2);



let y = x;
y(5, 6);
