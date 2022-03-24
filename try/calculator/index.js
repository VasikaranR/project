// function callit(){

// for(var i=0;i<4;i++){
// var op=document.getElementById("b"+i).value;
// }
// alert(op);
// multiply(a,b);multiply(a,b);
// add(a,b);
// subract(a,b);
// divide(a,b);
// alert(calculator(a,b,op));
// add(a,b);
// subract(a,b);
// divide(a,b);
// alert(calculator(a,b,op));

var a=Number.parseInt(Document.getElementById("first").value);
var b=Number.parseInt(ocument.getElementById("second").value);
 
function multiply(a,b){
    alert( a*b);
  
  }
  function add(a,b){
    alert( a+b);
  
  }
  function subract(a,b){
    alert( a-b);
  
  }
  function divide(){
    alert( a/b);
  
  }
  function calculator(a,b,operator){
     return operator(a,b)
  }

  console.log(a);


