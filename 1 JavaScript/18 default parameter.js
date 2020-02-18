let multiply = (n1, n2=1) => (n1*n2);

console.log(multiply(5, 10));
console.log(multiply(10));





let wholeName = (fName='Jack', lName='Lee', name= fName + ' ' + lName) => {
  alert(name);
}

wholeName();
wholeName('Kayla');
wholeName('Kayla', 'Liu', 'Hello Kitty');
