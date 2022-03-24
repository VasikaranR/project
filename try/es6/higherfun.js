var a=5;
var b=6;
function multiply(a,b){
  return a*b;

}
function add(a,b){
    return a+b;

}
function subract(a,b){
    return a-b;

}
function divide(){
    return a/b;

}
function calculator(a,b,operator){
   return operator(a,b)
}
console.log(calculator(a,b,subract));