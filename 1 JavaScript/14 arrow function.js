let test1 = (n1, n2)=>(n1+n2);
console.log(test1(1, 2));



let test2 = (n1,n2)=>{
  alert(n1 + n2);
};

test2(1,2);



// 匿名函數
document.addEventListener("keydown", function(e){
  alert(e.key);
});
document.addEventListener('keydown', (e)=>{
  console.log(e.key);
});
