//函式有獨立的內部空間
let x = 1;

function test(){
  let x = 5;
  alert(x+2);
}

test();


// 外部程式碼，不能使用內部變數

function add(){
  let y = 5;
  return y;
}

alert(y);

// 內部程式碼，可使用外部變數
let x = 1;
function sum(){
  alert(x+2);
}

sum();
